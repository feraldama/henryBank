import { SAVE_REGISTER_DATA } from "../actions_types";
import axios from "axios";

export const saveRegisterData = (data) => (dispatch) => {
  data.password = "testwnreg32";
  console.log("DATA EN ACTIONS: ", data);
  axios.post("http://192.168.0.10:8080/users", data);
  dispatch({ type: SAVE_REGISTER_DATA, payload: data });
};

// export const saveRegisterData = (data) => (dispatch) => {
//   data.password = "testwnreg32";
//   console.log("DATA EN ACTIONS: ", data);
//   axios.post("http://192.168.0.10:8080/users", data).then((datas) => {
//     dispatch({
//       type: SAVE_REGISTER_DATA,
//       payload: datas,
//     });
//   });
// };
