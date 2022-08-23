import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';

import {Icon} from '@rneui/themed';

import LandingScreen from './src/screens/authScreens/landing/index';
import Login from './src/screens/authScreens/login/index';
import SignUp from './src/screens/authScreens/signup/index';
import SplashScreen from './src/screens/authScreens/splash';
import { height, width } from './src/assets/constant';
import AppStack from './src/navigation/AppStack';
import ProfilePicture from './src/screens/profilePicture';
import RequestDetails from './src/screens/requestdetail';
import ShareTable from './src/screens/sharetable';
import RequestScreen from './src/screens/request';
import ChatDetailScreen from './src/screens/chatdetail';
// import AppStack from './src/navigation/AppStack';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';


import { enableLatestRenderer } from 'react-native-maps';
import JoinTable from './src/screens/jointable';
import TableDetail from './src/screens/tabledetail';

enableLatestRenderer();

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProflePicture"
            component={ProfilePicture}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Request Details"
            component={RequestDetails}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="Table Detail"
            component={TableDetail}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="Request"
            component={RequestScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Share Table"
            component={ShareTable}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="JoinTable"
            component={JoinTable}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatDetail"
            component={ChatDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerHome"
            component={AppStack}
            options={{headerShown: false}}
          />   
      </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>  

  )
}
