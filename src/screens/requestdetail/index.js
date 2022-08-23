import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed';

import {styles} from './style'
import { width } from '../../assets/constant';
import AppModal from '../../components/appModal';
import AppButton from '../../components/appButton';


const RequestDetails = ({navigation}) => {
  const [modal, setModal] =  useState(false);
  const [modal1, setModal1] =  useState(false);

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Requests Details"/>
     <ScrollView>
     <View style={styles.container}>
       <Image source={require('../../assets/images/user08.png')} resizeMode="center" style={{width:320, height:200}}/>
        <View style={{marginTop:10}}>
          <View>
            <Text style={styles.label_text}>Name</Text>
            <Text style={styles.text}>John Smith</Text>
          </View>
          <View style={styles.horizontal_line}/>
          <View>
            <Text style={styles.label_text}>Brithday</Text>
            <Text style={styles.text}>04-03-1999</Text>
          </View>
          <View style={styles.horizontal_line}/>
          <View>
            <Text style={styles.label_text}>Drink</Text>
            <Text style={styles.text}>Whiskey</Text>
          </View>
          <View style={styles.horizontal_line}/>
          <View>
            <Text style={styles.label_text}>Bio</Text>
            <Text style={styles.text}>My Name is Samerina and this is the Dummy text to show the typographics for  this space.</Text>
          </View>
          <View style={styles.horizontal_line}/>
          <View>
            <Text style={styles.label_text}>Gender</Text>
            <Text style={styles.text}>Male</Text>
          </View>
          <View style={styles.horizontal_line}/>   
       </View>
     </View>
     <AppButton
              icon="login"
              title="Accept"
            />
     </ScrollView>
    </LinearGradient>
  )
}

export default RequestDetails;

