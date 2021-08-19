import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import CategoriesRow from "../components/CategoriesRow";
import Product from "../components/Product";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
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

          elevation: 2,
        }}
      >
        <View
          style={{
            width: 414,
            height: 131,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: "#4A69FF",
              textAlign: "center",
              marginTop: 30,
              fontWeight: "bold",
            }}
          >
            Inicio
          </Text>
          <View>
            <TextInput style={styles.input} placeholder={"Buscar"} />
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
        <CategoriesRow></CategoriesRow>
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
        Explorar categorias
      </Text>

      <ScrollView>
        <Product></Product>
        <Button
          title="Go to Carrito"
          onPress={() => navigation.navigate("CarritoScreen")}
        />
        <Button
          title="Go to Food View"
          onPress={() => navigation.navigate("FoodScreen")}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 33,
    width: 358,
    margin: 12,
    borderRadius: 15,
    borderColor: "#E2EDF2",
    color: "#E2EDF2",
    marginLeft: 30,
    elevation: 1,
  },
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
});

export default Home;
