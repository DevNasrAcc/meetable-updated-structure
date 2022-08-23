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
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import AppButton from '../../../components/appButton';
import AppTextInput from '../../../components/appTextInput';
import {width, height} from '../../../assets/constant/index';
import {useDispatch, useSelector} from 'react-redux';
import { CheckBox} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

import {styles} from './style'
import { LoginUser } from '../../../store/action/authAction';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [check1, setCheck1] = useState(false);
  const disptach = useDispatch();

  const loading = useSelector(state => state.authReducer.loading);

  let onSubmitHandler = () => {
    console.log("data", username, password);
    if(username  !== '' && password !== ''){
         let data = {
          email: username,
          password: password
         }

       disptach(LoginUser(data, navigation))
    }else{
     alert("Please fill all the missing fields")
    }
  }
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <ScrollView
       contentContainerStyle={{flex: 1, justifyContent:'center'}}
      >
      <KeyboardAvoidingView behavior="height">
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Image
            resizeMode="center"
            style={styles.image}
            source={require('../../../assets/images/logo2.png')}
          />
          <View style={styles.container}>
            <Text style={styles.text}>Welcome Back !</Text>
            <Text style={styles.sub_text}>Stay signed in with your account to make Meeting Eaiser</Text>
            <Text style={styles.label_text}>Email</Text>
            <AppTextInput
              placeholder="Enter your Email"
              icon="email"
              onChange={text => setUsername(text)}
            />
            <Text style={styles.label_text}>Password</Text>
            <AppTextInput
              placeholder="Enter your Password ... "
              icon="lock"
              pass={true}
              onChange={text => setPassword(text)}
            />
          <View
            style={styles.sub_container}>
             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                <CheckBox
                  containerStyle={{
                  // backgroundColor:'#1F0046',
                  backgroundColor:'none',
                  margin:0,
                  paddingLeft:10,
                  width:width/14,
                  paddingRight:0,
                }}
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
                <Text
                  style={styles.forget_text}>
                  Keep me signed in
                </Text>
                  </View>
                <Text style={styles.sub_forget_text}>Forget Password?</Text>
            </View>
            <AppButton
              icon="login"
              title="Sign In"
              load={loading}
              onPress={() => onSubmitHandler()}
            />
            <View style={styles.bottom_text}>
            <Text style={styles.forget_text}>Don't have any account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp',{type:''})}>
            <Text style={styles.forget_sub_text}>Sign Up</Text>
            </TouchableOpacity>
            </View>     
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScrollView>
    </LinearGradient>
  )
}

export default Login;
