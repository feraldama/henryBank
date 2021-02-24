import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import HomeStack from "./navigation/homeStack.js";
import store from "./redux/store.js";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <HomeStack />
    </ReduxProvider>
  );
}
