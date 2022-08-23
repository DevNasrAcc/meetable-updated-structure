import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import {styles} from './style'

const ChatDetailHeader = ({onPress, type, title}) => {
  return (
    <LinearGradient colors={['#f2169d','#514af8']}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {/* {!type ? <Image source={require('../../assets/images/icons/sidebar.png')} resizeMode="center"/> :  */}
         <View style={styles.sub_container}>
            <Image source={require('../../assets/images/icons/whiteBack.png')} resizeMode="center"/>
        </View>
        {/*   } */}
       </TouchableOpacity>
       <View style={styles.sub_container}>
          <Image source={require('../../assets/images/icons/white_location.png')} resizeMode="center"/>
          <Image source={require('../../assets/images/icons/whiteNotification.png')} resizeMode="center"/>
       </View>
      
    </View>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingleft:16, paddingRight:10}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../assets/images/chatImage.png')} resizeMode="center" style={{width:80, height:80, marginLeft:10}}/>
          <Text style={{color:'#fff', fontWeight:'bold', fontSize:20}}>Michael Clark</Text>
      </View>
       <Image source={require('../../assets/images/icons/delete.png')} resizeMode="center"/>
       </View>
  </LinearGradient>
  )
}

export default ChatDetailHeader
