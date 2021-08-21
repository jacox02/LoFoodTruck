import React from "react";
import { View, Text } from "react-native";
import CardRestaurants from '../components/CardRestaurants'
import { ScrollView } from 'react-native-gesture-handler'

const Restaurants = (props) => {
  return (
    <View >
    <ScrollView style={{marginBottom:10}}>
      <CardRestaurants></CardRestaurants>
    </ScrollView>
    </View>
  );
};

export default Restaurants;
