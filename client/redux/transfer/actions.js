import { TRANSFER , INFO_TRANFER} from "../actions_types";
import { host } from "../varible_host";
import axios from "axios";

export const menuTransfer = (cvu) => (dispatch) => {
  axios
    .get(`http://${host}:8080/users/transfer/list-transfer/${cvu}`)
    .then((data) => {
      dispatch({
        type: TRANSFER,
        payload: data.data,
      });
    });
};

export const infoTransfer = (id) => (dispatch) => {
  axios
    .get(`http://${host}:8080/users/transfer/info-transfer/${id}`)
    .then((info) => {
      dispatch({
        type: INFO_TRANFER,
        payload: info.data,
      });
    })
}
