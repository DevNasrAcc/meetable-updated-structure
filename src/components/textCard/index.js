import { StyleSheet, Text, View, Image, Switch, TextInput } from 'react-native'
import React, {useState} from 'react'
import {styles} from './style'

const TextCard = ({title, subTitle, status, value, onChange, number}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
    <View style={styles.container}>
         <View style={{flexDirection:'column', flex:1}}>
            <Text style={styles.text}>{title}</Text>
            {/* <Text style={styles.sub_text}>{subTitle}</Text> */}
          <TextInput
            value={value}
            autoComplete ='birthdate-day'
            placeholder={subTitle}
            onChangeText={onChange}
            placeholderTextColor="#929FAA"
            style={{color: '#fff', flex:1, margin:0,padding:0}}

          />
         </View>
         {status == "toggle" ?   <Switch
         style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            trackColor={{ false: "#fff", true: "#fc4ef3" }}
            thumbColor={isEnabled ? "#fff" : "#092C4C"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      /> : status == "edit"  ? <Image source={require('../../assets/images/icons/edit.png')} resizeMode="center" style={{height:20,}}/> : null
      }
         
       </View>
       <View style={styles.horizontal_line}/>
       </>
  )
}

export default TextCard
