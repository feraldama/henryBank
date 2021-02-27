import { SAVE_REGISTER_DATA } from "../actions_types.js";
const initialState = {
  registerData: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      return {
        // registerData: [...state.registerData, action.payload],
        registerData: action.payload,
      };

    default:
      return state;
  }
}
