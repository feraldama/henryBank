<<<<<<< HEAD
import React from 'react';
import { colors } from '../res';
import { View, Text, StyleSheet } from 'react-native';
=======
import React from "react";
import { colors } from "../res";
import { View, Text, StyleSheet } from "react-native";
>>>>>>> 93ee8ab1a05b325e19b9e6089fe05508b4588c1d

function SettingsScreens() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Text>This is the Settings Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center',
=======
    alignItems: "center",
    justifyContent: "center",
>>>>>>> 93ee8ab1a05b325e19b9e6089fe05508b4588c1d
  },
  secondContainer: {
    width: 250,
    height: 150,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default SettingsScreens;
