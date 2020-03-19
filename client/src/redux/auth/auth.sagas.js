import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// auth actions
import {
  signUserUpSuccess,
  signUserUpFailure,
  logUserInSuccess,
  logUserInFailure,
  logUserOutSuccess,
  logUserOutFailure,
  updateUserDataSuccess,
  updateUserDataFailure,
  updateUserPasswordSuccess,
  updateUserPasswordFailure,
  fetchAuthObjectStart,
  fetchAuthObjectSuccess,
  fetchAuthObjectFailure
} from "./auth.actions";

// modal actions
import { openModal } from "../modal/modal.actions";

import authTypes from "./auth.types";

// auth action types
const {
  SIGN_USER_UP_START,
  LOG_USER_IN_START,
  LOG_USER_OUT_START,
  UPDATE_USER_DATA_START,
  UPDATE_USER_PASSWORD_START,
  FETCH_AUTH_OBJECT_START
} = authTypes;

export function* signUserUp({ payload }) {
  try {
    yield axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        passwordConfirm: payload.passwordConfirm
      }
    });
    yield put(signUserUpSuccess(true));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(signUserUpFailure(message || error.message));
  }
}

export function* logUserIn({ payload }) {
  try {
    yield axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email: payload.email,
        password: payload.password
      }
    });
    yield put(logUserInSuccess(true));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(logUserInFailure(message || error.message));
  }
}

export function* logUserOut() {
  try {
    yield axios({
      method: "GET",
      url: "/api/v1/users/logout"
    });
    yield put(logUserOutSuccess(false));
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(logUserOutFailure(message || error.message));
  }
}

export function* updateUserData({ payload }) {
  const { profileName, profileEmail, profileImage, aboutMe } = payload;
  const form = new FormData();

  // fill up multipart/formdata
  if (profileName) form.append("name", profileName);
  if (profileEmail) form.append("email", profileEmail);
  if (profileImage) form.append("photo", profileImage);
  if (aboutMe) form.append("about", aboutMe);

  try {
    const res = yield axios({
      method: "PATCH",
      url: "/api/v1/users/updateMe",
      data: form
    });
    yield put(updateUserDataSuccess());
    if (res.data.status === "success") {
      yield put(
        openModal({
          header: "Success!",
          content: "Your personal data was successfully updated."
        })
      );
    }
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(updateUserDataFailure(message || error.message));
  }
}

export function* updateUserPassword({ payload }) {
  try {
    const res = yield axios({
      method: "PATCH",
      url: "/api/v1/users/updateMyPassword",
      data: {
        passwordCurrent: payload.currentPassword,
        newPassword: payload.newPassword,
        newPasswordConfirm: payload.newPasswordConfirm
      }
    });
    yield put(updateUserPasswordSuccess());
    if (res.data.status === "success") {
      yield put(
        openModal({
          header: "Success!",
          content: "Your password was successfully updated."
        })
      );
    }
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(updateUserPasswordFailure(message || error.message));
  }
}

export function* fetchAuthObject() {
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/users/getMe"
    });
    yield put(fetchAuthObjectSuccess(res.data.data.userObject));
  } catch (error) {
    const {
      statusText,
      data: { message }
    } = error.response;
    yield put(
      openModal({
        header: statusText || "Attention!",
        content: message || error.message
      })
    );
    yield put(fetchAuthObjectFailure(message || error.message));
  }
}

export function* onSignUserUp() {
  yield takeLatest(SIGN_USER_UP_START, signUserUp);
}

export function* onLogUserInStart() {
  yield takeLatest(LOG_USER_IN_START, logUserIn);
}

export function* onLogUserOutStart() {
  yield takeLatest(LOG_USER_OUT_START, logUserOut);
}

export function* onUpdateUserDataStart() {
  yield takeLatest(UPDATE_USER_DATA_START, updateUserData);
}

export function* onUpdateUserPasswordStart() {
  yield takeLatest(UPDATE_USER_PASSWORD_START, updateUserPassword);
}

export function* onFetchAuthObjectStart() {
  yield takeLatest(FETCH_AUTH_OBJECT_START, fetchAuthObject);
}

export function* authSagas() {
  yield all([
    call(onSignUserUp),
    call(onLogUserInStart),
    call(onLogUserOutStart),
    call(onUpdateUserDataStart),
    call(onUpdateUserPasswordStart),
    call(onFetchAuthObjectStart)
  ]);
}
