import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "../../res/";
import { Button, TextInput } from "react-native-paper";

export const confirmEmailScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/1.png")}
      style={styles.image}
    >
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <Text style={styles.textStyle}>Confirme email</Text>
        </View>
        <TouchableOpacity
          style={styles.longButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>HOME</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: colors.primary,
  },
  secondContainer: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 15,
    height: 150,
    margin: 25,
  },
  textStyle: {
    color: colors.black,
    fontSize: 25,
    alignSelf: "center",
  },
  longButton: {
    alignSelf: "center",
    width: 200,
    height: 50,
    backgroundColor: "#77C5D5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
