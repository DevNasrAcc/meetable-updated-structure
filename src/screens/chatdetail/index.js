import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import ChatDetailHeader from '../../components/chatDetailHeader';
import LinearGradient from 'react-native-linear-gradient';

import { height, width } from '../../assets/constant'
import {styles} from './style'


const ChatDetailScreen = () => {
  return (
    <SafeAreaView>
       <ChatDetailHeader/>
       <LinearGradient colors={['#890051', '#1F0046']} style={{height: height}}>
     <View style={{ marginTop:10}}>
      <View>
        <Text style={{textAlign:'center', color:'#C4C4C4'}}>Today</Text>
      </View>
      {/* <View style={styles.horizontal_line}/> */}
     </View>
      <View style={{marginTop: height/1.7, flexDirection:'row'}}>
          <Image source={require('../../assets/images/icons/file.png')} resizeMode="center"/>
          <TextInput 
          style={{elevation:10, backgroundColor:'#fff', borderRadius:10, width:width/1.48}}
          placeholder=' Type your message here'/>
          <LinearGradient colors={['#f2169d','#514af8']} style={{borderRadius:10, width: width/8, justifyContent:'center', alignItems:'center', marginLeft:10}}>
            <Image  source={require('../../assets/images/icons/arrow.png')} resizeMode="center"
            style={{width:20}}/>
          </LinearGradient>
      </View>

    </LinearGradient>
    </SafeAreaView>
  )
}

export default ChatDetailScreen;

