import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient'

const AppTransparentButton = ({title, status_sm, md, status_md, sm}) => {
  return (
    <>
    {sm ? 
     <View style={[styles.container, {backgroundColor:status_sm && '#fff'}]}>
     <Text style={[styles.text, {color: status_sm ? 'rgba(9, 44, 76, 1)' : 'rgba(227, 236, 244, 1)', fontWeight: status_sm && 'bold'}]}>{title}</Text>
     </View>
     :
       md && status_md ? <LinearGradient style={styles.container_md}  colors={['rgba(247, 20, 154, 1)', 'rgba(78, 75, 250, 1)']}>
        <Text style={[styles.text, {color: status_md ? '#fff' : '#fff', fontWeight: status_md && 'bold'}]}>{title}</Text>
        </LinearGradient>
        : <View style={styles.container_md}>
            <Text style={[styles.text, {color: status_md ? '#fff' : '#fff', fontWeight: status_md && 'bold'}]}>{title}</Text>
        </View>
        }
    </>
   
  )
}

export default AppTransparentButton
