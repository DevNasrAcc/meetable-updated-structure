import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
   imageStyle:{
     height: 100,
     width: 20
   },
   container:{
    position:'absolute', 
    top:height/20, 
    left: height/ 7.6
   },
   image_main:{
    left:width/-3.42, 
    top:height/40
   },
   image_text:{
    color:'#fff', 
    fontSize:10,
    left:width/ -8.8,
     top: height/-60
   }
});