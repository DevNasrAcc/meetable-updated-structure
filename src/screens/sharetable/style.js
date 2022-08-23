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
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.19,
    // marginLeft:24,
    marginTop:0
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
  },
  search_container:{
    flexDirection:'row', 
    justifyContent:'space-around',
     alignItems:'center'
  }, 
  tooglebtn:{
    borderColor:'#C4C4C4',
    borderWidth:1, 
    borderTopLeftRadius:15,
    borderBottomRightRadius:15, 
    paddingLeft:10,
    paddingRight:10,
    padding:10,
    width:width/2.7
  },
});