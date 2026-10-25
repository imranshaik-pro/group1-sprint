package in.group1sprint.study;
import org.junit.Test;
import static org.junit.Assert.*;
public class LaunchPolicyTest {
    @Test public void everyLauncherRouteStaysOnTheStudyOrigin() {
        for (String route : LaunchPolicy.ROUTES) assertTrue(LaunchPolicy.isAllowed(LaunchPolicy.studyUrl(route)));
        assertTrue(LaunchPolicy.isAllowed(LaunchPolicy.ORIGIN + "/#account"));
        assertEquals(LaunchPolicy.studyUrl("today"), LaunchPolicy.studyUrl("unknown"));
    }
    @Test public void rejectsLookalikeOriginsCredentialsArbitraryRoutesAndIntents() {
        for (String value : new String[]{"http://group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#today", "https://group1-sprint-studio.spryplume16.chatgpt.site.evil.test/sprint/index.html#today", "https://user@group1-sprint-studio.spryplume16.chatgpt.site/sprint/index.html#today", LaunchPolicy.ORIGIN+":444/sprint/index.html#today", LaunchPolicy.ORIGIN+"/sprint/index.html?token=secret#today", LaunchPolicy.ORIGIN+"/sprint/../index.html#today", LaunchPolicy.ORIGIN+"/sprint/index.html#unknown", "intent://study", "javascript:alert(1)", "malformed"}) assertFalse(value,LaunchPolicy.isAllowed(value));
    }
}
