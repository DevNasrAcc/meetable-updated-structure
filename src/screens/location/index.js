import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'
import CustomHeader from '../../components/customHeader'
import AppText from '../../components/appTextInput'
import AppSearchBar from '../../components/appSearchBar'
import AppTransparentButton from '../../components/appTransparentbutton'

const Location = ({navigation}) => {
  return (
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Location"/>
    <View style={styles.container}>
        <Text style={styles.text}>Location</Text>
        <AppSearchBar placeholder="Find Location"/>
        <View style={styles.sub_container}>
            <AppTransparentButton title="Near By" status_sm={true} sm={true}/>
            <AppTransparentButton title="Recent" sm={true}/>
            <AppTransparentButton title="Popular" sm={true}/>
        </View>
    </View>
    </LinearGradient>
  )
}

export default Location
