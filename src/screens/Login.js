import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ToastAndroid } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [text, onChangeText] = React.useState("User Name");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textt}>Hello!</Text>
        <Text style={{ color: "#4A1192" }}>
          Loren ipsum dolor dit amet conseteur
        </Text>
      </View>

      <View>
        <View>
          <TextInput
            placeholder={"Usermane"}
            onChangeText={onChangeText}
            style={styles.inputt}
          ></TextInput>

          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>
        </View>
      </View>

      <Text
        style={{
          marginLeft: 180,
          color: "#757575",
        }}
      >
        Forgot Password
      </Text>

      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        colors={["#4A1192", "#20D0C4"]}
        style={styles.button}
      >
        <Text style={styles.text}>
          {/* Sign in <AntDesign name="arrowright" size={15} color="white" /> */}
          Sign in
        </Text>
      </LinearGradient>

      <View
        style={{
          marginTop: 200,
        }}
      >
        <Text
          styles={{
            marginRight: 20,
          }}
        >
          Don't have an account?
          <Text
            style={{ color: "#4A1192" }}
            onPress={() => {
              ToastAndroid.show("Registrate mmg!", ToastAndroid.SHORT);
            }}
          >
            {" "}
            SIGN UP
          </Text>
        </Text>
      </View>

      {/* <View>
        <MaterialCommunityIcons
          style={{ marginTop: -90, marginLeft: 300 }}
          name="food"
          size={30}
          color="#20D0C4"
        />
        <MaterialCommunityIcons
          style={{ marginTop: -550 }}
          name="food-variant"
          size={30}
          color="#20D0C4"
        />
        <FontAwesome5
          style={{ marginTop: 350, marginLeft: 20 }}
          name="money-bill-wave"
          size={24}
          color="#4A1192"
        />
        <Entypo
          style={{ marginTop: -350, marginLeft: 300 }}
          name="location-pin"
          size={30}
          color="#4A1192"
        />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  textt: {
    color: "#4A69FF",
    fontSize: 42,
    fontFamily: "",
    textAlign: "center",
    marginTop: 200,
    fontWeight: "bold",
  },
  tituloo: {
    color: "#4A69FF",
    fontSize: 12,
    textAlign: "center",
  },
  inputt: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4A69FF",
    elevation: 1,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#20D0C4",
    elevation: 1,
  },
  button: {
    alignItems: "center",
    marginLeft: 180,
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    shadowColor: "#4A69FF",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default LoginScreen;
