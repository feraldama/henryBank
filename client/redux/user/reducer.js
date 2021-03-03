import {
  SAVE_REGISTER_DATA,
  ACCOUNT_LOGIN,
  EMPTY_REDUX,
} from "../actions_types.js";
const initialState = {
  registerData: [],
  registerData2: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      return {
        // registerData: [...state.registerData, action.payload],
        registerData: action.payload,
      };

    case ACCOUNT_LOGIN:
      return {
        registerData: [...state.registerData, action.payload],
        // registerData: action.payload,
      };

    case EMPTY_REDUX:
      return {
        registerData: [],
      };

    default:
      return state;
  }
}
