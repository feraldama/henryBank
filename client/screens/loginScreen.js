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
