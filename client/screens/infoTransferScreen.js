import React, { useEffect, useState, useRef, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Icon } from "react-native-elements";
import moment from "moment-timezone";

function InfoTransferScreen(props) {
  const infotransfer = useSelector((state) => state.transfer.infoTransfer);

  const createPDF = async () => {
    const fecha = moment(infotransfer.createdAt).format("YYYY-MM-DD");
    filePath = await Print.printToFileAsync({
      // let filePath = await Print.printAsync({
      html: `<p style="text-align:center;"><img src="http://www.tecnovate.com.py/templates/g5_helium/custom/images/logo3Original.png?6052ae77" width="500" height="300"></p><h1 style="text-align:center;">DATOS DE TRANSFERENCIA</h1><h2>Fecha: ${fecha}</h2><h2>CVU Origen: ${infotransfer.origin}</h2><h2>CVU Destino: ${infotransfer.destination}</h2><h2>Monto: ${infotransfer.value}</h2><h2>Tipo: ${infotransfer.type}</h2><h2>Moneda: ${infotransfer.currency}</h2><h2>Descripción: ${infotransfer.description}</h2>`,
      width: 500,
      height: 700,
      base64: false,
    });
    // alert("PDF Generated", filePath.uri);
    onShare();
  };

  const onShare = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(filePath.uri);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require("../assets/2.png")} style={styles.image}>
        <View style={styles.secondContainer}>
          <Text style={{ color: "white", fontSize: 30 }}>
            Informacion Transacciones
          </Text>
        </View>
        <View style={styles.thirdContainer}>
          <View style={styles.secondButtonContainer}>
            <Text style={styles.generalSumContent}>
              Fecha:{" "}
              {infotransfer.createdAt && infotransfer.createdAt.slice(0, 10)}
            </Text>

            <Text style={styles.generalSumContent}>
              Moneda: {infotransfer?.currency}
            </Text>

            <Text style={styles.generalSumContent}>
              Origen: {infotransfer?.origin}
            </Text>

            <Text style={styles.generalSumContent}>
              Destino: {infotransfer?.destination}
            </Text>

            <Text style={styles.generalSumContent}>
              Movimiento: {infotransfer?.type}
            </Text>

            <Text style={styles.generalSumContent}>
              Valor: {infotransfer?.value}
            </Text>

            <Text style={styles.generalSumContent}>
              Descripcion: {infotransfer?.description}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => createPDF()}
          >
            <Icon name="document-text-outline" type="ionicon" />
            <Text style={styles.btnText}>PDF</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignSelf: "stretch",
  },

  thirdContainer: {
    flex: 0.9,
    justifyContent: "space-evenly",
    alignContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: -100,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  generalSumContent: {
    color: "#000",
    fontSize: 18,
    paddingBottom: 10,
  },

  generalSumLabel: {
    color: "#000",
    paddingBottom: 5,
    paddingRight: 15,
    fontSize: 16.5,
  },

  secondButtonContainer: {
    // alignItems: "right",
    paddingLeft: 55,
    paddingRight: 55,
    paddingTop: 40,
    paddingBottom: 40,
    // margin: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  secondContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 180,
  },

  squareButton: {
    width: 80,
    height: 80,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default InfoTransferScreen;
