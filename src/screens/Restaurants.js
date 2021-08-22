import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Restaurants = ({ navigation }) => {
 
  const [Restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://lofoodtruckapi.herokuapp.com/api/food/restaurants/all"
      );
      const json = await response.json();
      setRestaurants(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
      <ScrollView
      vertical
      showsVerticalScrollindicator={true}
      style={{ marginTop: 40,}}>
       
          {Restaurants.map((element) => {
            return (
                  <View style={styles.container} Key={element.restaurant_id}>
                    
                    <Text numberOfLines={1}  style={styles.title}>{element.restaurant_name}</Text>
                    <Image
                      source={{ uri: element.restaurant_image }}
                      style={styles.img}
                    />
                    <Text numberOfLines={1} style={styles.direction}>
                      {element.restaurant_address}
                    </Text>
                    <Text style={styles.category}>{element.category_name}</Text>
                    <AntDesign
                      onPress={() => {
                        navigation.navigate("RestaurantDetail", {
                          restaurantID: element.restaurant_id,
                        });
                      }}
                      style={styles.iconn}
                      name="rightcircleo"
                      size={22}
                      color="#153E73"
                    />
                  </View>
                
              
            );
          })}
      </ScrollView>
    
  );
};
const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 180,
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 2,
    marginLeft: 45,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  img: {
    top: 2,
    bottom: 50,
    height: 80,
    width: 80,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 11,
    color: "#515F65",
  },
  direction: {
    fontWeight: "bold",
    fontSize: 10,
    top:-3,
    color: "#515F65",
  },
  category: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop:1,
    marginLeft:0,
    color: "#515F65",
  },
  iconn: {
    marginTop:-5,
    marginLeft:250,
  },
});
export default Restaurants;
