import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import colors from "../res/colors";

function registerScreen4() {
  const [state, setState] = useState({
    password: "",
    rePassword: "",
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.regform}>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "password")}
          value={state.password}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Repeat password"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "rePassword")}
          value={state.rePassword}
        />

        <Button mode="contained" onPress={() => alert("Register finished!")}>
          Finish
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
    backgroundColor: colors.white,
  },
  picker: {
    marginBottom: 50,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 30,
  },
});

export default registerScreen4;
