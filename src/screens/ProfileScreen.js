import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../components/context";
export default function ProfileScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View>
      <Button
        title="Salir"
        onPress={() => {
          signOut();
        }}
      ></Button>
    </View>
  );
}
