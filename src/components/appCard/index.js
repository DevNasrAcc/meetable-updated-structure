import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {styles} from './style'
import {Icon} from '@rneui/themed';


const AppCard = ({image, title, status}) => {
  return (
    <View style={styles.container}>
      <View style={{margin:10}}>
      <Image source={image}  style={{ }}/>
      </View>
    
      <View style={{marginTop:0, justifyContent:'space-around', alignItems:'center', flexDirection:'row'}}>
          <Text style={{color:'#fff', fontSize:14}}>Papi Steak</Text>
          <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>
      </View>
      {
        status == 'events' && 
       
      <View style={{marginTop:0, justifyContent:'space-between', alignItems:'center', flexDirection:'row', marginLeft:10, marginRight:20}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        
        <Icon name="calendar" size={8} color="#ffff" type="entypo" style={{marginRight:5}}/>
         <Text style={{color:'#fff', fontSize:8}}>26 Feb</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center'}}>
         
      <Icon name="clock" size={8} color="#ffff" type="entypo" style={{marginRight:5}}/>
        <Text style={{color:'#fff', fontSize:8}}>06:30 om</Text>
      </View>
    
      </View>
      }
     
    </View>
  )
}

export default AppCard

