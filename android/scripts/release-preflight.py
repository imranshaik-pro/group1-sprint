#!/usr/bin/env python3
"""Report signing readiness without creating keys or displaying secret values."""
import argparse,json,os,pathlib,shutil,subprocess
NAMES=('GROUP1_SIGNING_STORE_FILE','GROUP1_SIGNING_STORE_PASSWORD','GROUP1_SIGNING_KEY_ALIAS','GROUP1_SIGNING_KEY_PASSWORD')
def inspect(env):
    missing=[key for key in NAMES if not str(env.get(key,'')).strip()]
    if missing:return {'release_ready':False,'blockers':['Production signing settings are incomplete.'],'missing_settings':missing}
    path=pathlib.Path(env[NAMES[0]])
    if not path.is_file() or path.is_symlink():return {'release_ready':False,'blockers':['The signing store must be an existing regular file, not a symlink.']}
    keytool=shutil.which('keytool')
    if not keytool:return {'release_ready':False,'blockers':['Java keytool is unavailable.']}
    try:
        result=subprocess.run([keytool,'-J-Duser.language=en','-J-Duser.country=US','-list','-keystore',str(path),'-alias',env[NAMES[2]],'-storepass:env',NAMES[1]],env=dict(env),capture_output=True,text=True,timeout=30)
    except (OSError,subprocess.TimeoutExpired):return {'release_ready':False,'blockers':['The signing store could not be checked.']}
    if result.returncode or 'PrivateKeyEntry' not in result.stdout:return {'release_ready':False,'blockers':['The configured alias is not an accessible private-key entry.']}
    return {'release_ready':True,'blockers':[],'note':'The release build must still validate the key password, sign the output and verify its certificate.'}
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--require-signing',action='store_true');args=parser.parse_args();result=inspect(os.environ);print(json.dumps(result));raise SystemExit(1 if args.require_signing and not result['release_ready'] else 0)
