import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import IndoorCard from '../components/IndoorCard';
import OutdoorCard from '../components/OutdoorCard';

function Slider() {
  const images = [
    require('../assests/crousel/temp.jpeg'),
    require('../assests/crousel/temp2.jpeg'),
    require('../assests/crousel/temp3.jpeg'),
    require('../assests/crousel/temp4.jpeg'),
    require('../assests/crousel/temp3.jpeg'),
    require('../assests/crousel/temp2.jpeg'),
  ];
  return (
    <View>
      <SliderBox images={images} dotColor="red" autoplay />
    </View>
  );
}

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Text>Welcome to ARtourism</Text>
        <Slider />
        <Text>Explore </Text>
        <IndoorCard />
        <OutdoorCard />
      </View>
    </ScrollView>
  );
};

export default Home;
