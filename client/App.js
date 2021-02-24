import React from "react";
import colors from "./res/colors.js";
import { StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import HomeStack from "./navigation/homeStack.js";
import generateStore from "./store";

export default function App() {
  const store = generateStore();


  return (
    <ReduxProvider store={store}>
      <HomeStack />
    </ReduxProvider>
  );
}

