import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
  },
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
    paddingRight:20,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign:'center',
    color: '#fff',
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
     fontSize:14
  },
  forget_text: {
    color: '#ffff',
  },
  forget_sub_text:{
    color: '#38C1EC',
    fontWeight:'bold'
  },
  sub_forget_text:{
    color:'#00C2FF',
  },
  image:{
    // width:130, 
    // height:108,
    alignSelf:'center',
     marginBottom:10,
     marginTop:20
  },
  bottom_text:{
    marginTop:40,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:40
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});