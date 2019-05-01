import { User } from "../types";
import { ADD_USER } from "./action";

const initialState = [{
  userName: "USER NAME",
  password: "PASSWWORD"
}];

function userReducer(state: any, action: any) {
  alert(action.type);

  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user]
    default:
      return state;
  }
}

export default userReducer;
