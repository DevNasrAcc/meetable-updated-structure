import {Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomHeader from '../../components/customHeader'
import {styles} from './style'


const Table = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Tables"/>
    <View style={{paddingLeft:25, marginTop:10}}>
         <Text style={styles.text}>Tables</Text>
         <View style={styles.sub_container}>
            <Image source={require('../../assets/images/No_table.png')} resizeMode="center" style={styles.image}/>
              <Text style={styles.text01}>You currently have No Tables!</Text>
         </View>    
    </View> 
    </LinearGradient>
  )
}

export default Table
