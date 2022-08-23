import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  main_text:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:20
  },
  sub_text:{
    color:'rgba(196, 196, 196, 1)',
    fontSize:14
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    // marginLeft:24,
    // marginTop:-10
  },
  main_text02:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:16
  },
  search_container:{
    flexDirection:'row', 
    justifyContent:'space-around',
     alignItems:'center'
  }
});