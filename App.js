import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carrito from "./src/screens/Carrito";
import Home from "./src/screens/Home";
import FoodScreen from "./src/screens/FoodView";
import Product from "./src/components/Product";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ title: "My home" }}
        />
        <Stack.Screen name="CarritoScreen" component={Carrito} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
      </Stack.Navigator>
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
