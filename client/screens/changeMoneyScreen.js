import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {obtenerDivisaAccion} from '../redux/divisa';
import { View, Text, StyleSheet } from "react-native";
import { Headline, Paragraph,TextInput, Button, Snackbar, Dialog, Portal, } from 'react-native-paper';



const changeMoneyScreen = ({ changeScreen }) => {
  const [select, setSelect] = useState(0);
  const [monto, setMonto] = useState("");
  const [visible, setVisible] = useState();
  const [visible1, setVisible1] = useState();
  const [visible2, setVisible2] = useState();
  const [visible3, setVisible3] = useState();

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.login.loginUser);

  const updateSelected = (select) => {
    setSelect(select);
  };

  const data = {
    type: select === 0 ? "compra" : "venta",
    monto,
    // email: email,
  };

  const onSubmit = () => {
    if (monto === "") {
      setVisible1(true);
    } else if (loginUser.accounts[select].balance >= monto) {
      setVisible2(true);
    } else {
      setVisible2(true);
    }
  };

  const change = () => {
    dispatch(obtenerDivisaAccion(data));
    setVisible2(false);
    setVisible3(true);
  };

  return (
    <View style={styles.mainContainer}>
      <Portal>
        <Dialog
          visible={visible2}
          onDismiss={() => {
            setVisible2(false);
          }}
        >
          <Dialog.Content>
            <Paragraph>{`¿Desea transferir ${select === 0 ? "$" : "US$"}${
              data.monto
            } a su cuenta en ${
              select === 0 ? "dolares" : "pesos"
            }?`}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setVisible2(false);
              }}
            >
              No
            </Button>
            <Button onPress={change}>Si</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Snackbar
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        action={{
          label: "Ok",
          onPress: () => {},
        }}
      >
        No tienes saldo suficiente
      </Snackbar>
      <Snackbar
        visible={visible1}
        onDismiss={() => {
          setVisible1(false);
        }}
        action={{
          label: "Ok",
          onPress: () => {},
        }}
      >
        Ingresa un monto
      </Snackbar>
      <Snackbar
        visible={visible3}
        onDismiss={() => {
          setVisible3(false);
        }}
      >
        Se ha realizado el cambio de moneda
      </Snackbar>
      <View style={styles.heading}>
        <Icon.Button
          name="arrow-left"
          size={25}
          color="black"
          backgroundColor="#FFFF"
          onPress={() => changeScreen("main")}
        />
        <Headline>Cambiar Dinero</Headline>
      </View>
      <View style></View>
      <View style>
        <TextInput
          label="Monto a cambiar"
          placeholder={`Ingrese monto en ${select === 0 ? "Pesos" : "Dolares"}`}
          keyboardType="numeric"
          mode="outlined"
          //value={amount}
          onChangeText={(text) => {
            setMonto(text);
          }}
          style={{ height: 40, width: 222 }}
        />
        <Button
          onPress={updateSelected}
          selectedIndex={select}
          buttons={["Pesos a Dolares", "Dolares a Pesos"]}
          containerStyle={{ height: 40, width: 222 }}
          selectedButtonStyle={{ backgroundColor: "#006A34" }}
        />
      </View>
      <View style>
        <Button onPress={onSubmit}></Button>
        <Paragraph style={{ fontWeight: "700" }}>Cambiar</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: colors.primary,
        flex: 1,
        alignSelf: 'stretch',
      },
  
      secondContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        color: '#fff',    
        height: 140,
        // backgroundColor: colors.secondary,
      },
    
      thirdContainer: {
        flex: 0.9,
        justifyContent: 'space-evenly',            
      },  
    
      secondButtonContainer: {
        alignItems: 'center',
        padding: 10,
        height: '100%',
        margin: 20,
        borderRadius: 10, 
      },
  
      general: {
        backgroundColor: "rgb(172, 232, 179)",
        width: 400,
        height: 210,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
      },
  
      generalT: {
        backgroundColor: "rgb(216, 168, 168)",
        width: 400,
        height: 210,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
      },
  
      generalSumContent: {
        color: "black",
        fontSize: 22,
      },
    
      generalSumLabel: {
        color: "gray",
        paddingBottom: 15,
      },
  
      longButton: {
        width: 220,
        height: 70,
        backgroundColor: '#77C5D5',
        justifyContent: 'space-evenly',
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
      },
});

export default changeMoneyScreen
