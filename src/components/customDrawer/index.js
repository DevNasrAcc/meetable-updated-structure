import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {styles} from './style'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#320445', opacity:0.84, marginTop:4}}>
          <View style={styles.top_container}>
                <Image
                  source={require('../../assets/images/icons/cross.png')}
                  resizeMode="center"
                  style={{ marginBottom: 10, height:50}}
                />
                <Image
                  source={require('../../assets/images/icons/share.png')}
                  resizeMode="center"
                  style={{ marginBottom: 10, height:50, width:50}}
                />
          </View> 
          <View style={styles.name_container}>
              <Image
                resizeMode="contain"
                // style={styles.image}
                source={require('../../assets/images/username.png')}
              />
              <View style={{marginLeft:14}}>
                <Text style={{ color:'#E3ECF4',
                  fontSize:18, 
                  fontWeight:'bold'}}>John Smith</Text>
                <Text style={{color:'#C4C4C4',}}>JohnSmith@gmail.com</Text>
             </View> 
       </View>
        <View style={styles.drawerList}>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity onPress={() => {}} style={{marginTop: 80, marginLeft:20, marginBottom:20}}>
          <View style={styles.logout_container}>
            <Ionicons name="exit-outline" size={22} color="#FB0008" />
            <Text
              style={styles.logout_text}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>

    
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: 'rgba(227, 236, 244, 0.15)'}}>
        <Image source={require('../../assets/images/footer.png')} resizeMode="center" style={{width:60, height:60}}/>
        <View style={{flexDirection:'row', marginTop:10, alignItems:'center'}}>
          <Text style={styles.text}>All Rights Resereved</Text>
          <Text style={styles.text_01}> | </Text>
          <Text style={styles.text}>Powered By Meetable</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
