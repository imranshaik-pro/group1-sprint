export function saveAccessMessage(signedIn:boolean,loaded:boolean,needsSetup:boolean,status?:string):string{
 if(!signedIn)return 'Sign in with your study account to save progress.';
 if(!loaded)return 'Checking your membership. Please wait, or retry Sync now in Settings.';
 if(needsSetup)return 'The owner must finish workspace setup before progress can be saved.';
 if(status==='pending')return 'Your registration is awaiting the super admin’s approval. You do not need to join again.';
 if(status==='unregistered')return 'Register once using your admin’s invitation link. After approval, open the website directly.';
 if(status==='suspended'||status==='rejected')return 'Your membership is paused. Ask the super admin to restore your access.';
 return 'Your membership could not be confirmed. Retry Sync now in Settings.';
}
