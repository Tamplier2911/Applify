import authTypes from "./auth.types";

const {
  SIGN_USER_UP_START,
  SIGN_USER_UP_SUCCESS,
  SIGN_USER_UP_FAILURE,
  LOG_USER_IN_START,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_START,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  FETCH_AUTH_OBJECT_START,
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE
} = authTypes;

export const signUserUpStart = userCredentials => ({
  type: SIGN_USER_UP_START,
  payload: userCredentials
});

export const signUserUpSuccess = loggedIn => ({
  type: SIGN_USER_UP_SUCCESS,
  payload: loggedIn
});

export const signUserUpFailure = errorMessage => ({
  type: SIGN_USER_UP_FAILURE,
  payload: errorMessage
});

export const logUserInStart = userCredentials => ({
  type: LOG_USER_IN_START,
  payload: userCredentials
});

export const logUserInSuccess = loggedIn => ({
  type: LOG_USER_IN_SUCCESS,
  payload: loggedIn
});

export const logUserInFailure = errorMessage => ({
  type: LOG_USER_IN_FAILURE,
  payload: errorMessage
});

export const logUserOutStart = () => ({
  type: LOG_USER_OUT_START
});

export const logUserOutSuccess = loggedIn => ({
  type: LOG_USER_OUT_SUCCESS,
  payload: loggedIn
});

export const logUserOutFailure = errorMessage => ({
  type: LOG_USER_OUT_FAILURE,
  payload: errorMessage
});

export const fetchAuthObjectStart = () => ({
  type: FETCH_AUTH_OBJECT_START
});

export const fetchAuthObjectSuccess = userObject => ({
  type: FETCH_AUTH_OBJECT_SUCCESS,
  payload: userObject
});

export const fetchAuthObjectFailure = errorMessage => ({
  type: FETCH_AUTH_OBJECT_FAILURE,
  payload: errorMessage
});
