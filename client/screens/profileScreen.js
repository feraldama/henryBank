import React from 'react';
import { colors } from '../res';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={styles.userName}>Francisco Prato</Text>
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity>
            <View style={styles.smallCircle}>
              <Icon name={'qr-code-outline'} size={40} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.largeCircle}>
              <Icon name={'person-circle-outline'} size={70} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.smallCircle}>
              <Icon name={'people-outline'} size={40} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.aliasContainer}>
          <Text style={styles.aliasLabel}>ALIAS</Text>
          <Text style={styles.aliasContent}>TEST.ALIAS.DEVBANK</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  largeCircle: {
    marginHorizontal: 20,
    backgroundColor: colors.secondary,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    backgroundColor: colors.secondary,
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstContainer: {
    height: 450,
    width: 375,
    marginTop: 35,
    alignItems: 'center',
    backgroundColor: colors.transpartentWhite,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  userName: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  aliasContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aliasLabel: {
    color: colors.transparentBlack,
    fontSize: 20,
  },
  aliasContent: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
  },
});

export default ProfileScreen;
