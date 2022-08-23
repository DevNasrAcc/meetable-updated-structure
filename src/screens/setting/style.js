import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    marginLeft:24,
    marginTop:-10
  },
  btn_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingLeft:20,
    marginTop:height/30,
    paddingRight:20
  },
  text:{
    color:'rgba(196, 196, 196, 1)',
    fontSize:14,
    paddingBottom:6
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    marginLeft:24,
    marginTop:-24
  },
});




