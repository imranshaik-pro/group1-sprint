package in.group1sprint.study;
import android.net.Uri;
import com.google.androidbrowserhelper.trusted.LauncherActivity;
/** The updated browser handles identity, cookies, downloads and its offline cache. */
public final class StudyActivity extends LauncherActivity {
    @Override protected Uri getLaunchingUrl() {
        Uri data = getIntent().getData();
        return data != null && LaunchPolicy.isAllowed(data.toString()) ? data : Uri.parse(LaunchPolicy.studyUrl("today"));
    }
}
