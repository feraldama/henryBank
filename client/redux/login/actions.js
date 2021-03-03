import { LOGIN } from "../actions_types";
import axios from "axios";
import { useSelector } from "react-redux";

export const login = (state) => (dispatch) => {
  console.log("Entra en login ACTIONS: ", state);
  axios
    .post("http://192.168.0.10:8080/users/auth/login", state)
    .then((data) => {
      dispatch({ type: LOGIN, payload: data.data });
    });
};
