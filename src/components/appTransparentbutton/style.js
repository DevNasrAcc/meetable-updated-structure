import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container: {
    borderColor:'rgba(227, 236, 244, 0.48)',
    borderWidth:1,
    borderBottomRightRadius: 20,
    height:height / 16,
    width:width/3.9,
    justifyContent:'center',
    borderTopLeftRadius:20,
  },
  container_md:{
    borderColor:'rgba(227, 236, 244, 0.48)',
    borderWidth:1,
    borderBottomRightRadius: 20,
    height:height / 16,
    width:width/2.5,
    justifyContent:'center',
    borderTopLeftRadius:20,
  },
  text:{
    fontSize:14, 
    fontWeight:'400',
    textAlign:'center',
  }
});