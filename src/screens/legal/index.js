import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './style'
import { width } from '../../assets/constant';
import AppModal from '../../components/appModal';

const Legal = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Legal"/>
      <View style={{margin:12}}>
         <View style={{backgroundColor:'#320445', margin:10, borderRadius:5}}>
           <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginRight:20, marginTop:5, alignItems:'center'}}>
              <Text style={{color:'#fff'}}>Privacy Policy</Text>  
              <Entypo name="chevron-down" size={26} color='#fff'/>
           </View> 
           <View style={{marginRight:20, marginLeft:20, marginTop:10,marginBottom:20 }}>
             <Text style={{color:'#fff'}} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
           </View>
         </View> 
      </View>
    </LinearGradient>
  )
}

export default Legal;

