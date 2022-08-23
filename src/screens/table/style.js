import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  text:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:24,
    fontWeight:'bold',
    paddingBottom:6
  },
  text01:{
    color:'rgba(196, 196, 196, 1)',
    textAlign:'center',
    fontSize:16,fontWeight:'400'
  },
  sub_container:{
    justifyContent:'center',
    flexDirection:'column', 
    alignContent:'center', 
    height:height/1.4
  },
  image:{
    width:300,
    height:350,
    alignSelf:'center'
  }
 
});




