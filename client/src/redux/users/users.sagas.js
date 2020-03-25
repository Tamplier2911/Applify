import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// error filters
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

// users actions
import {
  loadAllUsersStart,
  loadAllUsersSucess,
  loadAllUsersFailure,
  createOneUserSuccess,
  createOneUserFailure,
  updateOneUserSuccess,
  updateOneUserFailure,
  deleteOneUserSuccess,
  deleteOneUserFailure
} from "./users.actions";

// IMPLEMENT cleanUpUsersFromState ON USER LOGOUT **************************

// modal actions
import { openModal } from "../modal/modal.actions";

// users tyoes
import usersTypes from "./users.types";

const {
  LOAD_ALL_USERS_START,
  CREATE_ONE_USER_START,
  UPDATE_ONE_USER_START,
  DELETE_ONE_USER_START
} = usersTypes;

export function* loadAllUsers() {
  yield console.log("load users from saga");
}

export function* createOneUser({ payload }) {
  yield console.log("create one user from saga", payload);
}

export function* updateOneUser({ payload }) {
  yield console.log("update one user from saga", payload);
}

export function* deleteOneUser({ payload }) {
  yield console.log("delete one user from sage", payload);
}

export function* onLoadUsersStart() {
  yield takeLatest(LOAD_ALL_USERS_START, loadAllUsers);
}

export function* onCeateOneUserStart() {
  yield takeLatest(CREATE_ONE_USER_START, createOneUser);
}

export function* onUpdateOneUserStart() {
  yield takeLatest(UPDATE_ONE_USER_START, updateOneUser);
}

export function* onDeleteOneUserStart() {
  yield takeLatest(DELETE_ONE_USER_START, deleteOneUser);
}

export function* usersSagas() {
  yield all([
    call(onLoadUsersStart),
    call(onCeateOneUserStart),
    call(onUpdateOneUserStart),
    call(onDeleteOneUserStart)
  ]);
}
