import React from "react";
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors } from "../res";

function MenuMoneyScreen(props) {
  return (
    <ImageBackground source={require("../assets/3.png")} style={styles.image}>
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <Text style={{ color: "#fff", fontSize: 25, paddingBottom: 30 }}>
            Transferencias
          </Text>
        </View>
        <View style={styles.thirdContainer}>
          <View style={styles.secondButtonContainer}>
            <TouchableOpacity
              style={styles.longButton}
              onPress={() => {
                props.navigation.navigate("SendMoney2");
              }}
            >
              <Text style={styles.options}>No inscritos Henrybank</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.longButton}
              onPress={() => {
                props.navigation.navigate("Contacts");
              }}
            >
              <Text style={styles.options}>Propios e inscritos Henrybank</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.longButton}
              onPress={() => alert("En desarrollo")}
            >
              <Text style={styles.options}>Inscritos de otros bancos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: colors.primary,
    flex: 1,
    alignSelf: "stretch",
  },

  options: {
    fontSize: 20,
    alignSelf: "center",
  },

  secondContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "#fff",
    height: 140,
    // backgroundColor: colors.secondary,
  },

  thirdContainer: {
    flex: 0.9,
    justifyContent: "space-evenly",
  },

  secondButtonContainer: {
    alignItems: "center",
    padding: 10,
    height: 400,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  longButton: {
    width: 310,
    height: 70,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    marginTop: 40,
    borderRadius: 10,
    padding: 20,
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

export default MenuMoneyScreen;
