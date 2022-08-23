import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    justifyContent:'space-between',
     alignItems:'flex-end',
      padding:30
  },
  text:{
    color:'rgba(196, 196, 196, 1)',
    fontSize:14,
    paddingBottom:6
  },
  sub_text:{
    color:'rgba(227, 236, 244, 1)',
    fontWeight:'700'
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    marginLeft:24,
    marginTop:-10
  },
});




