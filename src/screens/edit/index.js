import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';

import {styles} from './style'
import { height, width } from '../../assets/constant';
import AppModal from '../../components/appModal';

const EditScreen = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Edit"/>
     <View style={styles.name_container}>
       <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
                resizeMode="contain"
                source={require('../../assets/images/username.png')}
              />
              <View style={{marginLeft:10}}>
                <Text style={{ color:'#E3ECF4',
                  fontSize:18, 
                  fontWeight:'bold'}}>John Smith</Text>
                <Text style={{color:'#C4C4C4',}}>JohnSmith@gmail.com</Text>
             </View> 
         </View>
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/share01.png')}
              />
          </View>
       <View style={styles.horizontal_line}/>

       <View style={styles.box_container}>
         <View style={styles.sub_box}>
             <View style={styles.image_container}>
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/sharetable.png')}
              />
             <Text style={styles.box_text}>Share a Table</Text>

             </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Share Table')}>
              <Image
                  resizeMode="center"
                  source={require('../../assets/images/icons/rightarrow.png')}
                />
            </TouchableOpacity>
             
         </View>
       </View>

       <View style={styles.box_container}>
         <View style={styles.sub_box}>
             <View style={styles.image_container}>
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/join.png')}
              />
             <Text style={styles.box_text}>Join a table</Text>

             </View>
             <TouchableOpacity onPress={()=> navigation.navigate('JoinTable')}> 
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/rightarrow.png')}
              />
              </TouchableOpacity>
         </View>
       </View>

       <View style={styles.box_container}>
         <View style={styles.sub_box}>
             <View style={styles.image_container}>
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/view.png')}
              />
             <Text style={styles.box_text}>View Request</Text>

             </View>
             <TouchableOpacity onPress={()=> navigation.navigate('Request')}>
             <Image
                resizeMode="center"
                source={require('../../assets/images/icons/rightarrow.png')}
              />

             </TouchableOpacity>
         </View>
       </View>
    </LinearGradient>
  )
}

export default EditScreen;

