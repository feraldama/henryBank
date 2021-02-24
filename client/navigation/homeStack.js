import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import "../res/colors";

import homeScreen from "../screens/homeScreen";
import loginScreen from "../screens/loginScreen";
import registerScreen from "../screens/registerScreens/registerScreen";
import registerScreen2 from "../screens/registerScreens/registerScreen2";
import registerScreen3 from "../screens/registerScreens/registerScreen3";
import registerScreen4 from "../screens/registerScreens/registerScreen4";

const screens = {
  Home: {
    screen: homeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: loginScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
  Register: {
    screen: registerScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
  Register2: {
    screen: registerScreen2,
    navigationOptions: {
      title: "Personal data",
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
  Register3: {
    screen: registerScreen3,
    navigationOptions: {
      title: "Address information",
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
  Register4: {
    screen: registerScreen4,
    navigationOptions: {
      title: "Password",
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
