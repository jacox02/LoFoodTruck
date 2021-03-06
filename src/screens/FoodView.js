import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ingredients from "../components/Ingredients";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FoodView = ({ route, navigation }) => {
  const { foodID } = route.params;

  let defaultFood = {
    food_id: 0,
    food_name: "",
    food_description: "",
    food_ingredients: "",
    food_price: 0,
    restaurant_id: 0,
    category_id: 0,
    food_image_uri: "",
  };

  const [foodInformation, setFoodInformation] = useState(defaultFood);
  const [UserId, setUserId] = useState(0);
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `https://lofoodtruckapi.herokuapp.com/api/food/${foodID}`
      );
      const json = await response.json();
      setFoodInformation(json[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const addToShoppingCart = async () => {
    try {
      let getUserId = await AsyncStorage.getItem("userToken");
      setUserId(parseInt(getUserId));
      const response = await fetch(
        `https://lofoodtruckapi.herokuapp.com/api/food/${parseInt(getUserId)}/${
          foodInformation.food_id
        }/add/shoppingcart`
      );

      let json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
      showsVerticalScrollindicator={false}
    >
      <ImageBackground
        source={{ uri: foodInformation.food_image_uri }}
        style={{
          height: Dimensions.get("window").height / 2.2,
        }}
      >
        <View>
          <Text style={styles.title}>{foodInformation.food_name}</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "#153E73", fontSize: 18, fontWeight: "bold" }}>
            Descripci??n
          </Text>
          <Text style={{ color: "#153E73", fontSize: 12, top: 10 }}>
            {foodInformation.food_description}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            addToShoppingCart();
            ToastAndroid.show("Adding to the shopping cart", 1000);
            navigation.navigate("Carrito");
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            colors={["#4A69FF", "#20D0C4"]}
            style={styles.button}
          >
            <Text style={styles.text}>Agregar al carrito</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 26,
            color: "#153E73",
            fontWeight: "bold",
            left: 310,
            top: -45,
          }}
        >
          ${foodInformation.food_price}
        </Text>
      </View>
    </ScrollView>
  );
};

export default FoodView;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "#ffffff",
    bottom: 50,
    borderTopStartRadius: 60,
    width: "100%",
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    left: 115,
    top: 30,
  },
  icon: {
    top: 55,
    left: 29,
  },
  button: {
    width: 233,
    height: 63,
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginLeft: 40,
    marginTop: -15,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
