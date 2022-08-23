import { StyleSheet, Text, View , ImageBackground, KeyboardAvoidingView,TouchableOpacity, ScrollView, Image, BackAndroid, BackHandler, Modal, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import InstagramLogin from 'react-native-instagram-login';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  RegisterUser,
  FacebookUser,
  GoogleLogin
} from '../../../store/action/authAction';


import {styles} from './style'
import landingBg from '../../../assets/images/landing.png'
import AppButton from '../../../components/appButton';

import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
} from 'react-native-fbsdk-next';
 


import axios from 'axios';
// import logo from '../../../assets/images/Logo03.svg'

const LandingScreen = ({navigation}) => {

  const [singleFile, setSingleFile] = useState('');
  const disptach = useDispatch();

  const socialLoading = useSelector(state => state.authReducer.socialLoading);
  const loading = useSelector(state => state.authReducer.loading);
  const msg = useSelector(state => state.authReducer.msg);

  console.log("update account", loading , msg);

  setInstaSeeting = () => {
    console.log()
  }
  useEffect(() => {
    // Initial configuration
    
     // Initial configuration
      GoogleSignin.configure({
        offlineAccess: true,
        
        webClientId:'241223388168-rkbg4l9ff29m760hslakqsbl9ui6jmso.apps.googleusercontent.com',
        androidClientId: '241223388168-kvuklro09g6keqk8dg36jae2q9k0ghlu.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });
    // Check if user is already signed in
    // _isSignedIn();

    console.log("hello world")
  }, []);

 
  // const _getCurrentUserInfo = async () => {

  //   // await GoogleSignin.signOut();    
  //   try {
  //     await GoogleSignin.hasPlayServices({
  //       // Check if device has Google Play Services installed
  //       // Always resolves to true on iOS
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('User Info --> ', userInfo.idToken);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //       alert('User has not signed in yet');
  //       console.log('User has not signed in yet');
  //     } else {
  //       alert("Unable to get user's info");
  //       console.log("Unable to get user's info");
  //     }
  //   }
  // };

  // const facebookLogin = () =>{
  //   console.log('facbook')
  //   axios.get('https://meetable-backend.herokuapp.com/api/facebook').then(res => {
  //     console.log("response ==> ",res.data);
  //   })
  // } 

  const FacebookAuth = async()=> {
    LoginManager.logOut();
    try {
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email', 'user_friends'],
        'limited',
        'my_nonce'
      );
      console.log(result);
    
      if (Platform.OS === 'ios') {
        const result = await AuthenticationToken.getAuthenticationTokenIOS();
        console.log(result?.authenticationToken);
      } else {
        const result = await AccessToken.getCurrentAccessToken();
        console.log(result?.accessToken);
        console.log(result);
        let data = {
          "access_token":result?.accessToken,
          "userid": result?.userID
        }
        disptach(FacebookUser(data, navigation))

        if(result?.accessToken){
          // alert("Signing Successful");
          // navigation.navigate('DrawerHome');

        }
        // setShow(true);
    
      }
    } catch (error) {
      console.log(error);
    }
  }

  const _getCurrentUserInfo = async () => {
    await GoogleSignin.signOut();    
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      if(userInfo){
        // alert("Signing Successful");
        // console.log(userInfo.user.email);
        // navigation.navigate('DrawerHome');
        let  data = {
          userid : userInfo.user.id,
          email: userInfo.user.email,
          full_name: userInfo.user.name,
          socialType: 'google'
        }
        disptach(GoogleLogin(data, navigation))
        // BackHandler.addEventListener('hardwareBackPress', () => {return true});
      }
      // setUserInfo(userInfo);
    } catch (error) {
      console.log("error", error)
      console.log('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (
          error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
        ) {
        alert('Play Services Not Available or Outdated');
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
       <ImageBackground source={landingBg} style={styles.mainContainer}>
       <ScrollView
       contentContainerStyle={{flex: 1, justifyContent:'center'}}
      >
          <Image
            // resizeMode="center"
            style={styles.image}
            resizeMode='center'
            source={require('../../../assets/images/logo.png')}
          />
          <View style={styles.container}>
            <Text style={styles.text}>Meetable</Text>
           <Text style={styles.sub_text}>Book your seats anytime, anywhere with Meetable</Text>
            <AppButton
              icon="login"
              title="Login with instagram"
              onPress0={() => this.instagramLogin.show()}
              type="transparent"
              image={require('../../../assets/images/inst_icon.png')}
            />
             <AppButton
              icon="login"
              onPress0={() => FacebookAuth()}
              title="Login with Facebook"
              type="transparent"
              image={require('../../../assets/images/facebook_icon.png')}
            />
             <AppButton
              icon="login"
              title="Login with Google"
              type="transparent"
              onPress0={() => _getCurrentUserInfo()}
              image={require('../../../assets/images/google_icon.png')}
            />
             <AppButton
              icon="login"
              title="Login with Email"
              onPress0={() => navigation.navigate('SignUp', {type:''})}
              type="transparent"
              image={require('../../../assets/images/email_icon.png')}
            /> 
            <View style={styles.bottom_text}>
            <Text style={styles.forget_text}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forget_sub_text}>Login</Text>
            </TouchableOpacity>
           
            </View>         
          </View>
          <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId='736800487624766'
          appSecret='be6f7743b6681e057cd72d3142b74d68'
          redirectUrl='https://github.com/'
          incognito={false}
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={(data) => console.log(data)}
          // onLoginFailure={(data) => console.log(data)}
          language='tr' //default is 'en' for english
        />
    </ScrollView>

       </ImageBackground>
       </LinearGradient>

      <Modal
          animationType="slide"
          transparent={true}
          visible={socialLoading}
         >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="large" />
              <Text style={{color: '#000'}}>loading ...</Text>
            </View>
          </View>
      </Modal>
</>
  )
}

export default LandingScreen

