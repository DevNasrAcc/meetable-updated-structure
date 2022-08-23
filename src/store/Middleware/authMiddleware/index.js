import axios from 'axios';
import {url} from '../../../assets/api_url/index';

class authMiddleware {
  static registerUser = async (user, navigation) => {
    console.log("user data",user);
    try {
      const response = await axios.post(`${url}/signUp`, user);
      console.log("response ==> ",response.data);
      if(response.data.message == 'User signup successfully'){
        alert(response.data.message);
        navigation.navigate('Login');
      }else{
        alert("user already exits");
      }
      return response.data.message;
      // console.log(json);
    } catch (error) {
      console.error("erropr",error.message);
      alert(error.message)
    }
  };

  static loginUser = async (user, navigation) => {
    console.log(user);
    try {
      const response = await axios.post(`${url}/login`, user);
      console.log("hello",response.data);
      if(response.data.message == 'Login successfully'){
        alert(response.data.message);
        
        navigation.navigate('DrawerHome');
        return response.data;
      }else{
        alert(response.data.data);
      }
      return response.data;
      // console.log(json);
    } catch (error) {
      console.error("erropr",error.message);
    }
  };

  static facebookUser = async (user, navigation) => {
    console.log("user data",user);
    // let fbstatus = false;
    try {
      const response = await axios.post(`${url}/facebookApi`, user);
      console.log("response data ==> ",response.data.data);
      if(response.status ==  409){
        // alert(response.data.message);
        alert("Signing Successfully");
        navigation.navigate('DrawerHome');
        return response.data;
      }else if(response.data.message !== 'Already registered'){
        alert("Register Successfully")
        navigation.navigate('SignUp', {type: 'social'});
        return response.data;
      }else{
        alert("Invalid Credentials");
      }
      return response.data.message;
      // console.log(json);
    } catch (error) {
      // console.log("respinse");
      console.error("erropr",error.response.data.message);
      if(error.response.status == 409 && error.response.data.message == 'Already registered'){ 
          // this.facebookUser(user, navigation);
          navigation.navigate('DrawerHome');
          return error.response.data;
      
      }else{
        alert(error.message)
      }
     
    }
  };

  static InstagramLogin = async (user, navigation) => {
    console.log("user data",user);
    // let fbstatus = false;
    try {
      const response = await axios.post(`${url}/facebookApi`, user);
      console.log("response data ==> ",response.data.data);
      if(response.status ==  409){
        // alert(response.data.message);
        alert("Signing Successfully");
        navigation.navigate('DrawerHome');
        return response.data;
      }else if(response.data.message !== 'Already registered'){
        alert("Register Successfully")
        navigation.navigate('SignUp', {type: 'social'});
        return response.data;
      }else{
        alert("Invalid Credentials");
      }
      return response.data.message;
      // console.log(json);
    } catch (error) {
      // console.log("respinse");
      console.error("erropr",error.response.data.message);
      if(error.response.status == 409 && error.response.data.message == 'Already registered'){ 
          // this.facebookUser(user, navigation);
          navigation.navigate('DrawerHome');
          return error.response.data;
      
      }else{
        alert(error.message)
      }
     
    }
  };
 
  static googleLogin = async (user, navigation) => {
    console.log("user data",user);
    // let fbstatus = false;
    try {
      const response = await axios.post(`${url}/signUp`, user);
      console.log("response data ==> ",response);
      if(response.data.message == "User already signup"){
        alert("Signing Successfully");
        navigation.navigate('DrawerHome');
        return response.data;
      }else if(response.data.message == "User signup successfully"){
        alert("Register Successfully")
        navigation.navigate('SignUp', {type: 'social'});
        return response.data;
      }else{
        alert("Invalid Credentials")
      }
      return response.data;
      // console.log(json);
    } catch (error) {
      // console.log("respinse");
      console.error("erropr",error);
      alert("Error", error.message)
     
    }
  };

  static updateSignup = async (id , user, navigation) => {
    console.log("user data",user);
    // let fbstatus = false;
    try {
      const response = await axios.patch(`${url}/updateSignup/${id}`, user);
      console.log("response data ==> ",response.data);
      if(response.data.data == 'Account Updated Successfully'){
        alert("Update Successfully");
        navigation.navigate('DrawerHome');
      }else{
        alert("ERROR")
      }
      return response.data.data;
      // console.log(json);
    } catch (error) {
      // console.log("respinse");
      console.error("erropr",error);
      alert("Error", error);
    }
  };
}

export {authMiddleware};
