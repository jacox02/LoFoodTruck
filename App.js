import React, { useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Carrito from "./src/screens/Carrito";
import Restaurants from "./src/screens/Restaurants";
import Profile from "./src/screens/ProfileScreen";

import RestaurantDetail from "./src/screens/RestaurantView";
import FoodByCategory from "./src/screens/FoodByCategory";
import FoodDetail from "./src/screens/FoodView";

import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";

import { AuthContext } from "./src/components/context";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
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
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        let validatedUserName = "";
        let validatedUserId = "";
        let isValidated = false;
        const response = await fetch(
          "https://lofoodtruckapi.herokuapp.com/api/users/login/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userEmail: userName,
              password: password,
            }),
          }
        );
        const json = await response.json();

        if (json.length > 0) {
          let userToken;
          userToken = null;

          try {
            userToken = json.user_id;
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }

          // setUserToken("fgkj");
          // console.log('user token: ', userToken);
          dispatch({ type: "LOGIN", id: userName, token: userToken });
        } else {
          ToastAndroid.show("User or password invalid", 3000);
        }
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen
              name="STACK"
              component={MainTabNavigator}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="RestaurantDetail"
              component={RestaurantDetail}
            ></Stack.Screen>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="FoodByCategory"
              component={FoodByCategory}
            ></Stack.Screen>

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="FoodDetail"
              component={FoodDetail}
            ></Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
