import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ToastAndroid } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Product = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getFood = async () => {
    try {
      const response = await fetch(
        "https://lofoodtruckapi.herokuapp.com/api/food/random"
      );
      const json = await response.json();
      setData(json[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  card = () => {
    return data.map((element) => {
      return (
        <ScrollView>
          <React.Fragment key={element.food_id}>
            <View style={styles.container} key={element.food_id}>
              <Image source={require("../images/5.png")} style={styles.img} />
              <AntDesign
                style={styles.icon}
                name="heart"
                size={20}
                color="red"
              />
              <Text style={styles.title}>{element.food_name}</Text>
              <Text style={styles.subtitle}>{element.food_price}</Text>
              <Text style={styles.price}>${element.food_price}</Text>

              <AntDesign
                onPress={() => navigation.navigate("FoodDetail")}
                style={styles.iconn}
                name="rightcircleo"
                size={24}
                color="black"
              />
            </View>
          </React.Fragment>
        </ScrollView>
      );
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 25 }}
    >
      {card()}
    </ScrollView>
  );
};
export default Product;

const styles = StyleSheet.create({
  container: {
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
