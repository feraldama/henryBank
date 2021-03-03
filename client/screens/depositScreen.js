import React from "react";
import { colors } from "../res";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

function DepositScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.generalSumLabel}>Recargar dinero</Text>
      <View style={styles.firstContainer}>
        <Text style={styles.generalDescription}>
          Usá este código siempre que quieras ingresar dinero a tu cuenta.
        </Text>
        <Text style={styles.generalDescription}>
          El monto mínimo es de $50.
        </Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>88333 44526</Text>
        </View>
        <Text style={styles.generalDescription}>
          Mostrale este código al cajero en RapiPago o PagoFacil.
        </Text>
        <TouchableOpacity style={styles.longButton} onPress={() => {}}>
          <Text style={styles.generalDescription}>Confirmar Recarga</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  firstContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: 350,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  generalSumLabel: {
    color: "#fff",
    fontSize: 25,
    paddingBottom: 30,
  },
  codeContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    // width: 350,
    // height: 500,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  codeText: {
    color: "#fff",
    fontSize: 25,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 15,
    paddingTop: 15,
  },
  generalDescription: {
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  longButton: {
    marginTop: 70,
    width: 250,
    height: 50,
    backgroundColor: "#77C5D5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default DepositScreen;
