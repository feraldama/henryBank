import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../res/";
import { connect } from "react-redux";
import { saveRegisterData } from "../../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";

export const registerScreen4 = ({ navigation }) => {
  const register = useSelector((state) => state.user.registerData);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    password: "",
    rePassword: "",
    street: register.street,
    location: register.location,
    country: register.country,
    province: register.province,
    docType: register.docType,
    docNumber: register.docNumber,
    birthday: register.birthday,
    phone: register.phone,
    name: register.name,
    lastName: register.lastName,
    email: register.email,
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const passAuth = () => {
    if (state.password.length < 8)
      return Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 caracteres"
      );
    if (state.password !== state.rePassword)
      return Alert.alert("Error", "Las contraseñas deben coincidir");
    return (
      dispatch(saveRegisterData(state, 0)), navigation.navigate("VerifyEmail")
    );
  };
  return (
    <ImageBackground
      source={require("../../assets/1.png")}
      style={styles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.regform}>
          <TextInput
            style={styles.textinput}
            placeholder="Contraseña"
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "password")}
            value={state.password}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "rePassword")}
            value={state.rePassword}
          />
          <TouchableOpacity style={styles.longButton} onPress={passAuth}>
            <Text style={{ fontSize: 20, color: "black" }}>Terminar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

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
    // backgroundColor: colors.primary,
    alignSelf: "stretch",
  },
  textinput: {
    alignSelf: "stretch",
    marginBottom: 50,
    backgroundColor: colors.white,
  },
  picker: {
    marginBottom: 50,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 30,
  },
  longButton: {
    width: "100%",
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

//export default connect(null, {})(registerScreen4);
