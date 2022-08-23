import {StyleSheet} from 'react-native';
import { height, width } from '../../assets/constant/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-10
  },
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:Platform.OS === 'ios' ? 90 : 80, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },

  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#0C0347",
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
    marginHorizontal: 10,
    borderRadius:10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
  
    overflow: "hidden",
    padding:10
  },
  cardImage: {
    flex: 6,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius:10
  },
  image:{
    width:width/8, 
    height:height /30,
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
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
    width:width/5
  },
  tooglebtn02:{
    borderColor:'#C4C4C4',
    borderWidth:1, 
    borderTopLeftRadius:15,
    borderBottomRightRadius:15, 
    padding:10,
    width:width/5
  },
  footerIcon:{
    width:width/20, 
    height: height/20
  }
});