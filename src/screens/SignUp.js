import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ToastAndroid } from "react-native";

const SignUpScreen = () => {
  const [userFullname, onChangeFullNameText] = React.useState("userFullName");
  const [userPassword, onChangePasswordText] = React.useState("userPassword");
  const [userEmail, onChangeEmailText] = React.useState("userEmail");

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
            secureTextEntry={true}
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

          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            colors={["#4A1192", "#20D0C4"]}
            style={styles.button}
            onPressAction={() => console.log("Bobo B")}
          >
            <Text style={styles.signUpButton}>Sign in</Text>
          </LinearGradient>
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
    fontFamily: "",
    textAlign: "center",
    marginTop: 200,
    fontWeight: "bold",
  },
  headerSecondaryText: {
    color: "#4A1192",
    fontSize: 15,
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
export default SignUpScreen;
