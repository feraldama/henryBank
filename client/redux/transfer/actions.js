import {TRANSFER} from "../actions_types";
import { hoost } from "../varible_host";
import axios from "axios";

export const menuTransfer = (cvu)=>(dispatch)=>{
    axios
    .get(`http://${hoost}:8080/users/transfer/list-transfer/${cvu}`)
    .then(data=>{
        console.log(data)
        dispatch({
            type: TRANSFER,
            payload: data.data
        });
    })
}