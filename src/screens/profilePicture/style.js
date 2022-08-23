import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  text:{
    color:'#E3ECF4',
    fontSize:16,
    fontWeight:'500'
  },
  sub_text:{
    color:'#E3ECF4',
    fontSize:14,
    fontWeight:'400',
    marginTop:2,
  },
  container:{
    padding:12
  },
  sub_container:{
    marginTop:26,
    flexDirection:'row',
    paddingBottom:4,
    alignItems:'center',
  },
  sub_container02:{
    marginTop:8,
    paddingBottom:4,
    paddingLeft:width/8.5,
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.2,
    marginLeft:10
  },
  image:{
    height: height/5,
    marginTop:-height/50
  },
  top_image:{
     position:'absolute',
     marginTop:height/5.5,
     marginLeft:24
  },
  card_container:{
    flexDirection:'row',
     justifyContent:'space-around',
     paddingLeft:width/ 20,
      paddingRight:width/20
  },
  btn_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingLeft:20,
    paddingRight:20
  }
});