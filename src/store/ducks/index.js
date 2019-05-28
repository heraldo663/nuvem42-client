import { combineReducers } from "redux";
import login from "./auth/login";
import register from "./auth/register";

export default combineReducers({
  login,
  register
});
