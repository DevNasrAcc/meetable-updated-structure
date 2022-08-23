import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:16
   },
   sub_container:{
    flexDirection:'row', 
    alignItems:'center'
   },
   image:{
    paddingLeft:8,
    paddingRight:14,
    paddingTop:2
   },
   text:{
      color:'#fff',
      fontSize:14,
      fontWeight:'600'
   }
});