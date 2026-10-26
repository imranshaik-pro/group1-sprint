import importlib.util,json,pathlib,tempfile,unittest
from unittest.mock import patch
from types import SimpleNamespace
spec=importlib.util.spec_from_file_location('preflight',pathlib.Path(__file__).with_name('release-preflight.py'));p=importlib.util.module_from_spec(spec);spec.loader.exec_module(p)
class ReleasePreflightTests(unittest.TestCase):
    def test_missing_or_partial_settings_are_blocked_without_secret_values(self):
        result=p.inspect({});self.assertFalse(result['release_ready']);self.assertEqual(len(result['missing_settings']),4)
        result=p.inspect({'GROUP1_SIGNING_STORE_PASSWORD':'private-password'});self.assertFalse(result['release_ready']);self.assertNotIn('private-password',json.dumps(result))
    def test_nonexistent_and_symlink_stores_are_blocked(self):
        env={name:'private-value' for name in p.NAMES};env[p.NAMES[0]]='/does-not-exist'
        self.assertFalse(p.inspect(env)['release_ready'])
        with tempfile.TemporaryDirectory() as folder:
            target=pathlib.Path(folder)/'store';target.write_text('dummy');link=pathlib.Path(folder)/'link';link.symlink_to(target);env[p.NAMES[0]]=str(link);self.assertFalse(p.inspect(env)['release_ready'])
    def test_keytool_failure_or_certificate_only_alias_never_allows_signing(self):
        with tempfile.NamedTemporaryFile() as store:
            env={name:'private-value' for name in p.NAMES};env[p.NAMES[0]]=store.name;env[p.NAMES[2]]='release-alias'
            for result in [SimpleNamespace(returncode=1,stdout='private-value'),SimpleNamespace(returncode=0,stdout='trustedCertEntry')]:
                with patch.object(p.shutil,'which',return_value='/java/keytool'),patch.object(p.subprocess,'run',return_value=result):self.assertFalse(p.inspect(env)['release_ready'])
    def test_secret_is_passed_by_environment_and_never_as_keytool_argument(self):
        with tempfile.NamedTemporaryFile() as store:
            env={name:'private-value' for name in p.NAMES};env[p.NAMES[0]]=store.name;env[p.NAMES[2]]='release-alias'
            with patch.object(p.shutil,'which',return_value='/java/keytool'),patch.object(p.subprocess,'run',return_value=SimpleNamespace(returncode=0,stdout='PrivateKeyEntry')) as run:
                result=p.inspect(env);self.assertTrue(result['release_ready']);self.assertNotIn(env[p.NAMES[1]],run.call_args.args[0]);self.assertIn('-storepass:env',run.call_args.args[0]);self.assertNotIn('private-value',json.dumps(result))
if __name__=='__main__':unittest.main()
