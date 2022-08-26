import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
import _Api from '../apiConfig';
import {EndPoints} from '../EndPoints/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WEB_CLIENT_ID} from '../Utility';
import auth from '@react-native-firebase/auth';
import {UserSocialLoginAction} from '../../store/actions/AuthActions';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  offlineAccess: true,
  hostedDomain: '',
  loginHint: '',
  accountName: '',
});

async function onGoogleAuth(navigation, dispatch) {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  auth()
    .signInWithCredential(googleCredential)
    .then(user => {
      let details = user.user;
      let obj = {
        user_name: details?.displayName,
        name: details?.displayName,
        type: 'google',
        email: details?.email,
        image: details?.photoURL,
        social_id: details?.uid,
      };
      dispatch(UserSocialLoginAction(obj, navigation));
    })
    .catch(error => {
      console.log('error', error);
    });
}

export default onGoogleAuth;
