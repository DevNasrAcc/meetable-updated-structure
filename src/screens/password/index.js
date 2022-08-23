import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {styles} from './style.js'
import CustomHeader from '../../components/customHeader';
import {Icon} from '@rneui/themed'

const Password = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [check1, setCheck1] = useState(false);
  const [visible, setVisible] = useState(true)
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
      <CustomHeader onPress={() => navigation.goBack()} type={true} title="Password"/>
        <View style={{margin:14}}>
          <Text style={styles.main_text}>Password</Text>
          <View style={{margin:20, marginTop:30}}>
             <Text style={styles.sub_text}>Password</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='Enter your password' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"  secureTextEntry={visible ? true : false}/>
               <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Icon
                    name={visible ? 'eye-off' : 'eye'}
                    size={18}
                    type="feather"
                    color="#C4C4C4"
                    // style={styles.icon}
                  /> 
              </TouchableOpacity>
             </View>
             <View style={styles.horizontal_line}/>
          </View>

          
      <View style={{marginTop:10}}>
        <Text style={styles.main_text02}>You can type your new password! </Text>
          <View style={{margin:20, marginTop:20}}>
             <Text style={styles.sub_text}>New Password</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='Enter New password' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"  secureTextEntry={visible ? true : false}/>
               <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Icon
                    name={visible ? 'eye-off' : 'eye'}
                    size={18}
                    type="feather"
                    color="#C4C4C4"
                  /> 
              </TouchableOpacity>
             </View>
             <View style={styles.horizontal_line}/>
          </View>
          <View style={{margin:20, marginTop:10}}>
             <Text style={styles.sub_text}>Confirm Password</Text>
             <View style={styles.search_container}>
               <TextInput placeholder='Enter Confirm password' style={{flex:1, color:'#fff'}}
               placeholderTextColor="#C4C4C4"  secureTextEntry={visible ? true : false}/>
               <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Icon
                    name={visible ? 'eye-off' : 'eye'}
                    size={18}
                    type="feather"
                    color="#C4C4C4"
                  /> 
              </TouchableOpacity>
             </View>
             <View style={styles.horizontal_line}/>
          </View>
        </View>
      </View>
          
    </LinearGradient>
  )
}

export default Password;
