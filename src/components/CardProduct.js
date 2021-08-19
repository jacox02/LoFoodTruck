import React from "react";
import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Contador from "../components/Contador";
export default class CardProduct extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        <View style={styles.container}>
          <Image source={require("../images/5.png")} style={styles.img} />

          <MaterialCommunityIcons
            onPress={() => Alert.alert("Eliminado")}
            style={styles.icon}
            name="delete-circle"
            size={35}
            color="red"
          />
          <Text style={styles.title}>Big Burguer Queso</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet,</Text>
          <Text style={styles.price}>$12.58</Text>
          <Contador style={styles.contador}></Contador>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 214,
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "#fff",
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
    top: 25,
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
    fontSize: 16,
    marginTop: 110,
    marginLeft: -150,
    color: "#515F65",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 9,
    marginTop: 140,
    marginLeft: -120,
    color: "#515F65",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 170,
    marginLeft: -40,
    color: "#4A69FF",
  },
  icon: {
    marginTop: -10,
    marginLeft: 50,
  },
  contador: {},
});
