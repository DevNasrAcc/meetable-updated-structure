import React from 'react';
import {
  Image,
  View
} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// import HomeScreen from '../screens/HomeScreen';
// import CartScreen from '../screens/CartScreen';
// import FavoriteScreen from '../screens/FavoriteScreen';
// import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/home';
import LinearGradient from 'react-native-linear-gradient';
import Location from '../screens/location';
import Profile from '../screens/profile';
import ProfilePicture from '../screens/profilePicture';
import Friend from '../screens/friends';
import EditScreen from '../screens/edit';
import ChatScreen from '../screens/chat';
// import EctraScreen from '../screens/EctraScreen';
// import ExtraScreen from '../screens/ExtraScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,  
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#fff', borderRadius:55},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home06"
        component={HomeScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0F0454',
            
          },
          tabBarIcon: ({color, size}) => (
            // <Ionicons name="home-outline" color={color} size={size} />
            <Image source={require('../assets/images/icons/home.png')} resizeMode="center"/>
          ),
        })}
      />
       <Tab.Screen
        name="Location"
        component={Location}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0F0454',
          },
          tabBarIcon: ({color, size}) => (
            <Image source={require('../assets/images/icons/map.png')} style={{width:60, height:50}} resizeMode="center"/>
          ),
        })}
      />
        <Tab.Screen
        name="Edit"
        component={EditScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0F0454',
            
          },
          tabBarIcon: ({color, size}) => (
            <LinearGradient colors={['#F6149B', '#504BF9']} style={{borderRadius:55, marginTop:-50, padding:1}}>
            <Image source={require('../assets/images/icons/mainLogo.png')} resizeMode="center" 
            />
            </LinearGradient>
           
            // <Ionicons name="home-outline" color={color} size={size} style={{marginTop:-50, }}/>
          ),
        })}
      />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0F0454',
            
          },
          tabBarIcon: ({color, size}) => (
            // <Ionicons name="home-outline" color={color} size={size} />
            <Image source={require('../assets/images/icons/add.png')} style={{width:60, height:50}} resizeMode="center"/>

          ),
        })}
      />
        <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0F0454',
            
          },
          tabBarIcon: ({color, size}) => (
            // <Ionicons name="home-outline" color={color} size={size} />
            <Image source={require('../assets/images/icons/chat.png')} style={{width:60, height:50}} resizeMode="center"/>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
