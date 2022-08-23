import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ChatHeader from '../../components/chatHeader'
import LinearGradient from 'react-native-linear-gradient'

import {styles} from './style'
import { height } from '../../assets/constant'

const ChatScreen = ({navigation}) => {
  return (
    <View>
     <ChatHeader/>
     <ScrollView>
     <LinearGradient colors={['#890051', '#1F0046']} style={{height: height}}>
      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/chatImage.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>


      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>


      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

    </LinearGradient>
     <LinearGradient colors={['#890051', '#1F0046']} style={{height: height}}>
      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/chatImage.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>


      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>


      <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
         <Image source={require('../../assets/images/pic2.png')} resizeMode="center" style={{width:60,}}/>
         <View>
         <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}>Michael Clark</Text>
         <Text style={{color:'rgba(196, 196, 196, 1)'}}>Can we meet at the left corner of...</Text>
         </View>
         <Text style={{fontWeight:'bold', fontSize:9, color:'rgba(196, 196, 196, 1)'}}>Today</Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}/>

    </LinearGradient>
     </ScrollView>
    
    </View>
  )
}

export default ChatScreen
