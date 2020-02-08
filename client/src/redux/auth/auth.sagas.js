import { takeLatest, put, all, call } from "redux-saga/effects";
// import axios from "axios";

// import {} from './auth.actions'

import authTypes from "./auth.types";

const { FETCH_AUTH_OBJECT_START } = authTypes;

export function* fetchAuthObject() {
  yield console.log("Hey from auth saga.");
}

export function* onFetchAuthObjectStart() {
  yield takeLatest(FETCH_AUTH_OBJECT_START, fetchAuthObject);
}

export function* authSagas() {
  yield all([call(onFetchAuthObjectStart)]);
}
