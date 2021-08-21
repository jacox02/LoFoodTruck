import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carrito from "./src/screens/Carrito";
import Home from "./src/screens/Home";
import FoodScreen from "./src/screens/FoodView";
import Product from "./src/components/Product";
import Tabs from "./src/navigation/tabs"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
