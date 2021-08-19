import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { LinearGradient } from "expo-linear-gradient";
import Ingredients from "../components/Ingredients";

const FoodView = ({ navigation }) => {
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
          height: Dimensions.get("window").height / 2.2,
        }}
      >
        <View>
          <MaterialIcons
            style={styles.icon}
            name="keyboard-arrow-left"
            size={25}
            color="white"
          />
          <Text style={styles.title}>Hamburguesa especial</Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "#153E73", fontSize: 18, fontWeight: "bold" }}>
            Descripción
          </Text>
          <Text style={{ color: "#153E73", fontSize: 12, top: 10 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#153E73",
              fontSize: 18,
              fontWeight: "bold",
              paddingLeft: 40,
            }}
          >
            Ingredientes
          </Text>
          <Text style={{ color: "#9A9A9A", fontSize: 10, left: 315, top: -25 }}>
            10 ingredientes
          </Text>
          <ScrollView>
            <Ingredients></Ingredients>
          </ScrollView>
        </View>
      </View>
      <View>
        {/* <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          colors={["#4A69FF", "#20D0C4"]}
          style={styles.button}
        > */}
        <Text style={styles.text}>Agregar al carrito</Text>
        {/* </LinearGradient> */}
        <Text
          style={{
            fontSize: 26,
            color: "#153E73",
            fontWeight: "bold",
            left: 310,
            top: -45,
          }}
        >
          $22.99
        </Text>
      </View>
    </ScrollView>
  );
};

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
export default FoodView;
