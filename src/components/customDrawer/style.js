import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  text:{
    color:'#A7A7A7',
     fontSize:12
  },
  text_01:{
    color:'#A7A7A7', 
    fontSize:14
  },
  drawerList:{
    flex: 1,
    backgroundColor: '#320445', 
    paddingTop: 20, 
    borderTopWidth: 1,
    borderTopColor: 'rgba(227, 236, 244, 0.15)',
    paddingBottom:20
  },
  top_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10
  },
  name_container:{
    flexDirection:'row',
    margin:10, 
    alignItems:'center'
  },
  logout_container:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logout_text:{
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
    color:'#FB0008'
  }
});