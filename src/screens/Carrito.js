import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import CardProduct from "../components/CardProduct";
import { Table, Row, Rows } from "react-native-table-component";
import { LinearGradient } from "expo-linear-gradient";

export default class Carrito extends Component {
  constructor(props) {
    super(props);

    this.state = {
      HeadTable: ["Item", "QTY", "Price"],
      DataTable: [
        ["Big Burguer", "X2", "$85.00 usd"],
        ["Big Burguer", "X2", "$85.00 usd"],
        ["Big Burguer", "X2", "$85.00 usd"],
        ["Big Burguer", "X2", "$85.00 usd"],
        ["Big Burguer", "X2", "$85.00 usd"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View>
        <ScrollView style={{ marginBottom: 10 }}>
          <CardProduct></CardProduct>
        </ScrollView>

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
            data={state.HeadTable}
            style={styles.HeadStyle}
            textStyle={styles.TableText}
          />
          <Rows data={state.DataTable} textStyle={styles.TableText} />
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
