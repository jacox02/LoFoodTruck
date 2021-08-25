import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
export default function FoodByCategory({ route, navigation }) {
  const { categoryID, categoryName } = route.params;

  const [CategoryFood, setCategoryFood] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        `https://lofoodtruckapi.herokuapp.com/api/food/${categoryID}/food/all`
      );
      const json = await response.json();
      setCategoryFood(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  if (CategoryFood.length > 0) {
    return (
      <View>
        <Text style={styles.categoryTitle}> Categoria: {categoryName}</Text>
        <ScrollView style={{ marginBottom: 10 }}>
          <ScrollView
            vertical
            showsVerticalScrollindicator={true}
            style={{ marginTop: 40 }}
          >
            {CategoryFood.map((element) => {
              return (
                <ScrollView>
                  <TouchableOpacity
                    style={styles.container}
                    Key={element.restaurant_id}
                    onPress={() => {
                      navigation.navigate("FoodDetail", {
                        foodID: element.food_id,
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.title}>{element.food_name}</Text>
                      <Image
                        source={{ uri: element.food_image_uri }}
                        style={styles.img}
                      />

                      <Text style={styles.direction} numberOfLines={1}>
                        {" "}
                        {`${element.food_description.slice(0, 90)}...`}
                      </Text>
                      <Text style={styles.category}>${element.food_price}</Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.categoryTitle}> Categoria: {categoryName}</Text>
        <Text style={styles.noResultText}>No Results</Text>
        <Image
          style={styles.noResultImage}
          source={require("../images/searchnoresult.png")}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 20,
    color: "#515F65",
  },
  noResultText: {
    fontWeight: "bold",
    fontSize: 38,
    textAlign: "center",
    paddingTop: 100,
    color: "#515F65",
  },
  noResultImage: {
    width: 350,
    height: 350,
  },
  container: {
    width: 350,
    height: 210,
    flexDirection: "column",
    flexWrap: "wrap",
    textAlign: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 2,
    marginLeft: 30,
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
    top: 5,
    left: 15,
    height: 90,
    width: 90,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 50,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 10,
    color: "#515F65",
  },
  direction: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 15,
    left: 10,
    color: "#515F65",
  },
  category: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 4,
    marginLeft: 10,
    color: "#515F65",
  },
  iconn: {
    marginTop: 100,
    marginLeft: 99,
  },
});
