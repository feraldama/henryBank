import React, { useEffect, useState, useRef, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import {  useDispatch, useSelector } from "react-redux";

function InfoTransferScreen(props){

    const infotransfer = useSelector((state) => state.transfer.infoTransfer);
    console.log(infotransfer.id)

    return(
        <View style={styles.mainContainer}>
            <ImageBackground source={require('../assets/2.png')} style={styles.image}>
                <View style={styles.secondContainer}>
                    <Text style={{ color: "white", fontSize: 30 }}>Informacion Transacciones</Text>
                </View>
            <View style={styles.thirdContainer}>
              <View style={styles.secondButtonContainer}>
                 
                <Text style={styles.generalSumContent}>
                    Fecha: { infotransfer.createdAt && infotransfer.createdAt.slice(0,10)}
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
            </View>

            </ImageBackground>
        </View>
    )
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
        marginTop: -50,
      },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
        alignItems: "right",
        padding: 55,
        margin: 5,
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
})

export default InfoTransferScreen;

