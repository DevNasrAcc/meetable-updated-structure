import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {styles} from './style'


const CustomHeader = ({onPress, type, title}) => {
  return (
    <ImageBackground source={require('../../assets/images/headerimage.png')} style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          {!type ? <Image source={require('../../assets/images/icons/sidebar.png')} resizeMode="center" style={{width:30, height:40}}/> : 
           <View style={styles.sub_container}>
              <Image source={require('../../assets/images/icons/backarrow.png')} resizeMode="center"/>
              <Text style={styles.text}>{title}</Text>
          </View>}
         </TouchableOpacity>

         <View style={styles.sub_container}>
            <Image source={require('../../assets/images/icons/alert.png')} style={{width:40, height:40}} resizeMode="center"/>
            <Image source={require('../../assets/images/icons/notification.png')} resizeMode="center" style={{width:30, height:40}}/>
         </View>
        
      </View>
    </ImageBackground>
  )
}

export default CustomHeader
