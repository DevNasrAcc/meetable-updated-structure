import React from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
import {Icon} from '@rneui/themed';
import { height, width } from '../../assets/constant/index';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style'

const AppButton = ({icon, title, onPress, type, image, load, onPress0}) => {
  return (
    <>
    {type ? 
    <TouchableOpacity onPress={onPress0} style={styles.container02}>
      <View style={styles.left_icon}>
        <Image source={image} style={styles.image} resizeMode="center"/>
        </View>
            <Text style={styles.Button}>{title}</Text>

          <View style={{flexDirection:'row'}}>
          <View style={styles.border_line}></View>
          <Icon name="chevron-right" size={20} color="#ffff" type="font-awesome" />
          </View>
      </TouchableOpacity> 
        :  
        <TouchableOpacity onPress={onPress}>
              
               
              <LinearGradient colors={['#F81499','#4C4CFB']} style={styles.container} >
              {load &&   <ActivityIndicator size="small" color="#fff" />}
                <Text style={styles.Button02}>{title}</Text>
                <View style={{flexDirection:'row'}}>
                <View style={styles.border_line}></View>
                <Icon name="chevron-right" size={20} color="#ffff" type="font-awesome" />
                </View>
          </LinearGradient>
        </TouchableOpacity>
    }
    </>
  );
};


export default AppButton;
