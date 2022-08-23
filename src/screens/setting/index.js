import { StyleSheet, Text, View, ScrollView, Image,Switch  } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'
import TextCard from '../../components/textCard'
import { height } from '../../assets/constant'
import AppTransparentButton from '../../components/appTransparentbutton'
// import { Switch } from '@rneui/themed';
import Slider from '@react-native-community/slider';

const Setting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Settings"/>
    <ScrollView >
      <View style={{marginBottom:80}}>
          <TextCard title="Show age on Profile" subTitle="23" status="toggle"/>
          <View style={{padding:30}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.text}>Set your Distance to Meet</Text>
            <Text style={{fontWeight:'bold', color:'#fff', paddingRight:10}}> 10km</Text>
            </View>    
                 <Slider
                    style={{transform: [{ scaleX: 1.2 }, { scaleY:1.2 }], marginTop:4}}
                    minimumValue={0}
                    maximumValue={100}
                    // step="1"
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#092C4C"
                    thumbTintColor="#fff"
                  /> 
             <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:20}}>
                <Text style={[styles.text, {marginTop:10}]}>Unit</Text>
                <Switch 
                style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                trackColor={{ false: "#fff", true: "#fc4ef3" }}
                thumbColor={isEnabled ? "#fff" : "#092C4C"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>      
          </View>
          <View style={styles.horizontal_line}/>
          <View style={{padding:30}}>   
            <Text style={styles.text}>Notifications</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:0}}>
                <Text style={[styles.text, {marginTop:0, color:'#fff', fontWeight:'bold'}]}>Push Notifications</Text>
                  <Switch 
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    trackColor={{ false: "#fff", true: "#fc4ef3" }}
                    thumbColor={isEnabled ? "#fff" : "#092C4C"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
              </View>      
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:0}}>
              <Text style={[styles.text, {marginTop:0, color:'#fff', fontWeight:'bold'}]}>
                Email Notifications
              </Text>
              <Switch 
                style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                trackColor={{ false: "#fff", true: "#fc4ef3" }}
                thumbColor={isEnabled ? "#fff" : "#092C4C"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>   
          </View>
          <View style={styles.horizontal_line}/>
          <TextCard title="Cancellation Policy" subTitle="Flexible"/>
      </View>
  
      </ScrollView>
    </LinearGradient>
  )
}

export default Setting

