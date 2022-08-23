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
  text01:{
     color:'rgba(78, 158, 252, 1)',
     fontSize:13
  },
  block_text:{
    color:'rgba(251, 0, 8, 1)',
    textAlign:'center',
    fontSize:12
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.13,
    marginTop:-16
  },
  main_text:{
    fontSize:22,
    color:'rgba(227, 236, 244, 1)',
    fontWeight:'700'
  },
  today_text:{
   color:'rgba(227, 236, 244, 1)',
   fontSize:13,
   textAlign:'center'
  },
  main_subtext:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:16
  },
  btn_cont:{
    borderColor:'rgba(227, 236, 244, 0.46)', 
    borderWidth:1, 
    padding:6,
    textAlign:'center',
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    width:width/5,
    marginBottom:2,
  }

});

