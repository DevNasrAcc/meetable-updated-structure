import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import {styles} from './style'
import { Icon } from '@rneui/themed'

const AppSearchBar = ({placeholder}) => {
  return (
    <View style={styles.container}>
       <TextInput placeholder={placeholder} placeholderTextColor="rgba(227, 236, 244, 1)" style={styles.text_input}/>
       <Icon name="search1" type="antdesign" color="#E3ECF4"/>
    </View>
  )
}

export default AppSearchBar

