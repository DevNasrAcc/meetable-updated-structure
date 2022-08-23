
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image,TouchableOpacity } from "react-native";
import {styles} from './style'
import AppTransparentButton from "../appTransparentbutton";


const AppModal = ({image, title, btn1, btn2}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View >
    <Modal
      animationType="slide"
      transparent={true}
      
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={image} resizeMode="center" style={{height:180}}/>
        <Text style={styles.modalText}>{title}</Text>
        <View style={{flexDirection:'row',  justifyContent:'space-between', marginTop:14}}>
            <AppTransparentButton title={btn1} status_md={true} md={true}/>
            <TouchableOpacity style={{marginLeft:10}} onPress={() => setModalVisible(!modalVisible)}>
            <AppTransparentButton title={btn2} md={true}/>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  </View>
  )
}

export default AppModal

