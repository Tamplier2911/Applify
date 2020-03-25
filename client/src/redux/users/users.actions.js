import usersTypes from "./users.types";

const {
  LOAD_ALL_USERS_START,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAILURE,
  CREATE_ONE_USER_START,
  CREATE_ONE_USER_SUCCESS,
  CREATE_ONE_USER_FAILURE,
  UPDATE_ONE_USER_START,
  UPDATE_ONE_USER_SUCCESS,
  UPDATE_ONE_USER_FAILURE,
  DELETE_ONE_USER_START,
  DELETE_ONE_USER_SUCCESS,
  DELETE_ONE_USER_FAILURE,
  CLEAN_UP_USERS_FROM_STATE
} = usersTypes;

export const loadAllUsersStart = () => ({
  type: LOAD_ALL_USERS_START
});

export const loadAllUsersSucess = users => ({
  type: LOAD_ALL_USERS_SUCCESS,
  payload: users
});

export const loadAllUsersFailure = errorMessage => ({
  type: LOAD_ALL_USERS_FAILURE,
  payload: errorMessage
});

export const createOneUserStart = userCredentials => ({
  type: CREATE_ONE_USER_START,
  payload: userCredentials
});

export const createOneUserSuccess = () => ({
  type: CREATE_ONE_USER_SUCCESS
});

export const createOneUserFailure = errorMessage => ({
  type: CREATE_ONE_USER_FAILURE,
  payload: errorMessage
});

export const updateOneUserStart = userCredentials => ({
  type: UPDATE_ONE_USER_START,
  payload: userCredentials
});

export const updateOneUserSuccess = () => ({
  type: UPDATE_ONE_USER_SUCCESS
});

export const updateOneUserFailure = errorMessage => ({
  type: UPDATE_ONE_USER_FAILURE,
  payload: errorMessage
});

export const deleteOneUserStart = userId => ({
  type: DELETE_ONE_USER_START,
  payload: userId
});

export const deleteOneUserSuccess = () => ({
  type: DELETE_ONE_USER_SUCCESS
});

export const deleteOneUserFailure = errorMessage => ({
  type: DELETE_ONE_USER_FAILURE,
  payload: errorMessage
});

export const cleanUpUsersFromState = () => ({
  type: CLEAN_UP_USERS_FROM_STATE
});
