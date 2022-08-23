import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  main_container:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center' 
  },
  search_container:{
    marginTop:25, 
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'rgba(252, 78, 243, 0.37)',
    borderWidth:2, 
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
    flexDirection:'row',
    alignItems:'center'
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
  remove_text:{
    color:'rgba(251, 0, 8, 1)',
     fontSize:10
  },
  block_text:{
    color:'rgba(251, 0, 8, 1)',
    textAlign:'center',
    fontSize:8
  },
  block_container:{
    borderColor:'rgba(251, 0, 8, 1)',
    borderWidth:2,
    padding:8,
    borderRadius:5,
    width:80
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
    fontWeight:'bold'
  },
  main_subtext:{
    color:'rgba(227, 236, 244, 1)',
    fontWeight:'600',
    fontSize:14
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.13,
    marginLeft:24,
    marginTop:-10
  },

});




