<<<<<<< HEAD
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../res";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../assets/logo2.png";
const { width: WIDTH } = Dimensions.get("window");

function loginScreen(props) {
  const [passHidden, setPassHidden] = useState(true);

  const handlePassVisibility = () => {
    setPassHidden(!passHidden);
  };

  console.log(colors);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
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

      <Button
        style={styles.btn}
        mode="contained"
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Log In
      </Button>
    </View>
  );
=======
import React, {useState} from 'react';
import { StyleSheet, Text, View,
	 TouchableWithoutFeedback, Keyboard} 
	 from 'react-native';
import { Button, TextInput } from "react-native-paper";

function loginScreen(props) {

	const [state, setState] = useState({
		correo: "",
		clave: ""
	  });
	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	  };

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<View  style={styles.regform}>
		<TextInput
          style={styles.textinput}
          mode="flat"
          placeholder="Correo"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "correo")}
          value={state.correo} 
		/>
		
		<TextInput
          style={styles.textinput}
          placeholder="Clave"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "clave")}
          value={state.clave} 
		/>

		<Button mode="contained" onPress={() => alert("Login!")}>
			Login
		</Button>
		
		</View>
		</TouchableWithoutFeedback>
	);
>>>>>>> 1f1d2d43aafd28f900bc4f979e964f41e019fc58
}

const styles = StyleSheet.create({
    btntext: {
      color: "#fff",
      fontWeight: "bold",
    },
    button: {
      alignSelf: "stretch",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#59CBBD",
      marginTop: 30,
      borderRadius: 15,
    },
    regform: {
      flex: 1,
      padding: 30,
      paddingTop: 100,
      backgroundColor: colors.primary,
      alignSelf: "stretch",
    },
    textinput: {
      alignSelf: "stretch",
      marginBottom: 50,
    },
  });

export default loginScreen;

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
  btn: {
    margin: 15,
    width: 150,
    height: 40,
  },
});
