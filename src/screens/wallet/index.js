import { StyleSheet, Text, View, ScrollView, Image,Switch, Modal  } from 'react-native'
import React, {useState, useRef} from 'react'
import CustomHeader from '../../components/customHeader'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'


import Carousel,{ Pagination } from 'react-native-snap-carousel'

const Wallet = ({navigation}) => {
  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: require('../../assets/images/card-01.png'),
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: require('../../assets/images/card-01.png'),
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: require('../../assets/images/card-01.png'),
    },
  ];
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  let ItemCard = (item , index) => {
    console.log("item", item),
    <Image source={require('../../assets/images/card02.png')}/>
  } 

  return (
    
    <LinearGradient colors={['#890051', '#1F0046']} style={{flex:1}}>
    <CustomHeader onPress={() => navigation.goBack()} type={true} title="Wallet"/>
        <View style={styles.conatiner}>
          <View>
              <Text style={styles.text}>Available Funds</Text>
              <Text style={[styles.text, {marginTop:16, marginBottom:20}]}>$0.00</Text>
          </View>
              <Text style={styles.subtext01}>Add New Card</Text>
        </View>
        <View style={styles.horizontal_line}/>

          <View style={{padding:20}}>
              <Text style={styles.text01}>Pending Funds</Text>
              <Text style={styles.subtext}>( Will be Available 12 hours After Event )</Text>
              <Text style={[styles.text01, {marginTop:14}]}>$0.00</Text>
          </View>

        <Carousel
        layout="default"
        layoutCardOffset={19}
        // ref={isCarousel}
        data={data}
        renderItem={ItemCard}
        sliderWidth={200}
        itemWidth={100}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        // carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#fff'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />       
     <View style={[styles.horizontal_line, {marginTop:40}]}/>
     <Text style={{textAlign:'center', color:'#fff', marginTop:10}}>No Transaction Yet</Text>  

    </LinearGradient>
  )
}

export default Wallet;


