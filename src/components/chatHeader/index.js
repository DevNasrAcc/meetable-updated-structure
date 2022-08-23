import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient'
import AppSearchBar from '../appSearchBar'


const ChatHeader = ({onPress, type, title}) => {
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
      <View>
          <Text style={{color:'#fff', fontSize:22, marginLeft:26, fontWeight:'bold'}}>Chats</Text>
          <View style={{marginBottom:20, alignSelf:'center'}}>
           <AppSearchBar placeholder="Search Chats"/>
          </View>        
      </View>
    </LinearGradient>
  )
}

export default ChatHeader
