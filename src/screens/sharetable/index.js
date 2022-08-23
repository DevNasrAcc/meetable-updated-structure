import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Switch } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'
import TextCard from '../../components/textCard'
import { height } from '../../assets/constant'
import {Icon} from '@rneui/themed';
import AppTransparentButton from '../../components/appTransparentbutton'


const ShareTable = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

 


  const [tab, setTab] = useState(true)
  const [tabName, setTabName] = useState('Club')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [check1, setCheck1] = useState(false);
  const [visible, setVisible] = useState(true)


  let handleChangeName = (name) => {
    console.log(name);
     setTabName(name);
     setTab(!tab);
  }
  return (
    
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Share a Table"/>
      <View style={styles.buttonTab}>
          <View style={styles.sub_container}>
            <TouchableOpacity onPress={() => handleChangeName('Club') } style={tab ? styles.sub_button_active : styles.sub_button }>
                <Text style={tab ? styles.text03_active : styles.text03}>Club</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChangeName('Event') } style={!tab ? styles.sub_button_active : styles.sub_button}>
                  <Text style={!tab ? styles.text03_active : styles.text03}>Custom</Text>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../../assets/images/default01.png')} resizeMode="center" style={{width:110, height:90}}/>
        <Image source={require('../../assets/images/btn01.png')} resizeMode="center" style={{width:80, height:90}}/>
        <View style={{position:'absolute', left:135, backgroundColor:'#fff', borderColor:'#fff', borderWidth:2, width:30, height:30,}}>
          <Icon name="plus" size={30} color="#BF53F7" type="entypo"/>

        </View>
      </View>
    <ScrollView>
    <View style={{margin:25, marginTop:30}}>
          <View>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>
              { tabName == 'Club' ? 'Club Name' : 'Event Name'}
             
              </Text>
             <View style={styles.search_container}>
               <TextInput placeholder='Club Name' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View> 

          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>
             { tabName == 'Club' ? 'Perfromer' : 'Location'}
             
             </Text>
             <View style={styles.search_container}>
               <TextInput placeholder={tabName == 'Club' ? 'Hiphop, technino' : 'Dubai'} style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View>  

          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Time</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='02:00 PM' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View>  

          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Drink Prefrences</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='Whiskey' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View> 

           <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Desired Company</Text>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                 <Image source={require('../../assets/images/icons/femaleKey.png')} resizeMode="center" style={{width:110, height:90}}/>
                  <Image source={require('../../assets/images/icons/maleKey.png')} resizeMode="center" style={{width:110, height:90}}/>
             </View>
             <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:30, marginRight:40}}>
              <View>
                <Text style={{color:'#fff'}}>Female</Text>
                <Text>0</Text>
                <Text  style={{color:'#fff'}}>AED:</Text>
              </View>
              <View>
                <Text style={{color:'#fff'}}>Male</Text>
                <Text>0</Text>
                <Text  style={{color:'#fff'}}>AED:</Text>
              </View>
             </View>  
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:20, marginVertical:10}}>*I want to split costs with a co-meetable</Text>  
             <View style={styles.horizontal_line}/>
          </View>   

          
          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Currency</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='99' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View> 

          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Age Limit</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='26' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View> 

          <View style={{marginTop:30}}>
             <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Additional Info</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='None' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"/>
             </View>
             <View style={styles.horizontal_line}/>
          </View> 
      <View style={{marginTop:30}}>
          <Text style={{color:'rgba(196, 196, 196, 1)', marginLeft:4, fontSize:14}}>Covid19 Check</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginLeft:4, marginTop:4}}>
                <Text style={[styles.text, {marginTop:10, color:'rgba(227, 236, 244, 1)'}]}>PCR Test Required</Text>
                <Switch 
                style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                trackColor={{ false: "#fff", true: "#fc4ef3" }}
                thumbColor={isEnabled ? "#fff" : "#092C4C"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:4, marginLeft:4}}>
                <Text style={[styles.text, {marginTop:10, color:'rgba(227, 236, 244, 1)'}]}>Vacination Prof</Text>
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
          <View style={{flexDirection:'row', alignItems:'center', marginTop:20, justifyContent:'center'}}>
        <LinearGradient colors={['rgba(247, 20, 154, 1)', 'rgba(78, 75, 250, 1)']} style={{borderTopLeftRadius:15, borderBottomRightRadius:15}}>
        <TouchableOpacity style={styles.tooglebtn}>
                <Text style={{color:'#C4C4C4', fontSize:14, textAlign:'center'}}>Done</Text>
        </TouchableOpacity>
      </LinearGradient>
        <TouchableOpacity style={[styles.tooglebtn, {marginLeft:20}]}>
                <Text style={{color:'#C4C4C4', fontSize:14, textAlign:'center'}}>Invite Friends</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
   

    </LinearGradient>
  )
}

export default ShareTable

