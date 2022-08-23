import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, {useEffect} from 'react'
import {styles} from './style';

// images
import splashBg from '../../../assets/images/splash.png'
import logo from '../../../assets/images/logo.png'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingScreen');
    }, 3000);
  }, [])

  return (
    <ImageBackground source={splashBg} style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} resizeMode="center"/>
      </View>
    </ImageBackground>
  )
}

export default SplashScreen;