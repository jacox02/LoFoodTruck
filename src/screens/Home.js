import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import CardCategorie from "../components/CardCategorie";
import Product from "../components/Product";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home () {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
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
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Explorar categorias</Text>
          <Text
            style={{
              fontSize: 12,
              color: "#CFCFCF",
              position: "absolute",
              top: 25,
              left: 350,
            }}
          >
            VerTodos
          </Text>
        </View>
        <CardCategorie></CardCategorie>
      </ScrollView>
      <Text
        style={{
          color: "#4A69FF",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 25,
          marginLeft: 20,
        }}
      >
        Populares
      </Text>
      {/* Productos */}
      <ScrollView>
        <Product></Product>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#4A69FF",
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
    marginTop: 25,
  },
  container: {
    flex: 1,
    flexDirection: "column",
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
  Icon: {
    padding: 10,
    margin: 5,
    // resizeMode: "stretch",
    alignItems: "center",
  },
});

