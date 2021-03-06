import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }) {
  const [Food, setFood] = useState([]);
  const [Categories, setCategories] = useState([]);

  const getFood = async () => {
    try {
      const response = await fetch(
        "https://lofoodtruckapi.herokuapp.com/api/food/random"
      );
      const json = await response.json();
      setFood(json[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://lofoodtruckapi.herokuapp.com/api/food/categories"
      );
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories();
    getFood();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          borderWidth: 2,
          borderColor: "#ffffff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 0,
        }}
      >
        <View
          style={{
            width: 414,
            height: 80,
          }}
        >
          <View style={styles.passwordContainer}>
            <MaterialCommunityIcons
              style={styles.Icon}
              name="magnify"
              color={"#4A69FF"}
              size={20}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder={"Buscar"}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
      </View> */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "#4A69FF",
            fontSize: 16,
            marginLeft: 15,
            fontWeight: "bold",
            marginTop:50,
          }}
        >
          Explorar categorias
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        {Categories.map((category) => (
          <TouchableOpacity
            style={styles.categoriesContainer}
            onPress={() => {
              ToastAndroid.show("Cargando", 5000);
              navigation.navigate("FoodByCategory", {
                categoryID: category.category_id,
                categoryName: category.category_name,
              });
            }}
          >
            {/* <Image
              source={{ uri: category.category_image }}
              style={styles.imgCategories}
            /> */}
            <Text style={styles.titleCategories}>{category.category_name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text
        style={{
          color: "#4A69FF",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 60,
          marginLeft: 15,
        }}
      >
        Populares
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {Food.map((element) => {
          return (
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("FoodDetail", {
                    foodID: element.food_id,
                  })
                }
                key={element.food_id}
              >
                <View style={styles.Foodcontainer} key={element.food_id}>
                  <Image
                    source={require("../images/5.png")}
                    style={styles.img}
                  />
                  <AntDesign
                    style={styles.icon}
                    name="heart"
                    size={20}
                    color="red"
                  />
                  <Text style={styles.title}>{element.food_name}</Text>
                  <Text style={styles.subtitle}>{element.food_price}</Text>
                  <Text style={styles.price}>${element.food_price}</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgCategories: { height: 30, width: 30, left: -1 },
  titleCategories: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 0,
    top:5,
    color: "#fff",
    textAlign: "center",
  },
  categoriesContainer: {
    flex: 1,
    width: 100,
    height: 60,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#4A69FF",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    opacity: 0.8,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.8,
    borderColor: "#4A69FF",
    height: 40,
    borderRadius: 15,
    margin: 10,
  },
  // Icon: {
  //   padding: 10,
  //   margin: 5,
  //   alignItems: "center",
  // },

  Foodcontainer: {
    width: 174,
    height: 214,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 40,
    marginBottom: 10,
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
    top: 35,
    bottom: 50,
    left: 1,
    height: 80,
    width: 80,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 100,
    marginLeft: 4,
    color: "#515F65",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 10,
    marginLeft: 6,
    color: "#515F65",
  },
  price: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 10,
    marginLeft: 2,
    color: "#153E73",
  },
  icon: {
    marginTop: -75,
    marginLeft: 125,
  },
});
