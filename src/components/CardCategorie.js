import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default class CardCategorie extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        <View style={styles.container}>
          <Image source={require("../images/5.png")} style={styles.img} />
          <Text style={styles.title}>Burger</Text>
        </View>

        <View style={styles.container}>
          <Image source={require("../images/10.png")} style={styles.img} />
          <Text style={styles.title}>Burrito</Text>
        </View>

        <View style={styles.container}>
          <Image source={require("../images/7.png")} style={styles.img} />
          <Text style={styles.title}>Salads</Text>
        </View>

        <View style={styles.container}>
          <Image source={require("../images/6.png")} style={styles.img} />
          <Text style={styles.title}>Pizza</Text>
        </View>
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
