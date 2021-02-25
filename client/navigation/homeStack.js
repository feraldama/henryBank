import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { colors } from "../res";
import { loginScreen } from "../screens/";
import {
  registerScreen,
  registerScreen2,
  registerScreen3,
  registerScreen4,
  confirmEmailScreen,
} from "../screens/registerScreens";
import ConsolidateScreen from "../screens/ConsolidateScreen";

const screens = {
  Login: {
    screen: loginScreen,
    navigationOptions: {
      headerShown: false,
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
  Consolidated: {
    screen: ConsolidateScreen,
    navigationOptions: { headerShown: false },
  },
  VerifyEmail: {
    screen: confirmEmailScreen,
    navigationOptions: { headerShown: false },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
