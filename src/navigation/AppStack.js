import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Image } from 'react-native';
import CustomDrawer from '../components/customDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';



import TabNavigator from './TabNavigator';
import Account from '../screens/account';
import Setting from '../screens/setting';
import Wallet from '../screens/wallet';
import Table from '../screens/table';
import BlockedUser from '../screens/blockeduser';
import Legal from '../screens/legal';
import Password from '../screens/password';
import CustomHeader from '../components/customHeader';
import RequestScreen from '../screens/request';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          backgroundColor:'#320445',
          // opacity:0.84
        },
        drawerActiveBackgroundColor: '#320445',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#ffff',
        drawerLabelStyle: {
          marginLeft: -20,
          // fontFamily: 'Roboto-Medium',
          fontWeight:'600',
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Accounts"
        component={Account}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="person-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/account.png')} resizeMode="center" style={{width:20,}}/>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={19} color="#E3ECF4" />
            // <Image source={require('../assets/images/icons/')} resizeMode="center"/>
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="timer-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/wallet.png')} resizeMode="center" style={{width:20}}/>
          ),
        }}
      />
      <Drawer.Screen
        name="Table/Events"
        component={Table}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="settings-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/table.png')}  style={{width:20, height:30}}/>
          ),
        }}
      />
       <Drawer.Screen
        name="Blocked User"
        component={BlockedUser}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="settings-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/blocked.png')} resizeMode="center" style={{width:20}}/>
          ),
        }}
      />
       <Drawer.Screen
        name="Legal"
        component={Legal}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="settings-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/legal.png')} resizeMode="center" style={{width:20}}/>
          ),
        }}
      />
       {/* <Drawer.Screen
        name="Request"
        component={RequestScreen}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="settings-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/legal.png')} resizeMode="center" style={{width:20}}/>
          ),
        }}
      /> */}
       <Drawer.Screen
        name="Password"
        component={Password}
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="settings-outline" size={22} color={color} />
            <Image source={require('../assets/images/icons/password.png')} resizeMode="center" style={{width:20}}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
