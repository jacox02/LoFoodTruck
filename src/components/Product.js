import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Product = ({ navigation }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 25 }}
    >
      <View style={styles.container}>
        <Image source={require("../images/5.png")} style={styles.img} />
        <AntDesign style={styles.icon} name="heart" size={20} color="red" />
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.subtitle}>Sub titulo</Text>
        <Text style={styles.price}>$12.58</Text>
        <Button
          title=">"
          onPress={() => navigation.navigate("FoodScreen")}
        ></Button>
        <AntDesign
          style={styles.iconn}
          name="rightcircleo"
          size={24}
          color="#153E73"
        />
      </View>

      <View style={styles.container}>
        <Image source={require("../images/10.png")} style={styles.img} />
        <AntDesign style={styles.icon} name="hearto" size={20} color="black" />
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.subtitle}>Sub titulo</Text>
        <Text style={styles.price}>$12.58</Text>
        <AntDesign
          style={styles.iconn}
          name="rightcircleo"
          size={24}
          color="#153E73"
        />
      </View>

      <View style={styles.container}>
        <Image source={require("../images/7.png")} style={styles.img} />
        <AntDesign style={styles.icon} name="hearto" size={20} color="black" />
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.subtitle}>Sub titulo</Text>
        <Text style={styles.price}>$12.58</Text>

        <AntDesign
          style={styles.iconn}
          name="rightcircleo"
          size={24}
          color="#153E73"
        />
      </View>

      <View style={styles.container}>
        <Image source={require("../images/6.png")} style={styles.img} />
        <AntDesign style={styles.icon} name="hearto" size={20} color="black" />
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.subtitle}>Sub titulo</Text>
        <Text style={styles.price}>$12.58</Text>
        <AntDesign
          style={styles.iconn}
          name="rightcircleo"
          size={24}
          color="#153E73"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 214,
    flexDirection: "row",
    backgroundColor: "#FBFBFB",
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
    top: 50,
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
    fontSize: 12,
    marginTop: 130,
    marginLeft: -150,
    color: "#515F65",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 150,
    marginLeft: -30,
    color: "#515F65",
  },
  price: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 170,
    marginLeft: -40,
    color: "#4A69FF",
  },
  icon: {
    marginTop: 1,
    marginLeft: 50,
  },
  iconn: {
    marginTop: 160,
    marginLeft: 80,
  },
});
export default Product;
