import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
     marginLeft:20,
     marginBottom:20,
     marginRight:20, 
     alignItems:'center'
  },
  text01:{
    color:'#E3ECF4',
     fontSize:18, 
     fontWeight:'bold'
  },
  text02:{
    color:'#C4C4C4',
  },
  text03_active:{
    color:'#092C4C',
    margin:10,
    fontWeight:'bold',
    textAlign:'center'
  },
  text03:{
    color:'#fff',
    margin:10,
    textAlign:'center'
  },
  sub_container:{
    // justifyContent:'space-around',
    alignItems:'center',
    marginLeft:10,
    marginTop: height/60,
    flexDirection:'row'
    
  },
  buttonTab:{
    borderBottomRightRadius: 30,
    margin:10, 
    borderTopLeftRadius:30,
    backgroundColor:'#0C0347',
    height:height/12
  },
  sub_button:{
    borderBottomRightRadius: 20,
    borderTopLeftRadius:20,
    // backgroundColor:'#fff',
    width:width/2.3,
    height:height/20
  },
  sub_button_active:{
    borderBottomRightRadius: 20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    width:width/2.3,
    height:height/20
  }
});