import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../res";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../assets/favicon.png";
const { width: WIDTH } = Dimensions.get("window");

export const LogIn = () => {
  const [passHidden, setPassHidden] = useState(true);

  const handlePassVisibility = () => {
    setPassHidden(!passHidden);
  };

  console.log(colors);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Henry Bank</Text>
      </View>

      <View styles={styles.inputContainer}>
        <Icon
          name={"ios-person-outline"}
          size={28}
          color={"rgba(255,255,255,0.7"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={"E-Mail"}
          placeholderTextColor={"rgba(255,255,255,0.7"}
          underlineColorAndroid="transparent"
        />
      </View>

      <View styles={styles.inputContainer}>
        {/* <Icon
          name={"ion-ios-lock-outline"}
          size={28}
          color={"rgba(255,255,255,0.7"}
          style={styles.inputIcon}
        /> */}
        <TextInput
          style={styles.input}
          placeholder={"Contraseña"}
          secureTextEntry={passHidden}
          placeholderTextColor={"rgba(255,255,255,0.7"}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.btnEye} onPress={handlePassVisibility}>
          <Icon
            name={"ios-eye-outline"}
            size={26}
            color={"rgba(255,255,255,0.7"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    marginVertical: 2,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    marginTop: "20",
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});
