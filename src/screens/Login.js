import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../components/context";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
const LoginScreen = ({ navigation }) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const { signIn } = React.useContext(AuthContext);

  const loginHandle = (username, password) => {
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textt}>Bienvenido!</Text>
        <Text style={{ color: "#4A1192" }}>
          Aqui estan lo' mejore' foodtruck del pais!
        </Text>
      </View>

      <View>
        <View>
          <TextInput
            placeholder={"Username"}
            onChangeText={setUserName}
            style={styles.inputt}
          ></TextInput>

          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={setPassword}
            style={styles.input}
          ></TextInput>
        </View>
      </View>

      {/* <Text
        style={{
          marginLeft: 180,
          color: "#757575",
        }}
      >
        Forgot Password
      </Text> */}

      <TouchableOpacity
        onPress={() => {
          loginHandle(UserName, Password);
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          colors={["#4A1192", "#20D0C4"]}
          style={styles.button}
        >
          <Text style={styles.text}>
            {/* Sign in <AntDesign name="arrowright" size={15} color="white" /> */}
            Entrar
          </Text>
        </LinearGradient>
      </TouchableOpacity>
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
          No tienes una cuenta? No le pare',
          <Text
            style={{ color: "#4A1192" }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            registrate
          </Text>
        </Text>
      </View>

      <View>
        <MaterialCommunityIcons
          style={{ marginTop: -90, marginLeft: 300, opacity: 20 }}
          name="food"
          size={30}
          color="#20D0C4"
        />
        <MaterialCommunityIcons
          style={{ marginTop: -550, opacity: 20 }}
          name="food-variant"
          size={30}
          color="#20D0C4"
        />
        {/* <FontAwesome
          style={{ marginTop: 350, marginLeft: 20, opacity: 20 }}
          name="money-bill-wave"
          size={24}
          color="#4A1192"
        /> */}
        <Entypo
          style={{ marginTop: -350, marginLeft: 300, opacity: 10 }}
          name="location-pin"
          size={30}
          color="#4A1192"
        />
      </View>
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
    marginTop: 130,
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
    paddingLeft: 20,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#20D0C4",
    elevation: 1,
    paddingLeft: 20,
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
