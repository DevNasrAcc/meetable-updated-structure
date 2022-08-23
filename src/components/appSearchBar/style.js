import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: 12,
    paddingLeft:14,
    paddingRight:14,
    height:height/14,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:2,
    borderTopLeftRadius:25,
    width:width/1.16,
    borderWidth:2,
    borderColor:'rgba(252, 78, 243, 0.4)',
    borderBottomRightRadius: 25,
  },
  text_input:{
    flex:1,
    color:'#E3ECF4'
  }
  
});