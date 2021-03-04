import React from "react";
import { View, Text, SectionList, Button, StyleSheet } from "react-native";
import { colors } from "../res";
const contacts = [
  {
    eMail: "primero@email.com",
    name: "Juan Carlos Ruso",
  },
  {
    eMail: "segundo@email.com",
    name: "Marcela Garcia",
  },
  {
    eMail: "tercero@email.com",
    name: "Tomas Morello",
  },
  {
    eMail: "cuarto@email.com",
    name: "Alejandro Ferreira",
  },
  {
    eMail: "cuarto@email.com",
    name: "Nicolas Ferruti",
  },
  {
    eMail: "cuarto@email.com",
    name: "Cecilia Puente",
  },
];

export const ContactsScreen = () => {
  var getData = () => {
    let contactsArr = [];
    let aCode = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar,
      };
      let currContacts = contacts.filter((item) => {
        return item.name[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.name.localeCompaer(b.name));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }
    return contactsArr;
  };
  console.log(getData());

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.header}> Tus Contactos</Text>
        <SectionList
          sections={getData()}
          ListFooterComponent={() => <Button title="Agregar Contacto" />}
          //Estructura de item => { index:2, nombre:"segundo"}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.contactNames}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.index}
          /* Estructura de cada sección:
        {data: [ {index:1, nombre: primero} , {index: 34, nombre:pablo}]}
        */
          renderSectionHeader={({ section }) => {
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",

    backgroundColor: colors.primary,
  },
  container: {
    marginTop: 35,
    width: 300,
  },
  header: {
    alignSelf: "center",
    fontSize: 35,
    color: colors.accent,
    marginBottom: 15,
  },
  row: {
    alignSelf: "center",
    margin: 7,
  },
  contactNames: {
    fontSize: 20,
    color: colors.secondary,
  },
  sectionHeader: {},
});
