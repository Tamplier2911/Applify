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
  // createOneUserSuccess,
  // createOneUserFailure,
  // updateOneUserSuccess,
  // updateOneUserFailure,
  deleteOneUserSuccess,
  deleteOneUserFailure
} from "./users.actions";

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
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/users"
    });
    const users = res.data.data.data;
    yield put(loadAllUsersSucess(users));
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(loadAllUsersFailure(content));
  }
}

export function* createOneUser({ payload }) {
  yield console.log("create one user from saga", payload);
  //   try {
  //     // destructure user data
  //     const {} = payload;
  //     const res = yield axios({
  //       method: "POST",
  //       url: "/api/v1/users",
  //       data: {} // inser user data
  //     });
  //     yield put(createOneUserSuccess());
  //     if (successfulResponse(res)) {
  //       yield put(
  //         openModal({
  //           header: "Success!",
  //           content: "New user was successfully created."
  //         })
  //       );
  //     }
  //     yield put(loadAllUsersSucess());
  //   } catch (error) {
  //     const { header, content } = getErrorMessage(error);
  //     yield put(openModal({ header, content }));
  //     yield put(createOneUserFailure(content));
  //   }
}

export function* updateOneUser({ payload }) {
  yield console.log("update one user from saga", payload);
  //   try {
  //     // destructure user data and ID
  //     const { id } = payload;
  //     const res = yield axios({
  //       method: "PATCH",
  //       url: `/api/v1/users/${id}`,
  //       data: {} // inser user data
  //     });
  //     yield put(updateOneUserSuccess());
  //     if (successfulResponse(res)) {
  //       yield put(
  //         openModal({
  //           header: "Success!",
  //           content: "User data was successfully updated."
  //         })
  //       );
  //     }
  //     yield put(loadAllUsersSucess());
  //   } catch (error) {
  //     const { header, content } = getErrorMessage(error);
  //     yield put(openModal({ header, content }));
  //     yield put(updateOneUserFailure(content));
  //   }
}

export function* deleteOneUser({ payload }) {
  yield console.log("delete one user from sage", payload);
  try {
    const res = yield axios({
      method: "DELETE",
      url: `/api/v1/users/${payload}`
    });
    yield put(deleteOneUserSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "User was successfully deleted."
        })
      );
    }
    yield put(loadAllUsersStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(deleteOneUserFailure(content));
  }
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
