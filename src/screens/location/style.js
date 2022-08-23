import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  text:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:22,
    fontWeight:'bold'
  },
  container:{
    padding:20
  },
  sub_container:{
    marginTop:16,
    flexDirection:'row',
    paddingRight:18,
    justifyContent:'space-around',
    alignItems:'center'
  }
});