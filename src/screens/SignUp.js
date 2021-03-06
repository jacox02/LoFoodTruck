import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ToastAndroid, TouchableOpacity } from "react-native";
import { AuthContext } from "../components/context";

const SignUpScreen = ({ navigation }) => {
  const [userFullname, onChangeFullNameText] = React.useState("userFullName");
  const [userPassword, onChangePasswordText] = React.useState("userPassword");
  const [userEmail, onChangeEmailText] = React.useState("userEmail");

  const { signUp } = React.useContext(AuthContext);

  const signUpHandle = async (username, useremail, password) => {
    await signUp(username, useremail, password).then(() => {
      setTimeout(navigation.navigate("Login"), 3000);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Registrate!</Text>
        <Text style={styles.headerSecondaryText}>
          Para disfrutar de los mejores restaurantes que forman parte de nuestra
          plataforma debes registrarte proporcionando la siguiente informacion
        </Text>
      </View>

      <View>
        <View>
          <TextInput
            placeholder={"Nombre completo"}
            onChangeText={onChangeFullNameText}
            style={styles.inputTexts}
          ></TextInput>

          <TextInput
            placeholder={"Correo"}
            onChangeText={onChangeEmailText}
            style={styles.inputTexts}
          ></TextInput>
          <TextInput
            placeholder={"Clave"}
            textContentType="password"
            secureTextEntry={true}
            onChangeText={onChangePasswordText}
            style={styles.inputTexts}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              signUpHandle(userFullname, userEmail, userPassword);
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              colors={["#4A1192", "#20D0C4"]}
              style={styles.button}
            >
              <Text style={styles.signUpButton}>Regitrarme</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  signUpButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  headerText: {
    color: "#4A69FF",
    fontSize: 42,
    textAlign: "center",
    marginTop: 70,
    fontWeight: "bold",
  },
  headerSecondaryText: {
    color: "#4A69FF",
    fontSize: 12,
    fontFamily: "",
    textAlign: "center",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "normal",
  },
  inputTexts: {
    height: 40,
    width: 300,
    margin: 12,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#4A69FF",
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
export default SignUpScreen;
