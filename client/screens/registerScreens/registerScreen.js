import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../../res/colors";

function registerScreen({ navigation }) {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.regform}>
        <TextInput
          style={styles.textinput}
          mode="flat"
          placeholder="First Name"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Last Name"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "lastname")}
          value={state.lastname}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Register2")}
        >
          Continuar
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
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

export default registerScreen;
