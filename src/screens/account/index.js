import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'
import TextCard from '../../components/textCard'
import {useDispatch, useSelector} from 'react-redux';
import { height } from '../../assets/constant'
import AppTransparentButton from '../../components/appTransparentbutton'

const Account = ({navigation}) => {
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  const [drink, setDrink] = useState();
  const [bio, setBio] = useState();
  const [gender, setGender] = useState();
  const [job, setJob] = useState();
  const [food, setFood] = useState();
  const [hobby, setHobby] = useState();

  useEffect(() => {
      setName(user.full_name);
   },[])

  const user = useSelector(state => state.authReducer.user);
  return (
    
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Accounts"/>
    <ScrollView >
      <View style={{marginBottom:80}}>
          <TextCard title="Name" subTitle="Jhon Smith" status="edit" value={name} onChange={(text) => setName(text)}/>
          <TextCard title="Birthday" subTitle="04-03-1999" status="edit" value={birthday} onChange={(text) => setBirthday(text)} number="num"/>
          <TextCard title="Drink" subTitle="Whiskey" status="edit" value={drink} onChange={(text) => setDrink(text)}/>
          <TextCard title="Bio" subTitle="My Name is Jhon Smith and this is the Dummy text to show the typographics for this space." status="edit" value={bio} onChange={(text) => setBio(text)}/>
          <TextCard title="Gender" subTitle="Male" status="edit" value={gender} onChange={(text) => setGender(text)}/>
          <TextCard title="Job Title" subTitle="Designer" status="edit" value={job} onChange={(text) => setJob(text)}/>
          <TextCard title="Food" subTitle="Zinger Burger" status="edit" value={food} onChange={(text) => setFood(text)}/>
          <TextCard title="Hobby" subTitle="Swimming" status="edit" value={hobby} onChange={(text) => setHobby(text)}/>
          <View style={styles.btn_container}>
            <AppTransparentButton title="Cancel" status_md={true} md={true}/>
            <AppTransparentButton title="Save"  md={true}/>
       </View>
      </View>
  
      </ScrollView>
    </LinearGradient>
  )
}

export default Account

