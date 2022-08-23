import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width,
    marginTop:20
  },
  name_container:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    marginTop:10, 
    justifyContent:'space-between',
    alignItems:'center'
  },
  box_container:{
    backgroundColor:'#320445',
    marginLeft:20,
    marginRight:20,
    marginTop:14,
    justifyContent:'center', 
    height: height/10,
    borderRadius:8
  },
  sub_box:{
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    marginRight:15
  },
  image_container:{
    flexDirection:'row', 
    alignItems:'center'
  },
  box_text:{
    color:'rgba(227, 236, 244, 1)',
    fontSize:16,
    fontWeight:'600'
  }
});




