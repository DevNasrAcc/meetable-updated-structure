import React, {useState} from 'react';

import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';

import {styles} from './style'


const AppText = ({placeholder, icon, onChange, pass, value}) => {
  const [visible, setVisible] = useState(true)
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor="#929FAA"
        style={{color: '#fff', flex:1, margin:0,padding:0}}
        secureTextEntry={pass && visible ? true : false}
      />
      {pass &&
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Icon
        name={visible ? 'eye-off' : 'eye'}
        size={18}
        type="feather"
        color="#C4C4C4"
        style={styles.icon}
      /> 
      </TouchableOpacity>
      }
    </View>
  );
};

export default AppText;
