import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../res/";
import { saveRegisterData } from "../../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";

export const registerScreen3 = ({ navigation }) => {
  const register = useSelector((state) => state.user.registerData);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    street: "",
    location: "",
    country: "",
    province: "",
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.regform}>
        <TextInput
          style={styles.textinput}
          placeholder="Direccion"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "street")}
          value={state.address}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Country"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "country")}
          value={state.country}
        />
        <TextInput
          style={styles.textinput}
          placeholder="State"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "province")}
          value={state.state}
        />
        <TextInput
          style={styles.textinput}
          placeholder="City"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "location")}
          value={state.city}
        />
        <Button
          mode="contained"
          onPress={() => {
            dispatch(saveRegisterData(state, 1));
            navigation.navigate("Register4");
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
    paddingTop: 50,
    backgroundColor: colors.primary,
    alignSelf: "stretch",
  },
  textinput: {
    alignSelf: "stretch",
    marginBottom: 25,
    backgroundColor: colors.white,
  },
  picker: {
    marginBottom: 25,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 30,
  },
});
