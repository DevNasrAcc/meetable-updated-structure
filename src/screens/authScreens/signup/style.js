import {StyleSheet} from 'react-native';
import { height, width } from '../../../assets/constant/index';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 2,
  },
  sub_container:{
    flexDirection: 'row',
    justifyContent:'space-between',
    // marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    alignItems:'center'
  },
  text: {
    paddingLeft: 20,
    // paddingRight:20,
    fontWeight: '700',
    fontSize: 24,
    // textAlign:'center',
    color: '#E3ECF4',
    fontStyle:'normal',
    lineHeight:36
  },
  sub_text:{
    paddingLeft: 60,
    paddingRight:60,
    textAlign:'center',
    color:'#E3ECF4',
    fontWeight:'400',
    fontSize:14,
    marginBottom:40,
    marginTop:10,
    lineHeight:22
  },
  label_text:{
     fontWeight:'600',
     fontStyle:'normal',
     paddingLeft:20,
     color:'#E3ECF4',
     marginTop:18,   
     fontSize:14, 
     marginTop:22
  },
  forget_text: {
    color: '#C4C4C4',
  },
  forget_sub_text:{
    color: '#38C1EC',
    fontWeight:'bold'
  },
  sub_forget_text:{
    color:'#E39B92',
  },
  image:{
    width:width/8, 
    height:height /14,
    // alignSelf:'flex-start',
    //  marginBottom:40,
    //  marginTop:20
    marginLeft:20
    
  },
  bottom_text:{
    marginTop:20,
    flexDirection:'row',
    alignSelf:'center'
  }
});