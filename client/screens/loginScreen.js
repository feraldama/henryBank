import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../res";
import { useState } from "react";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "../assets/logo2.png";
const { width: WIDTH } = Dimensions.get("window");

export const loginScreen = ({ navigation }) => {
  const [passHidden, setPassHidden] = useState(true);

  const handlePassVisibility = () => {
    setPassHidden(!passHidden);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.image} />
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

          <TouchableOpacity
            style={styles.btnEye}
            onPress={handlePassVisibility}
          >
            <Icon
              name={"ios-eye-outline"}
              size={26}
              color={"rgba(255,255,255,0.7"}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            style={styles.btn}
            mode="contained"
            title="Register"
            onPress={() => {
              navigation.navigate("Consolidated");
            }}
          >
            Log In
          </Button>
        </View>
        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={{ color: "#fff" }}>
            Don't have an account? Register now!
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    /* marginBottom: 0, */
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  /* inputContainer: {
    marginTop: 0,
  }, */
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
    marginVertical: 4,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btn: {
    margin: 15,
    width: 150,
    height: 40,
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
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 92,
  },
  registerLink: {
    marginTop: 50,
  },
});
