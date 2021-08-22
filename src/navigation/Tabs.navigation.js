import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Carrito from "../screens/Carrito";
import Restaurants from "../screens/Restaurants";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#e91e63">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
