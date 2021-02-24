import React from "react";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TextComponent,
} from "react-native";

function ConsolidateScreen(props) {
  return (
    <View
      style={{
        // backgroundColor: "dodgerblue",
        flex: 1,
        alignSelf: "stretch",
        // flexDirection: "row",
        // justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          alignItems: "center",
          // backgroundColor: "dodgerblue",
          flex: 0.8,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ paddingBottom: 20, color: "#fff" }}>Hola, Luz</Text>
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button}
          >
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28 }}>$5,634.12</Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>
            Balance de mi cuenta
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.8, justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: 310,
            height: 200,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }}>General</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View style={{ alignItems: "center", paddingRight: 55 }}>
              <Text style={{ color: "gray", paddingBottom: 15 }}>Income</Text>
              <Text style={{ color: "black", fontSize: 22 }}>$ 2,334.12</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "gray", paddingBottom: 15 }}>Gastos</Text>
              <Text style={{ color: "black", fontSize: 22 }}>$ 1,153.15</Text>
            </View>
          </View>
          <Text style={{ color: "black", fontSize: 12 }}>
            1Dia 7Dias 30Dias 6Meses
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.9,
          // alignItems: "center",
          justifyContent: "space-evenly",
          // flexDirection: "row",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button2}
          >
            <Icon name="sc-telegram" type="evilicon" />
            <Text style={styles.txtbutton}>Transacciones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button2}
          >
            <Icon name="ios-american-football" type="ionicon" />
            <Text style={styles.txtbutton}>Estadisticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button2}
          >
            <Icon name="ios-american-football" type="ionicon" />
            <Text style={styles.txtbutton}>Mis Datos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button2}
          >
            <Icon name="ios-american-football" type="ionicon" />
            <Text style={styles.txtbutton}>Mis Productos</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button3}
          >
            <Icon name="ios-american-football" type="ionicon" />
            <Text>Recargar Dinero</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => console.log(state)}
            style={styles.button3}
          >
            <Icon name="ios-american-football" type="ionicon" />
            <Text>Mandar Dinero</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtbutton: {
    fontSize: 10,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button2: {
    width: 80,
    height: 80,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button3: {
    width: 160,
    height: 50,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ConsolidateScreen;
