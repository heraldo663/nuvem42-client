import { all, takeLatest } from "redux-saga/effects";

import { login } from "./auth/login";
import { register } from "./auth/register";

import { Types as LoginTypes } from "../ducks/auth/login";
import { Types as RegisterTypes } from "../ducks/auth/register";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.ADD_REQUEST, login)]);
}
