import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';

import {styles} from './style'
import { width } from '../../assets/constant';
import AppModal from '../../components/appModal';

const BlockUser = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Block User"/>
     <View style={styles.container}>
      <View style={styles.main_container}>
            <Text style={styles.main_text}>Block User</Text>
            <Text style={styles.main_subtext}>Total (20)</Text>
      </View>

      {/* list start */}
        <View style={{marginTop:10}}>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic1.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
              </View>
            </View>
            <View style={styles.list_left_section}>
                  <Text style={styles.today_text}>Today</Text>
                  <Text style={styles.block_text}>Unblock</Text>
            </View>
          </View>
          <View style={styles.horizontal_line}/>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
              </View>
            </View>
            <View style={styles.list_left_section}>
                  <Text style={styles.today_text}>Today</Text>
                  <Text style={styles.block_text}>Unblock</Text>
            </View>
          </View>
        </View>

        
  {/* end of list */}

  {modal && <AppModal image={require('../../assets/images/icons/userRemove.png')} title="Are you sure you want to Remove this Friend!" btn1="Remove" btn2="Cancel"/>}

  {modal1 && <AppModal image={require('../../assets/images/icons/blockuser.png')} title="Are you sure you want to Block this person!" btn1="Block" btn2="Cancel"/>}

     </View>
    </LinearGradient>
  )
}

export default BlockUser;

