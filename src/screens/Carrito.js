import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import CardProduct from "../components/CardProduct";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Table, Row, Rows } from "react-native-table-component";
import { LinearGradient } from "expo-linear-gradient";

export default function Carrito({ navigation }) {
  const [FoodRows, setFoodRows] = useState(["Item", "Quantity", "Price"]);
  const [UserInfo, setUserInfo] = useState({});
  const [FoodForTable, setFoodForTable] = useState([[]]);
  const [FoodForShow, setFoodForShow] = useState([]);

  async function getUserInfo() {
    let getUserId = await AsyncStorage.getItem("userToken");
    setUserInfo({ info: JSON.parse(getUserId) });
  }
  async function getShoppingCart() {
    await fetch(
      `https://lofoodtruckapi.herokuapp.com/api/food/${categoryID}/food/all`
    );
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View>
      <ScrollView style={{ marginBottom: 10 }}>
        <CardProduct></CardProduct>
      </ScrollView>
      <Text>User: {UserInfo["info"]}</Text>
      <Table
        style={{
          marginBottom: 20,
          width: 300,
          marginLeft: 55,
          borderColor: "#fff",
          borderRadius: 10,
          backgroundColor: "#F9F9F9",
        }}
      >
        <Row
          data={FoodRows}
          style={styles.HeadStyle}
          textStyle={styles.TableText}
        />
        <Rows data={FoodForTable} textStyle={styles.TableText} />
      </Table>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        colors={["#4A69FF", "#20D0C4"]}
        style={styles.button}
      >
        <Text
          style={styles.text}
          onPress={() => Alert.alert("Cannot press this one")}
        >
          Realizar compra
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  button: {
    width: 350,
    height: 60,
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    marginLeft: 30,
    marginTop: 0,
  },
  text: {
    height: 70,
    width: 350,
    fontSize: 18,
    left: 110,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
