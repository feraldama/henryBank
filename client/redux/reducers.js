import { combineReducers } from "redux";
import login from "./login/reducer";
import user from "./user/reducer"; 
import transfer from "./transfer/reducer";

const rootReducer = combineReducers({
  login,
  user,
  transfer
});

export default rootReducer;
