import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import userActionsTypes from "./user.types";

import {
  getCurrentUserDBSucced,
  getCurrentUserDBFailure,
  logoutFailure,
  logoutSuccess,
} from "./user.actions";

export function* getCurrentUserFromDB() {
  try {
    const user = yield axios.get("http://localhost:3000/login/currentUser");
    yield put(getCurrentUserDBSucced(user.data));
  } catch (error) {
    yield put(getCurrentUserDBFailure(error));
  }
}

export function* logoutUser() {
  try {
    const user = yield axios.get("http://localhost:3000/login/logout");
    yield put(logoutSuccess(user.data));
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* onGetCurrentUserStart() {
  yield takeLatest(
    userActionsTypes.GET_CURRENT_USER_FROM_DB_START,
    getCurrentUserFromDB
  );
}

export function* onLogoutStart() {
  yield takeLatest(userActionsTypes.LOGOUT_START, logoutUser);
}

export function* userSagas() {
  yield all([call(onGetCurrentUserStart), call(onLogoutStart)]);
}
