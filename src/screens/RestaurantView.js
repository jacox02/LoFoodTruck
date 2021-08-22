import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Product from "../components/Product";

const RestaurantView = ({ route, navigation }) => {
  const { restaurantID } = route.params;
  const [RestaurantInfo, setRestaurantInfo] = useState({});
  const [RestaurantFood, setRestaurantFood] = useState([]);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(
        `https://lofoodtruckapi.herokuapp.com/api/food/restaurant/${restaurantID}/information`
      );
      const json = await response.json();

      setRestaurantInfo(json[0][0]);
      console.log(json[1]);
      setRestaurantFood(json[1]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRestaurantInfo();
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
        source={require("../images/Background.jpg")}
        style={{
          height: Dimensions.get("window").height / 3.0,
        }}
      >
        <View>
          <MaterialIcons
            style={styles.icon}
            name="keyboard-arrow-left"
            size={35}
            color="white"
          />
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{ padding: 50 }}>
          <Text
            style={{
              color: "#153E73",
              fontSize: 23,
              fontWeight: "bold",
              bottom: 15,
            }}
          >
            {RestaurantInfo.restaurant_name}
          </Text>
          <Text style={{ color: "#153E73", fontSize: 16, fontWeight: "bold" }}>
            Descripción
          </Text>
          <Text style={{ color: "#153E73", fontSize: 12, top: 5 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </Text>
          <Text
            style={{
              color: "#153E73",
              fontSize: 16,
              fontWeight: "bold",
              top: 10,
            }}
          >
            Dirección
          </Text>
          <Text style={{ color: "#153E73", fontSize: 12, top: 10 }}>
            {RestaurantInfo.restaurant_address}
          </Text>
        </View>
        <View style={{ top: -35 }}>
          <Text
            style={{
              color: "#153E73",
              fontSize: 16,
              fontWeight: "bold",
              paddingLeft: 50,
              bottom: -15,
            }}
          >
            Productos
          </Text>
          <ScrollView style={{ left: 35, top: 40 }} horizontal={true}>
            {RestaurantFood.map((element) => (
              <React.Fragment key={element.food_id}>
                <View style={stylesCard.Foodcontainer} key={element.food_id}>
                  <Image
                    source={require("../images/5.png")}
                    style={stylesCard.img}
                  />
                  <AntDesign
                    style={stylesCard.icon}
                    name="heart"
                    size={20}
                    color="red"
                  />
                  <Text style={stylesCard.title}>{element.food_name}</Text>
                  <Text style={stylesCard.subtitle}>{element.food_price}</Text>
                  <Text style={stylesCard.price}>${element.food_price}</Text>

                  <AntDesign
                    onPress={() =>
                      navigation.navigate("FoodDetail", {
                        foodID: element.food_id,
                      })
                    }
                    style={stylesCard.iconn}
                    name="rightcircleo"
                    size={24}
                    color="black"
                  />
                </View>
              </React.Fragment>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantView;

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
    fontSize: 18,
    fontWeight: "bold",
    left: 170,
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

const stylesCard = StyleSheet.create({
  Foodcontainer: {
    width: 174,
    height: 214,
    flexDirection: "row",
    backgroundColor: "#FBFBFB",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 2,
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
    top: 50,
    bottom: 50,
    left: 35,
    height: 80,
    width: 80,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 130,
    marginLeft: -147,
    color: "#515F65",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 150,
    marginLeft: -20,
    color: "#515F65",
  },
  price: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 170,
    marginLeft: -42,
    color: "#153E73",
  },
  icon: {
    marginTop: 1,
    marginLeft: 50,
  },
  iconn: {
    marginTop: 160,
    marginLeft: 80,
  },
});
