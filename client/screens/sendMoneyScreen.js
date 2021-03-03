import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../res/colors";
import { Icon } from 'react-native-elements'

function SendMoneyScreen(props) {

  const dispatch = useDispatch(); // para la futura accion
  const [state, setState] = useState({
    type: "CAJA DE AHORRO",
    account: "",
    amount : "",
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Button onPress={() => {
            props.navigation.navigate('Home');
        }}>            
            <Text>Home</Text>
        </Button>
        <Text>Transferencias</Text>
        <Icon />
      </View>
      <View style={styles.regform}>
        <Picker
          selectedValue={state.idType}
          style={styles.picker}
          onValueChange={(itemValue) => handleChangeText(itemValue, "type")}
        >
          <Picker.Item label="CAJA DE AHORRO" value="CAJA DE AHORRO" />
          <Picker.Item label="CAJA DE AHORRO" value="CAJA DE AHORRO" />
        </Picker>

        <TextInput
          style={styles.textinput}
          placeholder="ID account"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "account")}
          value={state.account}
        />
        <TextInput
          style={styles.textinput}
          placeholder="$ Amount"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "amount")}
          value={state.amount}
        />
        <Button
          mode="contained"
          onPress={() => alert('Se envio la plata')}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    alignSelf: 'stretch',
  },
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
  secondContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: '#fff',    
    height: 120,
    backgroundColor: colors.secondary,
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

export default SendMoneyScreen;
