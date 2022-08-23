import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';

import {styles} from './style'
import ImageCard from '../../components/imageCard';
import { height } from '../../assets/constant';
import AppTransparentButton from '../../components/appTransparentbutton';

const ProfilePicture = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Profile Picture"/>
    <Image source={require('../../assets/images/profile.png')} style={styles.image}/>
    <View style={styles.top_image}>
        <Text style={styles.text}>Jhon Smith</Text>
        <Text style={styles.sub_text}>JhonSmith@gmail.com</Text>
    </View>
   <View style={[styles.card_container, {height: height/7}]}>
       <ImageCard image={require('../../assets/images/profilemain.png')} status={true}/>
       <ImageCard image={require('../../assets/images/profile01.png')}/>
       <ImageCard image={require('../../assets/images/profile02.png')}/>
   </View>
   <View style={styles.card_container}>
       <ImageCard image={require('../../assets/images/profile03.png')}/>
       <ImageCard image={require('../../assets/images/profile04.png')}/>
       <ImageCard image={require('../../assets/images/profile05.png')}/>
   </View>
   <View style={styles.btn_container}>
     <AppTransparentButton title="Save" status_md={true} md={true}/>
      <AppTransparentButton title="Add"  md={true}/>
   </View>

    </LinearGradient>
  )
}

export default ProfilePicture;

