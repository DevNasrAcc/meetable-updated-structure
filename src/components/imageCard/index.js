import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import {styles} from './style'
import AppModal from '../appModal'

const ImageCard = ({image, status}) => {
  const [modal, setModal] =  useState(false)
  return (
    <View >
      <Image source={image} resizeMode="center" style={styles.imagestyle}/>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModal(!modal)}>
          {modal && <AppModal image={require('../../assets/images/icons/delete2x.png')} title="Delete Your Profile Picture ?" btn1="Delete" btn2="Cancel"/>}
            <Image source={require('../../assets/images/icons/cross02.png')} resizeMode="center"/>
        </TouchableOpacity>
        { status && 
        <>
        <Image source={require('../../assets/images/bottom_image.png')} resizeMode="center" style={styles.image_main}/>
           <Text style={styles.image_text}>Main Profile</Text>
           </>
        }
      </View>
    </View>
  )
}

export default ImageCard
