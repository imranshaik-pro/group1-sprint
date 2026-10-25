package in.group1sprint.study;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.net.ConnectivityManager;
import android.net.NetworkCapabilities;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

public final class HomeActivity extends Activity {
    private static final int TEAL=Color.rgb(23,62,54), IVORY=Color.rgb(247,246,241), MUTED=Color.rgb(91,108,98);
    private LinearLayout content;
    private TextView connection;
    @Override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ScrollView scroll=new ScrollView(this);
        scroll.setFillViewport(true);scroll.setBackgroundColor(IVORY);
        content=new LinearLayout(this);content.setOrientation(LinearLayout.VERTICAL);
        content.setPadding(dp(24),dp(24),dp(24),dp(24));scroll.addView(content);
        scroll.setOnApplyWindowInsetsListener((view,insets)->{
            content.setPadding(dp(24),dp(20)+insets.getSystemWindowInsetTop(),dp(24),dp(24)+insets.getSystemWindowInsetBottom());return insets;
        });setContentView(scroll);
        LinearLayout brand=new LinearLayout(this);brand.setGravity(Gravity.CENTER_VERTICAL);
        ImageView icon=new ImageView(this);icon.setImageResource(R.drawable.ic_launcher);icon.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO);
        brand.addView(icon,new LinearLayout.LayoutParams(dp(48),dp(48)));
        TextView name=text("Group1 Sprint",25,TEAL);name.setTypeface(Typeface.create("serif",Typeface.BOLD));
        LinearLayout.LayoutParams label=new LinearLayout.LayoutParams(0,-2,1);label.setMargins(dp(12),0,0,0);brand.addView(name,label);content.addView(brand);
        gap(32);TextView eyebrow=text("APPSC GROUP-I · ANDROID PILOT",11,MUTED);eyebrow.setLetterSpacing(.10f);content.addView(eyebrow);gap(12);
        TextView title=text("Small steps.\nStronger recall.",36,TEAL);title.setTypeface(Typeface.create("serif",Typeface.NORMAL));title.setLineSpacing(dp(3),1);content.addView(title);gap(12);
        content.addView(text("చదువు. గుర్తుంచుకో. ముందుకు సాగు.",18,TEAL));gap(10);
        content.addView(text("Learn the idea, explain it back, then practise. Your next study session is one tap away.",16,MUTED));gap(22);
        button("Continue my study",()->open(LaunchPolicy.studyUrl("today")),true);
        button("Learn · topic library",()->open(LaunchPolicy.studyUrl("library")),false);
        button("Practise · questions & tests",()->open(LaunchPolicy.studyUrl("practice")),false);
        button("Read · notes & textbooks",()->open(LaunchPolicy.studyUrl("pdfs")),false);
        button("Review my progress",()->open(LaunchPolicy.studyUrl("insights")),false);
        gap(12);button("Sign in / account",()->open(LaunchPolicy.ORIGIN+"/#account"),false);
        button("Sync & full backup",()->open(LaunchPolicy.studyUrl("settings")),false);
        gap(20);connection=text("",13,MUTED);connection.setAccessibilityLiveRegion(View.ACCESSIBILITY_LIVE_REGION_POLITE);content.addView(connection);gap(12);
        content.addView(text("Uses your installed browser for lessons and sign-in. Open material online before relying on its offline cache. Keep full backups of your notes and attachments.",13,MUTED));gap(14);
        Button about=new Button(this);about.setText(R.string.about_pilot);about.setAllCaps(false);about.setOnClickListener(v->new AlertDialog.Builder(this).setTitle("Group1 Sprint · 0.1.0 pilot").setMessage("This Android launcher opens the existing study web app. It does not embed the whole course or store provider keys. Sign in with the same study account and explicitly consent when importing device history.\n\nFullscreen depends on website/app verification; until then the browser toolbar can remain visible. This pilot is not a Play Store release. Live AI, pending content reviews and real-device verification are separate work.").setPositiveButton("Got it",null).show());content.addView(about);
    }
    @Override protected void onResume(){super.onResume();if(connection!=null){ConnectivityManager manager=(ConnectivityManager)getSystemService(CONNECTIVITY_SERVICE);NetworkCapabilities caps=manager.getNetworkCapabilities(manager.getActiveNetwork());boolean online=caps!=null&&caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);connection.setText(online?"Connection available · browser sign-in required for account sync.":"Offline · only previously cached browser content may open. Cloud sync waits for internet.");}}
    private void open(String url){if(!LaunchPolicy.isAllowed(url))return;try{startActivity(new Intent(this,StudyActivity.class).setData(Uri.parse(url)));}catch(ActivityNotFoundException e){new AlertDialog.Builder(this).setTitle("A browser is needed").setMessage("Install or enable an updated browser, then open your study app again.").setPositiveButton("OK",null).show();}}
    private void button(String label,Runnable action,boolean primary){Button b=new Button(this);b.setText(label);b.setAllCaps(false);b.setTextSize(16);b.setTextColor(primary?Color.WHITE:TEAL);b.setGravity(Gravity.CENTER_VERTICAL|Gravity.START);b.setPadding(dp(18),dp(14),dp(18),dp(14));b.setMinHeight(dp(56));GradientDrawable bg=new GradientDrawable();bg.setColor(primary?TEAL:Color.WHITE);bg.setCornerRadius(dp(12));if(!primary)bg.setStroke(dp(1),Color.rgb(218,224,216));b.setBackground(bg);b.setOnClickListener(v->action.run());LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,-2);p.setMargins(0,0,0,dp(10));content.addView(b,p);}
    private TextView text(String value,int size,int color){TextView t=new TextView(this);t.setText(value);t.setTextSize(size);t.setTextColor(color);t.setLineSpacing(dp(3),1);return t;}
    private void gap(int size){View v=new View(this);content.addView(v,new LinearLayout.LayoutParams(1,dp(size)));}
    private int dp(int value){return Math.round(value*getResources().getDisplayMetrics().density);}
}
