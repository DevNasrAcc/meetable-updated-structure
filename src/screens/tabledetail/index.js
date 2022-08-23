import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomHeader from '../../components/customHeader'
import {styles} from './style'
import AppButton from '../../components/appButton'
import { height, width } from '../../assets/constant'


const TableDetail = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Table Details"/>
     <ScrollView>
     <View style={styles.container}>
       <Image source={require('../../assets/images/banner1.png')}  style={{width:width/1.1, height:height/4.5}}/>
        <View style={{marginTop:10}}>
        <Text style={styles.text01}>Meetable Dinnerin new Papi Steak Restaurant in Miami.</Text>
        <View>
        <View style={styles.listStyle}>
          <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>  
          <Text style={styles.text01}>0</Text>
        </View>
        <View style={styles.listStyle}>
          <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>  
          <Text style={styles.text01}>Wine, Tequila</Text>
        </View>
        <View style={styles.listStyle}>
          <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>  
          <Text style={styles.text01}>Mar 11, 06:00 PM</Text>
        </View>
        <View style={styles.listStyle}>
          <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>  
          <Text style={styles.text01}>Meetable Dinner</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20, justifyContent:'center'}}>
        <TouchableOpacity style={styles.tooglebtn}>
              <Image resizeMode="center" style={styles.footerIcon} source={require('../../assets/images/icons/maleKey.png')}/> 
                <Text style={{color:'#C4C4C4', fontSize:10}}> 4x Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tooglebtn, {marginLeft:20}]}>
              <Image resizeMode="center" style={styles.footerIcon} source={require('../../assets/images/icons/femaleKey.png')}/> 
                <Text style={{color:'#C4C4C4', fontSize:10}}> 2x $300</Text>
        </TouchableOpacity>
        </View>
        </View> 
       </View>
     </View>
     <AppButton
              icon="login"
              title="Join"
            />
     </ScrollView>
    </LinearGradient>
  )
}

export default TableDetail

