import { SAVE_REGISTER_DATA } from "../actions_types";
import axios from "axios";
import { useSelector } from "react-redux";

export const saveRegisterData = (data, finish) => (dispatch) => {
  if (finish == 0) {
    axios.post("http://192.168.0.27:8080/users", data);
    dispatch({ type: SAVE_REGISTER_DATA, payload: data });
  } else {
    dispatch({ type: SAVE_REGISTER_DATA, payload: data });
  }
};
