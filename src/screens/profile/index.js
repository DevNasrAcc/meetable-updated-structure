import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';

import {styles} from './style'

const Profile = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Profile"/>
    <Image source={require('../../assets/images/profile.png')} style={styles.image}/>
    <View style={styles.top_image}>
      <View style={styles.text_container}>
        <View>
          <Text style={styles.text}>Jhon Smith</Text>
          <Text style={styles.sub_text}>JhonSmith@gmail.com</Text>
        </View> 
        <TouchableOpacity onPress={() => navigation.navigate('ProflePicture')}>
        <Image source={require('../../assets/images/icons/plus.png')} resizeMode="center" style={{marginTop:-4}}/>
        </TouchableOpacity>
 
      </View>
    </View>
   
    <View style={styles.container}>
      
      <View style={styles.sub_container}>
        <Image source={require('../../assets/images/icons/instragram.png')} resizeMode="center"/>
         <Text style={styles.text}>Jhon Smith</Text>
      </View>
      <View style={styles.horizontal_line}/>
      <View style={styles.sub_container}>
        <View style={styles.sub_container02}>
            <Text style={styles.sub_text}>Sharing Table</Text>
            <View style={{paddingTop:4}}/>
            <Text style={styles.text}>No Tables</Text>
        </View>
        
      </View>
      <View style={styles.horizontal_line}/>
    
      <View style={styles.sub_container}>
        <View style={styles.sub_container02}>
            <Text style={styles.sub_text}>Previous Table</Text>
            <View style={{paddingTop:4}}/>
            <Text style={styles.text}>No Previous Tables</Text>
        </View>
        
      </View>
      <View style={styles.horizontal_line}/>
    </View>
    </LinearGradient>
  )
}

export default Profile;

