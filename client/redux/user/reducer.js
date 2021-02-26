import { SAVE_REGISTER_DATA } from "../actions_types.js";
const initialState = {
  registerData: {
    name: "",
    lastname: "",
    email: "",
    password: "",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER_DATA:
      console.log("Reducer: ", action.payload);
      return {
        ...state,
        registerData: action.payload,
      };

    default:
      return state;
  }
}
