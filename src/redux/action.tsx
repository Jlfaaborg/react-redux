import { User } from "../types";

export const LOGIN = "LOGIN";
export const ADD_USER = "ADD_USER";

export function addUser(user: User) {
  return {
    type: ADD_USER,
    user
  };
}
