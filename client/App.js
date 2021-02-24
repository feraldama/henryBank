import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import HomeStack from "./navigation/homeStack.js";
<<<<<<< HEAD
import store from "./redux/store";
=======
import store from "./redux/store.js";
>>>>>>> 1f1d2d43aafd28f900bc4f979e964f41e019fc58

export default function App() {
  return (
    <ReduxProvider store={store}>
      <HomeStack />
    </ReduxProvider>
  );
}
