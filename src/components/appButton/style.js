import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BD27BC',
    margin: 20,
    padding: 16,
    height:60,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderTopLeftRadius:40,
    elevation: 5,
    width:width/1.16,
    borderBottomRightRadius: 35,
  },
  container02: {
    backgroundColor: 'transparent',
    marginTop: 12,
    marginLeft:20,
    marginRight:20,
    padding: 16,
    height:height/13.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderTopLeftRadius:40,
    width:width/1.16,
    borderWidth:1,
    borderColor:'#fff',
    borderBottomRightRadius: 35,
  },
  border_line:{
    borderColor:'#fff', 
    left:-20, 
    borderWidth:0.3,
    top:-height/40,
    height:height/13.5, 
    position:'absolute'
  },
  left_icon:{
      backgroundColor:'#fff',
      position:'absolute',
      height:height/13.5,
      width:width/6.5,
      // padding:20,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      borderTopLeftRadius: 40,   
  },
  Button: {
    fontSize: 14,
    color: '#fff',
    fontSize:16,
    fontWeight:'700',
    textAlign:'center',
    marginLeft:width/6
  },
  Button02: {
    fontSize: 14,
    color: '#fff',
    fontSize:16,
    fontWeight:'500',
    textAlign:'center',
    marginLeft:width/3.5
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  image:{
    padding:5
  }
});