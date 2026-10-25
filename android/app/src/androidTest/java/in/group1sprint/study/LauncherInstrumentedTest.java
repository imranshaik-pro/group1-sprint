package in.group1sprint.study;

import android.app.Activity;
import android.app.Instrumentation.ActivityResult;
import android.content.ComponentName;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.espresso.intent.Intents;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import java.io.File;
import java.io.FileOutputStream;
import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.action.ViewActions.scrollTo;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.withText;
import static androidx.test.espresso.intent.Intents.intended;
import static androidx.test.espresso.intent.Intents.intending;
import static androidx.test.espresso.intent.matcher.IntentMatchers.hasComponent;
import static androidx.test.espresso.intent.matcher.IntentMatchers.hasData;
import static org.hamcrest.Matchers.allOf;
import static org.junit.Assert.*;

/** Real Android install/render tests; browser handoff is intercepted, not live-login QA. */
@RunWith(AndroidJUnit4.class)
public final class LauncherInstrumentedTest {
    private ActivityScenario<HomeActivity> scenario;
    @Before public void start() {
        Intents.init();
        intending(hasComponent(StudyActivity.class.getName())).respondWith(new ActivityResult(Activity.RESULT_CANCELED,null));
        scenario=ActivityScenario.launch(HomeActivity.class);
    }
    @After public void finish(){if(scenario!=null)scenario.close();Intents.release();}
    @Test public void homeRendersAndSurvivesRecreation() throws Exception {
        onView(withText("Group1 Sprint")).check(matches(isDisplayed()));
        onView(withText("Continue my study")).perform(scrollTo()).check(matches(isDisplayed()));
        scenario.recreate();
        onView(withText("Continue my study")).perform(scrollTo()).check(matches(isDisplayed()));
        Bitmap shot=InstrumentationRegistry.getInstrumentation().getUiAutomation().takeScreenshot();
        assertNotNull(shot);
        File folder=InstrumentationRegistry.getInstrumentation().getTargetContext().getExternalFilesDir(null);
        assertNotNull(folder);
        try(FileOutputStream out=new FileOutputStream(new File(folder,"native-home-api-"+Build.VERSION.SDK_INT+".png"))){assertTrue(shot.compress(Bitmap.CompressFormat.PNG,100,out));}finally{shot.recycle();}
    }
    @Test public void everyStudyButtonHandsOffItsExactAllowedRoute() {
        String[][] routes={{"Continue my study","today"},{"Learn · topic library","library"},{"Practise · questions & tests","practice"},{"Read · notes & textbooks","pdfs"},{"Review my progress","insights"},{"Sync & full backup","settings"}};
        for(String[] route:routes){onView(withText(route[0])).perform(scrollTo(),click());intended(allOf(hasComponent(StudyActivity.class.getName()),hasData(LaunchPolicy.studyUrl(route[1]))));}
        onView(withText("Sign in / account")).perform(scrollTo(),click());
        intended(allOf(hasComponent(StudyActivity.class.getName()),hasData(LaunchPolicy.ORIGIN+"/#account")));
    }
    @Test public void aboutDialogCanCloseAndStudyActivityRejectsForeignIntentData() throws Exception {
        onView(withText("About this pilot")).perform(scrollTo(),click());
        onView(withText("Got it")).check(matches(isDisplayed())).perform(click());
        onView(withText("Continue my study")).perform(scrollTo()).check(matches(isDisplayed()));
        StudyActivity study=new StudyActivity();
        study.setIntent(new Intent().setData(Uri.parse("https://malicious.invalid/?token=not-a-real-token")));
        assertEquals(LaunchPolicy.studyUrl("today"),study.getLaunchingUrl().toString());
        assertFalse(InstrumentationRegistry.getInstrumentation().getTargetContext().getPackageManager().getActivityInfo(new ComponentName(InstrumentationRegistry.getInstrumentation().getTargetContext(),StudyActivity.class),0).exported);
    }
}
