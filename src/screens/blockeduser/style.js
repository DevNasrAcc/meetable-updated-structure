import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight: 20,
    margin:10
  },
  main_container:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center' 
  },
  list_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  image_container:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  list_left_section:{
    flexDirection:'column',
    alignItems:'flex-end'
  },
  imageStyle:{
    height:60,
    marginTop:5,
    width:50
  },
  text:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:14
  },
  block_text:{
    color:'rgba(251, 0, 8, 1)',
    textAlign:'center',
    fontSize:14
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.13,
    // marginLeft:24,
    marginTop:-10
  },
  main_text:{
    fontSize:20,
    color:'rgba(227, 236, 244, 1)',
    fontWeight:'700'
  },
  today_text:{
   color:'rgba(227, 236, 244, 1)',
   fontSize:10
  },
  main_subtext:{
    color:'#E3ECF4',
    fontSize:14
  }

});




