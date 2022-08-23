import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  conatiner:{
    flexDirection:'row', 
    justifyContent:'space-between',
     padding:20
  },
  text:{
    fontSize:20,
    color:'rgba(227, 236, 244, 1)',
    fontWeight:'700'
  },
  text01:{
    fontSize:20,
    color:'rgba(196, 196, 196, 1)',
    fontWeight:'700'
  },
  subtext:{
    fontSize:12,
    color:'rgba(196, 196, 196, 1)',
    fontWeight:'400'
  },
  subtext01:{
    color:'rgba(227, 236, 244, 1)', 
    fontSize:13,
    fontWeight:'600', 
    marginTop:6
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    marginLeft:24,
    marginTop:-24
  },
});




