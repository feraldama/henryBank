import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../res/";

export const confirmEmailScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Text style={styles.textStyle}>Confirme email</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  secondContainer: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
    borderRadius: 15,
    height: 150,
    margin: 25,
  },
  textStyle: {
    color: colors.white,
  },
});
