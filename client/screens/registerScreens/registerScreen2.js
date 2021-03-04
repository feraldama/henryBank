import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { saveRegisterData } from "../../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../res/";

export const registerScreen2 = ({ navigation }) => {
  const register = useSelector((state) => state.user.registerData);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    docType: "DNI",
    docNumber: "",
    birthday: "",
    phone: "",
    name: register.name,
    lastName: register.lastName,
    email: register.email,
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.regform}>
        <Picker
          selectedValue={state.idType}
          style={styles.picker}
          onValueChange={(itemValue) => handleChangeText(itemValue, "docType")}
        >
          <Picker.Item label="DNI" value="DNI" />
          <Picker.Item label="LE" value="LE" />
          <Picker.Item label="LC" value="LC" />
          <Picker.Item label="CI" value="CI" />
        </Picker>

        <TextInput
          style={styles.textinput}
          placeholder="ID Number"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "docNumber")}
          value={state.idNumber}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Birth Date"
          underlineColorAndroid={"transparent"}
          // keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "birthday")}
          value={state.bDate}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Phone number"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phoneNumber}
        />
        <Button
          mode="contained"
          onPress={() => {
            dispatch(saveRegisterData(state, 1));
            navigation.navigate("Register3");
          }}
        >
          Continuar
        </Button>
      </View>
    </TouchableWithoutFeedback>
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
