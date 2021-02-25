import { SAVE_REGISTER_DATA } from "../actions_types";
import axios from "axios";
export const saveRegisterData = (data) => {
  data.password = "testwnreg32";
  axios.post("http://localhost:8080/users", data);
  return { type: SAVE_REGISTER_DATA, payload: data };
};
