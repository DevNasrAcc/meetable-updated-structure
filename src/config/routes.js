import React, {useRef, useState} from 'react';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';
import {extendTheme, NativeBaseProvider, View} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './NavigationService';
import {Provider} from 'react-redux';
import {ConfigProvider, useConfig} from '../context/useConfig';
import store from '../store';
import {
  Splash,
  Intro,
  Welcome,
  Login,
  Registration,
  ForgotPassword,
  Verification,
  ResetPassword,
  Home,
  ClubList,
  BookingList,
  Setting,
  Notification,
  ChangePassword,
  Profile,
  MyBooking,
  Tournaments,
  CreateTournaments,
  ClubProfile,
  TournamentDetail,
  TournamentsRound,
  TournamentMatches,
  TournamentShareLink,
  Players,
  ConfirmBooking,
  TournamentWinning,
  LeaderBoard,
  Payment,
  Wallet,
  AddPayment,
  AddMoneyInToWallet,
  AddPlayer,
} from '../screen';
import {CustomDrawerContent, CustomTabComponent} from '../components';
import {assets, colors} from '../assets';
import analytics from '@react-native-firebase/analytics';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const TabStack = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();

const newColorTheme = {
  brand: {
    900: '#re',
    800: '#0c2a28',
    700: '#12403D',
  },
};
const theme = extendTheme({colors: newColorTheme});
const AppNavigator = () => {
  const routeNameRef = useRef();
  return (
    <Provider store={store}>
      <ConfigProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer
            ref={navigationRef}
            onReady={() =>
              (routeNameRef.current =
                navigationRef.current.getCurrentRoute().name)
            }
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName =
                navigationRef.current.getCurrentRoute().name;

              if (previousRouteName !== currentRouteName) {
                await analytics().logScreenView({
                  screen_name: currentRouteName,
                  screen_class: currentRouteName,
                });
                await analytics().logEvent(currentRouteName);
              }

              routeNameRef.current = currentRouteName;
            }}>
            <RootNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </ConfigProvider>
    </Provider>
  );
};
// ******************************* Root STACK SCREEN *******************************

const RootNavigator = props => {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AuthStackScreen">
      <AppStack.Screen
        {...props}
        options={{headerShown: false}}
        name="AuthStackScreen"
        component={AuthStackScreen}
      />
      <AppStack.Screen
        {...props}
        name="DrawerStack"
        options={{headerShown: false}}
        component={DrawerStackScreen}
      />
    </AppStack.Navigator>
  );
};
// ******************************* Auth STACK SCREEN *******************************
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      headerMode="none"
      screenOptions={{
        animationTypeForReplace: 'pop',
        animationEnabled: true,
        headerShown: false,
        gestureEnabled: true,
      }}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Intro"
        component={Intro}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Registration}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Verification"
        component={Verification}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="ResetPassword"
        component={ResetPassword}
      />
    </AuthStack.Navigator>
  );
};

// ******************************* Drawer STACK SCREEN *******************************
const DrawerStackScreen = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(1));
  const scale = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const translate = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -35],
  });
  const borderRadius = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });
  const marginLeft = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });
  const zIndex = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 10],
  });
  const opacity = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0.1],
  });
  const screenStyle = {
    transform: [{scale: scale, translateX: translate}],
    borderRadius,
    zIndex,
    marginLeft,
  };
  return (
    <ImageBackground
      style={styless.backgroundImage}
      source={assets.sideMenuBg}
      resizeMode="cover">
      <DrawerStack.Navigator
        screenOptions={{
          drawerType: 'back',
          overlayColor: 'transparent',
          drawerStyle: styless.drawerStyle,
          sceneContainerStyle: styless.sceneContainerStyle,
        }}
        drawerContent={props => {
          return (
            <CustomDrawerContent {...props} setProgress={e => setProgress(e)} />
          );
        }}>
        <DrawerStack.Screen
          options={{headerShown: false, gestureEnabled: true}}
          name="Home">
          {props => (
            <ScreensNavigator
              {...props}
              style={{...screenStyle}}
              opacity={{...opacity}}
            />
          )}
        </DrawerStack.Screen>
      </DrawerStack.Navigator>
    </ImageBackground>
  );
};
// ******************************* Tab STACK SCREEN *******************************
const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'none',
      }}
      tabBar={props => <CustomTabComponent {...props} />}>
      <TabStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="MyBooking"
        component={MyBooking}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="Tournament"
        component={Tournaments}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="History"
        component={MyBooking}
      />
    </TabStack.Navigator>
  );
};
// ******************************* Main Screen STACK *******************************

const ScreensNavigator = props => {
  return (
    <View style={{flex: 1}}>
      <Animated.View style={[styless.animateView, props.style]}>
        <MainStack.Navigator
          initialRouteName="TabStack"
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen
            options={{headerShown: false}}
            name="TabStack"
            component={TabStackScreen}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Profile"
            component={Profile}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="ClubList"
            component={ClubList}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="BookingList"
            component={BookingList}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Setting"
            component={Setting}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Notification"
            component={Notification}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="ChangePassword"
            component={ChangePassword}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="CreateTournament"
            component={CreateTournaments}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="TournamentsRound"
            component={TournamentsRound}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="TournamentDetail"
            component={TournamentDetail}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="ClubProfile"
            component={ClubProfile}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Players"
            component={Players}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="TournamentMatches"
            component={TournamentMatches}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="TouranmentShareLink"
            component={TournamentShareLink}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="WinningScreen"
            component={TournamentWinning}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="ConfirmBooking"
            component={ConfirmBooking}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="LeaderBoard"
            component={LeaderBoard}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Payment"
            component={Payment}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="Wallet"
            component={Wallet}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="AddPayment"
            component={AddPayment}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="AddMoney"
            component={AddMoneyInToWallet}
          />
          <MainStack.Screen
            options={{headerShown: false}}
            name="AddPlayer"
            component={AddPlayer}
          />
        </MainStack.Navigator>
      </Animated.View>
      <Animated.View style={styless.screen1} />
      <Animated.View style={[styless.screen2]} />
    </View>
  );
};

const styless = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  animateView: {
    flex: 1,
    zIndex: 10000,
    overflow: 'scroll',
  },
  drawerStyle: {
    zIndex: -100000,
    backgroundColor: colors.white,
    backgroundColor: 'transparent',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
    zIndex: -100000,
  },
  screen1: {
    position: 'absolute',
    backgroundColor: colors.transparentGreen,
    width: '100%',
    height: '73%',
    marginLeft: 26,
    top: '14%',
    borderRadius: 20,
  },
  screen2: {
    position: 'absolute',
    backgroundColor: colors.white,
    width: '100%',
    height: '66%',
    zIndex: -1,
    borderRadius: 20,
    opacity: 0.2,
    top: '18%',
  },
});
export {AppNavigator};
