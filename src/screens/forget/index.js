import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient'
import CustomHeader from '../../components/customHeader'

const ForgetScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Back"/>
      <View style={{margin:18}}>
        <Image source={require('../../assets/images/password.png')} resizeMode="center" 
          style={{width:40, height:30, marginBottom:10}}/>
         <Text style={{color:'rgba(227, 236, 244, 1)', fontSize:22, fontWeight:'700', marginLeft:10}}>Reset Password</Text>
         <Text style={{marginLeft:10, color:'rgba(196, 196, 196, 1)', fontSize:14, fontWeight:'400'}}>Enter the Email associated with your account and we will send an Email with instructions to reset your password.</Text>
         <View style={{marginLeft:20, marginTop:20}}>
           <Text style={{color:'rgba(196, 196, 196, 1)'}}>Email Address</Text>
           <TextInput
              placeholder='Enter Email Address'
              placeholderTextColor='#e3ecf4'
              style={{borderBottomColor:'rgba(227, 236, 244, 0.16)', borderBottomWidth:1, marginRight:10, color:'#fff'}}
           />
         </View>
      </View>
    </LinearGradient>
  )
}

export default ForgetScreen
