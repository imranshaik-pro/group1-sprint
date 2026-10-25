package in.group1sprint.study;
import java.net.URI;
import java.util.Set;
public final class LaunchPolicy {
    public static final String ORIGIN = "https://group1-sprint-studio.spryplume16.chatgpt.site";
    public static final Set<String> ROUTES = Set.of("today", "library", "practice", "pdfs", "settings", "insights");
    private LaunchPolicy() {}
    public static String studyUrl(String route) { return ORIGIN + "/sprint/index.html#" + (route != null && ROUTES.contains(route) ? route : "today"); }
    public static boolean isAllowed(String value) {
        try {
            URI u = new URI(value);
            if (!"https".equals(u.getScheme()) || !"group1-sprint-studio.spryplume16.chatgpt.site".equals(u.getHost()) || u.getUserInfo() != null || u.getPort() != -1 || u.getRawQuery() != null) return false;
            return ("/sprint/index.html".equals(u.getRawPath()) && ROUTES.contains(u.getRawFragment())) || ("/".equals(u.getRawPath()) && "account".equals(u.getRawFragment()));
        } catch (Exception e) { return false; }
    }
}
