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
  label_text:{
    color:'rgba(196, 196, 196, 1)',
    fontSize:14,
    marginBottom:5
  },
  text:{
     color:'rgba(227, 236, 244, 1)',
     fontSize:14,
     marginBottom:12
  },
  horizontal_line:{
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(227, 236, 244, 0.15)',
    width:width/1.13,
    marginBottom:20
  },
  text01:{
    fontSize:14, 
    fontWeight:'600',
     color:'rgba(227, 236, 244, 1)'
  },
  listStyle:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:-10
  }, 
  tooglebtn:{
    borderColor:'#C4C4C4',
    borderWidth:1, 
    borderTopLeftRadius:15,
    borderBottomRightRadius:15, 
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:width/3
  },
  footerIcon:{
    width:width/20, 
    height: height/20
  }
});

