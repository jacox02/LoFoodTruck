import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class CategoriesRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { image: "../images/5.png", text: "Burger" },
        { image: "../images/6.png", text: "Pizza" },
        { image: "../images/7.png", text: "Salads" },
      ],
    };
  }
  categoriesList() {
    return this.state.categories.map((data) => {
let path = `${data.image}`;
      return (
        <View style={styles.container} key={data.text}>
          <Image source={path} style={styles.img} />
          <Text style={styles.title}>{data.text}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        {this.categoriesList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 90,
    height: 60,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#4A69FF",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    opacity: 0.8,
  },
  img: {
    height: 30,
    width: 30,
    left: -1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 0,
    color: "#fff",
    textAlign: "center",
  },
});
