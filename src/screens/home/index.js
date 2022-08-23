import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style'
import AppCard from '../../components/appCard';
import { height } from '../../assets/constant';

import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../components/customHeader';


const HomeScreen = ({navigation, route}) => {

  const [tab, setTab] = useState(true);
  const [tabName, setTabName] = useState('meetable');


  const user = useSelector(state => state.authReducer.user);
  console.log("user", user)

  let handleChangeName = (name) => {
    console.log(name);
     setTabName(name);
     setTab(!tab);
  }

  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
      <CustomHeader onPress={() => navigation.openDrawer()} type={false}/>
    <ScrollView
          contentContainerStyle={{ height: height}}
          >
       <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/username.png')}
          />

          <View style={{marginLeft:14}}>
            <Text style={styles.text01}>{user && user.full_name}</Text>
            <Text style={styles.text02}>{user && user.email}</Text>
          </View>
         {/* {
            type == "googlein" &&
          <View style={{marginLeft:14}}>
            <Text style={styles.text01}>{name && name}</Text>
            <Text style={styles.text02}>{email && email}</Text>
          </View>
         } */}
       </View>
       <View style={styles.buttonTab}>
         <View style={styles.sub_container}>
           <TouchableOpacity onPress={() => handleChangeName('meetable') } style={tab ? styles.sub_button_active : styles.sub_button }>
               <Text style={tab ? styles.text03_active : styles.text03}>Meetable</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => handleChangeName('events') } style={!tab ? styles.sub_button_active : styles.sub_button}>
                <Text style={!tab ? styles.text03_active : styles.text03}>Events</Text>
           </TouchableOpacity>
         </View>
      </View>
      {tabName == 'meetable' ?    <>
          <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')}/>
                  <AppCard image={require('../../assets/images/card01.png')}/>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')}/>
                  <AppCard image={require('../../assets/images/card01.png')}/>
              </View>
              {/* <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')}/>
                  <AppCard image={require('../../assets/images/card01.png')}/> 
              </View> */}
          </> : 
          <>
           <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')} status="events"/>
                  <AppCard image={require('../../assets/images/card01.png')} status="events"/>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')} status="events"/>
                  <AppCard image={require('../../assets/images/card01.png')} status="events"/>
              </View>
              {/* <View style={{flexDirection:'row', alignItems:'center'}}>
                  <AppCard image={require('../../assets/images/card02.png')} status="events"/>
                  <AppCard image={require('../../assets/images/card01.png')} status="events"/> 
              </View> */}
          </>}
       
          </ScrollView>
      </LinearGradient>
  )
}

export default HomeScreen

