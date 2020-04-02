import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// error filters
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

// confirmation
import confirmation from "../../utils/Confirmation/confirmation";

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

// modal actions
import { openModal } from "../modal/modal.actions";

// users types
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
  const {
    userName,
    userEmail,
    userRole,
    userPassword,
    userPasswordConfirm
  } = payload;
  try {
    const res = yield axios({
      method: "POST",
      url: "/api/v1/users",
      data: {
        name: userName,
        email: userEmail,
        role: userRole,
        password: userPassword,
        passwordConfirm: userPasswordConfirm
      }
    });
    yield put(createOneUserSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "New user was successfully created."
        })
      );
    }
    yield put(loadAllUsersStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(createOneUserFailure(content));
  }
}

export function* updateOneUser({ payload }) {
  const { userName, userEmail, userRole, userAbout, _id } = payload;
  try {
    const res = yield axios({
      method: "PATCH",
      url: `/api/v1/users/${_id}`,
      data: {
        name: userName,
        email: userEmail,
        role: userRole,
        about: userAbout
      }
    });
    yield put(updateOneUserSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "User data was successfully updated."
        })
      );
    }
    yield put(loadAllUsersStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(updateOneUserFailure(content));
  }
}

export function* deleteOneUser({ payload }) {
  if (
    confirmation(
      "Are you sure, that you want to delete a user? There is no way back!"
    )
  ) {
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
