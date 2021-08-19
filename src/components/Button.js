import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
const buttonHeight = buttonWidth - 10;

export default ({ onPress, text, size }) => {
  const buttonStyles = [styles.button];
  if (size == "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: "#fff",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: buttonHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonWidth,
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    alignContent: "center",
    paddingLeft: "20%",
  },
});
