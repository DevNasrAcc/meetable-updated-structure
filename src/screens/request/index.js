import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';

import {styles} from './style'
import { width } from '../../assets/constant';
import AppModal from '../../components/appModal';

const RequestScreen = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Requests"/>
     <View style={styles.container}>
      <View style={styles.main_container}>
            <Text style={styles.main_text}>Requests</Text>
            <Text style={styles.main_subtext}>Total (2)</Text>
      </View>

      {/* list start */}
        <View style={{marginTop:10}}>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic1.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
              <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Join</Text>
              </TouchableOpacity>
              <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
            <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Accept</Text>
              </TouchableOpacity>
                  <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>

          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
            <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Accept</Text>
              </TouchableOpacity>
                  <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>

          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
            <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Accept</Text>
              </TouchableOpacity>
                  <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>


          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
            <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Accept</Text>
              </TouchableOpacity>
                  <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>


          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Request Details')}>
                   <Text style={styles.text01}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.list_left_section}>
            <TouchableOpacity style={styles.btn_cont}>
                  <Text style={styles.today_text}>Accept</Text>
              </TouchableOpacity>
                  <Text style={styles.block_text}>Cancel</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>
        </View>
     </View>
    </LinearGradient>
  )
}

export default RequestScreen;

