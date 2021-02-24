import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../res";

export const homeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo2.png")} style={styles.image} />
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Login
      </Button>
      <Button
        style={styles.btn}
        mode="contained"
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  btn: {
    margin: 15,
    width: 150,
    height: 40,
  },
});
