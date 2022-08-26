import {appleAuth} from "@invertase/react-native-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-simple-toast';

export const  appleLoginButton = async (navigation,dispatch) => {
    console.log(appleAuth, 'Apple 1')
  //  await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGOUT,
  //   });
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    // console.log(appleAuthRequestResponse, 'Apple 2')
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    console.log(credentialState, 'state')
    // console.log(credentialState, 'Apple 3')
    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      var GET_ID_DATA = await AsyncStorage.getItem(`Apple_ID:${appleAuthRequestResponse.user}`)
      const GET_APPLE_AUTH = {
        // name: appleAuthRequestResponse.fullName.givenName + " " + appleAuthRequestResponse.fullName.familyName,
        first_name:appleAuthRequestResponse.fullName.givenName,
        last_name:appleAuthRequestResponse.fullName.familyName,
        email: appleAuthRequestResponse.email,
        apple_id: appleAuthRequestResponse.user,
      };
      if (!JSON.parse(GET_ID_DATA)) {
        await AsyncStorage.setItem(`Apple_ID:${appleAuthRequestResponse.user}`, JSON.stringify(GET_APPLE_AUTH))
      }
      var GET_LOADED_ID_DATA = JSON.parse(GET_ID_DATA) ? JSON.parse(GET_ID_DATA) : GET_APPLE_AUTH
      var params = !appleAuthRequestResponse.email ? GET_LOADED_ID_DATA : GET_APPLE_AUTH
      // console.log(params, 'params', 'GET_LOADED_ID_DATA', GET_LOADED_ID_DATA, 1, JSON.parse(GET_ID_DATA), 2, GET_APPLE_AUTH)
    //   this.props.AuthLogin(params, 'apple-login', this.props.navigation.replace, "Home");
    console.log("params",params);
    //   loading(true);
    //   Api._post(
    //     End_Points.Apple_Login,
    //     params,
    //     success => {
    //       console.log(success, 'oooo')
    //       if (success?.status === 200) {
    //         Detail(success?.data?.response?.detail?.user);
    //         AsyncStorage.setItem('token', success.data.response.detail.token);
    //         Toast.show(success.data.response.message);
    //         loading(false);
    //         navigation.navigate('HomeStack');
    //       }
    //     },
    //     error => {
    //       console.log('error', error);
    //       if (error?.response?.status === 422) {
    //         loading(false);
    //         Toast.show(error?.response?.data.error.message);
    //       } else {
    //         loading(false);
    //         Toast.show('Network Error');
    //       }
    //     },
    //   );
    }
  }