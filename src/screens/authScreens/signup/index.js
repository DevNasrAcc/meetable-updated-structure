import React, {useEffect, useState} from 'react';
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

import DocumentPicker from 'react-native-document-picker';

import {
  RegisterUser,
  UpdateSignup
} from '../../../store/action/authAction';

import axios from 'axios';

import {styles} from './style'

const SignUp = ({navigation, route}) => {

  const { type } = route.params;
  console.log("type", type);
  let signType = type;
  
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [govtIdentity, setGovtIdentity] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [check1, setCheck1] = useState(false);
  const [singleFile, setSingleFile] = useState('');
  const disptach = useDispatch();

  const user = useSelector(state => state.authReducer.user);
  console.log("user", user)

  useEffect(() => {
    if(type == 'social'){
        setEmail(user && user.email);
        setFullName(user && user.first_name);
        console.log('user', user);
    }
  
  },[user]);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
      setGovtIdentity(res[0].name);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

 
  const loading = useSelector(state => state.authReducer.loading);
  const msg = useSelector(state => state.authReducer.msg);
  console.log("loading and message",loading, msg);

  let onSubmitHandler = async() => {
       console.log("data", email, fullname, phoneNum, govtIdentity, password, confirmPassword);
       if(email  !=='' && fullname !== '' && phoneNum !== '' && password !== '' && confirmPassword !== '' && govtIdentity !== ''){
            let data = {
              user_id : email,
              email: email,
              fullname:fullname,
              password: password,
              phone: phoneNum,
              identity_img: govtIdentity
            }

          disptach(RegisterUser(data, navigation))
       }else{
        alert("Please fill all the missing fields")
       }
        
  }

  let onUpdateHanlder = async() => {
   
    if(email  !=='' && fullname !== '' && phoneNum !== '' && govtIdentity !== ''){
         let data = {
           email: email,
           fullname:fullname,
           phone: phoneNum,
           identity_img: govtIdentity
         }
         disptach(UpdateSignup(user.id, data, navigation))
      //  axios.patch(`https://meetable-backend.herokuapp.com/api/updateSignup/${user.id}`, data).then((res => {
      //    console.log("response", res);
      //    navigation.navigate('DrawerHome')
      //  })).catch((err) => {
      //     console.log('error', err);
      //  })
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
            resizeMode="contain"
            style={styles.image}
            source={require('../../../assets/images/logo2.png')}
          />
          <View style={styles.container}>
            <Text style={styles.text}>Create Your Account</Text>
            <Text style={styles.label_text}>Full Name</Text>
           
            <AppTextInput
              value={fullname}
              placeholder="Enter your full name"
              icon="email"
              onChange={text => setFullName(text)}
            />
            <Text style={styles.label_text}>Email Address</Text>
            <AppTextInput
              value={email}
              placeholder="Enter your email address"
              icon="email"
              onChange={text => setEmail(text)}
            />
             <Text style={styles.label_text}>Government Identity</Text>
            {/* <AppTextInput
              placeholder="Select Identity type"
              icon="email"
              onChange={text => setUsername(text)}
            /> */}
            <TouchableOpacity onPress={() => selectOneFile()}>
            <Text style={{color:'#929FAA', borderBottomWidth: 1,  borderBottomColor:'#929FAA', marginLeft:20, marginRight:20, marginBottom:1}}>{govtIdentity == '' ? 'Select Identity type' : govtIdentity}</Text>

            </TouchableOpacity>
             <Text style={styles.label_text}>Phone Number</Text>
            <AppTextInput
              placeholder="Enter your phone number"
              icon="email"
              onChange={text => setPhoneNum(text)}
            />
             {
              signType != 'social' && <>
               <Text style={styles.label_text}>Password</Text>
            <AppTextInput
              placeholder="Enter your Password ... "
              icon="lock"
              pass={true}
              onChange={text => setPassword(text)}
            />
             <Text style={styles.label_text}>Confirm Password</Text>
            <AppTextInput
              placeholder="Enter your Password ... "
              icon="lock"
              pass={true}
              onChange={text => setConfirmPassword(text)}
            />
              </> 
           } 
           
            {/* <TouchableOpacity onPress={() => onSubmitHandler()}> */}
            <AppButton
              icon="login"
              title={signType == 'social' ? "Update" :"Sign Up"}
              // title="Sign Up"
              load={loading}
              onPress={() => type != 'social' ? onSubmitHandler() : onUpdateHanlder()}
              // onPress={() => navigation.navigate('DrawerHome')}
            />
            {/* </TouchableOpacity> */}
            {type != "social" &&
            <View style={styles.bottom_text}>
            <Text style={styles.forget_text}>Already have an account? </Text>
            <Text style={styles.forget_sub_text}>Login</Text>
            </View>  
           }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScrollView>
    </LinearGradient>
  )
}

export default SignUp;
