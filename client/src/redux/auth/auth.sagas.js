import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// error filter
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

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
  userForgotPasswordSuccess,
  userForgotPasswordFailure,
  userRestorePasswordSuccess,
  userRestorePasswordFailure,
  fetchAuthObjectStart,
  fetchAuthObjectSuccess,
  fetchAuthObjectFailure
} from "./auth.actions";

// messages actions
import { cleanUpMessagesFromState } from "../messages/messages.actions";

// users actions
import { cleanUpUsersFromState } from "../users/users.actions";

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
  USER_FORGOT_PASSWORD_START,
  USER_RESTORE_PASSWORD_START,
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
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(signUserUpFailure(content));
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
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(logUserInFailure(content));
  }
}

export function* logUserOut() {
  try {
    yield axios({
      method: "GET",
      url: "/api/v1/users/logout"
    });
    yield put(logUserOutSuccess(false));
    yield put(cleanUpMessagesFromState());
    yield put(cleanUpUsersFromState());
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(logUserOutFailure(content));
  }
}

export function* updateUserData({ payload }) {
  const {
    profileName,
    profileEmail,
    profileImage,
    profileOldImage,
    aboutMe
  } = payload;
  const form = new FormData();

  // fill up multipart/formdata
  if (aboutMe) form.append("about", aboutMe);
  if (profileName) form.append("name", profileName);
  if (profileEmail) form.append("email", profileEmail);
  if (profileImage) {
    form.append("oldPhoto", profileOldImage);
    form.append("photo", profileImage);
  }
  try {
    const res = yield axios({
      method: "PATCH",
      url: "/api/v1/users/updateMe",
      data: form
    });
    yield put(updateUserDataSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Your personal data was successfully updated."
        })
      );
    }
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(updateUserDataFailure(content));
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
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Your password was successfully updated."
        })
      );
    }
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(updateUserPasswordFailure(content));
  }
}

export function* userForgotPassword({ payload }) {
  const { userEmail } = payload;
  try {
    const res = yield axios({
      method: "POST",
      url: "/api/v1/users/forgotPassword",
      data: {
        email: userEmail
      }
    });
    yield put(userForgotPasswordSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Instructions was sent to your email."
        })
      );
    }
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(userForgotPasswordFailure(content));
  }
}

export function* userRestorePassword({ payload }) {
  const { newPassword, newPasswordConfirm, resetToken } = payload;
  try {
    const res = yield axios({
      method: "PATCH",
      url: `/api/v1/users/resetPassword/${resetToken}`,
      data: {
        password: newPassword,
        passwordConfirm: newPasswordConfirm
      }
    });
    yield put(userRestorePasswordSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Your password was successfully restored!"
        })
      );
    }
    yield put(fetchAuthObjectStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(userRestorePasswordFailure(content));
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
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(fetchAuthObjectFailure(content));
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

export function* onUserForgotPasswordStart() {
  yield takeLatest(USER_FORGOT_PASSWORD_START, userForgotPassword);
}

export function* onUserRestorePasswordStart() {
  yield takeLatest(USER_RESTORE_PASSWORD_START, userRestorePassword);
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
    call(onUserForgotPasswordStart),
    call(onUserRestorePasswordStart),
    call(onFetchAuthObjectStart)
  ]);
}
