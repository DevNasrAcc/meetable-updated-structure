import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView
} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import {styles} from './style'

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';

import { markers, mapDarkStyle, mapStandardStyle } from '../../model/mapData';
// import StarRating from '../components/StarRating';

import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height/2.3;
const CARD_WIDTH = width * 0.55;

const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const JoinTable = ({navigation}) => {
  const theme = useTheme();

  let handleToggle = () => {
    setToggle(!toggle); 
  }

  const initialMapState = {
    markers,
    categories: [
      { 
        name: 'Fastfood Center', 
        // icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
      },
      {
        name: 'Restaurant',
        // icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Dineouts',
        // icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Snacks Corner',
        // icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Hotel',
        // icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      },
  ],
    region: {
      latitude: 24.9210938,
      longitude: 67.0914055,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = useState(initialMapState);
  const [toggle, setToggle] = useState(false)

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <>
    <LinearGradient colors={['#890051', '#1F0046']}>
         <CustomHeader onPress={() => navigation.goBack()} type={true} title="Join Table"/>
         </LinearGradient>
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapDarkStyle}
      >
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                {/* <Animated.Image
                  source={require('../assets/map_marker.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                /> */}
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          {useNativeDriver: true}
        )}
      >
        {state.markers.map((marker, index) =>(
          <View style={[styles.card, {  height: CARD_HEIGHT,
            width: CARD_WIDTH}]} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                <Text numberOfLines={1} style={{color:'rgba(227, 236, 244, 1)', fontSize:16, fontWeight:'bold'}}>Papi Stack</Text>
                <Text numberOfLines={1} style={{color:'rgba(196, 196, 196, 1)', fontSize:12, fontWeight:'bold'}}>Meetable Dinner</Text>
                </View>
                <Image resizeMode="center" source={require('../../assets/images/icon.png')}/>    
              </View>

            </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
              resizeMode="center"
              style={styles.image}
              source={require('../../assets/images/logo2.png')}
            />
             <Text numberOfLines={1} style={{color:'rgba(196, 196, 196, 1)', fontSize:12, fontWeight:'bold'}}>Meetable Inc</Text>
          </View>
          <TouchableOpacity onPress={() => handleToggle()}>
          <Image resizeMode="center" source={require('../../assets/images/icons/down.png')}/>  
          </TouchableOpacity>
        
        </View>
        {
           index == 0 && toggle &&  
           <>
             <View style={{flexDirection:'row', alignItems:'center', marginTop:10, justifyContent:'space-evenly'}}>
              <TouchableOpacity style={styles.tooglebtn}>
              <Image resizeMode="center" style={styles.footerIcon} source={require('../../assets/images/icons/maleKey.png')}/> 
                <Text style={{color:'#C4C4C4', fontSize:10}}> 4x Free</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tooglebtn}>
              <Image resizeMode="center" style={styles.footerIcon} source={require('../../assets/images/icons/femaleKey.png')}/> 
                <Text style={{color:'#C4C4C4',  fontSize:10}}> 2x $300</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', marginTop:10, justifyContent:'space-evenly'}}>
              <LinearGradient colors={['rgba(247, 20, 154, 1)', 'rgba(78, 75, 250, 1)']} style={{borderTopLeftRadius:15, borderBottomRightRadius:15}}>
              <TouchableOpacity style={styles.tooglebtn02}>
                <Text style={{color:'#C4C4C4', fontSize:12, textAlign:'center'}}>Join</Text>
              </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity style={styles.tooglebtn02} onPress={() => navigation.navigate('Table Detail')}>
                <Text style={{color:'#C4C4C4',  fontSize:12, textAlign:'center'}}>Details</Text>
              </TouchableOpacity>
            </View>
           </>
         
          }
          </View>
        ))}


      </Animated.ScrollView>
    </View>
    </>
  );
};

export default JoinTable;
