import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  const [userId, setUserId] = useState(0);

  async function getUserInfo() {
    let getUserId = await AsyncStorage.getItem("userToken");
    setUserId(getUserId);
    console.log(getUserId.toString());
  }
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        colors={["#4A69FF", "#20D0C4"]}
        style={styles.button}
      >
        <Text
          style={styles.text}
          onPress={() => {
            signOut();
          }}
        >
          Cerrar sesion
        </Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
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
