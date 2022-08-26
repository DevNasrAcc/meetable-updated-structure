import auth from '@react-native-firebase/auth';
import {GraphRequestManager} from 'react-native-fbsdk';
import {GraphRequest} from 'react-native-fbsdk';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {UserSocialLoginAction} from '../../store/actions/AuthActions';

export async function onFacebookButtonPress(navigation, dispatch) {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'email',
    'public_profile',
    'user_friends',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw Toast.show('Something went wrong obtaining access token');
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  const responseInfoCallback = (error, result) => {
    if (error) {
      Toast.show('Error fetching data: ' + error.toString());
      Toast.show(error?.response?.data.error.message);
    } else {
      let obj = {
        user_name: result?.first_name + ' ' + result?.last_name,
        name: result?.first_name + ' ' + result?.last_name,
        type: 'facebook',
        email: result?.email,
        image: result.picture?.data?.url,
        social_id: result?.id,
      };

      console.log('fbsdk result', result);
      dispatch(UserSocialLoginAction(obj, navigation));
    }
  };

  const infoOfRequest = new GraphRequest(
    '/me',
    {
      accessToken: data.accessToken,
      parameters: {
        fields: {
          string: 'email,first_name,last_name,picture.type(large)',
        },
      },
    },
    responseInfoCallback,
  );
  new GraphRequestManager().addRequest(infoOfRequest).start();

  //   return auth()
  //     .signInWithCredential(facebookCredential)
  //     .then(async res => {
  //       const tokenResult = await res.user.getIdTokenResult();
  //       AsyncStorage.setItem('token', tokenResult.token);
  //       AsyncStorage.setItem('UserId', res?.user?.uid);

  //       if (tokenResult.claims && tokenResult.claims.role == 'user') {
  //         let userObject = {
  //           email: res?.user?.email,
  //           phoneNumber: null,
  //           name: res?.user?.displayName,
  //           userId: res?.user?.uid,
  //           avatar: res?.user?.photoURL,
  //           location: [],
  //         };
  //         dispatch({
  //           type: USER_LOGGED_IN_DETAIL,
  //           payload: userObject,
  //         });
  //         AsyncStorage.setItem('userObject', userObject);
  //         navigation.reset({
  //           index: 0,
  //           routes: [{name: 'Tabs'}],
  //         });
  //         return;
  //       } else if (tokenResult.claims && !tokenResult.claims.role) {
  //         let obj = {
  //           userName: res?.user?.email,
  //           fullName: res?.user?.displayName,
  //           location: [],
  //           password: null,
  //           firebaseUserId: res?.user?.uid,
  //           isSocial: true,
  //           avatar: res?.user?.photoURL,
  //         };
  //         let userObject = {
  //           email: res?.user?.email,
  //           phoneNumber: null,
  //           name: res?.user?.displayName,
  //           userId: res?.user?.uid,
  //           avatar: res?.user?.photoURL,
  //           location: [],
  //         };
  //         dispatch({
  //           type: USER_LOGGED_IN_DETAIL,
  //           payload: userObject,
  //         });
  //         AsyncStorage.setItem('userObject', userObject);
  //         dispatch(GetUserDetailBySignup(obj, navigation, false));
  //         onFacebookButtonPress(dispatch, navigation);
  //       } else {
  //         Toast.show('This account is already in use!');
  //         return;
  //       }
  //     });
}
