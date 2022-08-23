import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';

import {styles} from './style'
import { width } from '../../assets/constant';
import AppModal from '../../components/appModal';

const Friend = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Friends"/>
     <View style={{margin:20}}>
      <View style={styles.main_container}>
            <Text style={styles.main_text}>Friends</Text>
            <Text style={styles.main_subtext}>Total (35)</Text>
        </View>
        <View style={styles.search_container}>
         <TextInput
          style={{ flex:1, color:'#fff'}}
          placeholder="Search Friends..."
          placeholderTextColor="rgba(227, 236, 244, 1)"
        />
         <Icon
            name="search"
            size={18}
            type="feather"
            color="rgba(227, 236, 244, 1)"
          /> 
        </View>

      {/* list start */}
        <View style={{marginTop:10}}>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic1.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={() => setModal(!modal)}>
                   <Text style={styles.remove_text} >Remove</Text>
                </TouchableOpacity>  
              </View>
            </View>
            <View style={styles.list_left_section}>
              <Image source={require('../../assets/images/icons/chat.png')} resizeMode="center"  style={styles.imageStyle}/>
              <TouchableOpacity style={styles.block_container} onPress={() => setModal1(!modal1)} >
                  <Text style={styles.block_text}>Block</Text>
               </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontal_line}/>
          <View style={styles.list_container}>
            <View style={styles.image_container}>
              <Image source={require('../../assets/images/pic2.png')} resizeMode="center" 
              style={{width:60}}/>
              <View style={{marginLeft:10}}>
                <Text style={styles.text}>Michael Clark</Text>
                <TouchableOpacity onPress={() => setModal(!modal)}>
                   <Text style={styles.remove_text} >Remove</Text>
                </TouchableOpacity>  
              </View>
            </View>
            <View style={styles.list_left_section}>
              <Image source={require('../../assets/images/icons/chat.png')} resizeMode="center"  style={styles.imageStyle}/>
              <TouchableOpacity style={styles.block_container} onPress={() => setModal1(!modal1)}>
                  <Text style={styles.block_text}>Block</Text>
               </TouchableOpacity>
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

export default Friend;

