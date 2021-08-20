import React from "react";
import { View, Text } from "react-native";
import CardRestaurants from '../components/CardRestaurants'
import { ScrollView } from 'react-native-gesture-handler'

const Restaurants = (props) => {
  return (
    <View >
    <View style={{
      height:125,
      alignItems: "center",
      shadowColor: "#000",
      borderWidth:1,
      borderColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
          }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color :'#4A69FF', top:65,}}>Restaurantes</Text>
    </View>
    <ScrollView style={{marginBottom:10}}>
      <CardRestaurants></CardRestaurants>
    </ScrollView>
    </View>
  );
};

export default Restaurants;
