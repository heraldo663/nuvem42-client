import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { Creators as LoginActions } from "../../ducks/auth/login";

export function* login(action) {
  console.log(action);

  try {
    const { data } = yield call(api.post, `/sessions`);
    yield put(LoginActions.addLoginSuccess(data));
  } catch (error) {
    yield put(LoginActions.addLoginFailure(error));
  }
}
