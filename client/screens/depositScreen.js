import React from 'react';
import { colors } from '../res';
import { View, TextInput, StyleSheet } from 'react-native';

function DepositScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <TextInput placeholder="Ingrese monto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: 350,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DepositScreen;
