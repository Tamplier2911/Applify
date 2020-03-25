import usersTypes from "./users.types";

const {
  LOAD_ALL_USERS_START,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAILURE,
  CREATE_ONE_USER_FAILURE,
  UPDATE_ONE_USER_FAILURE,
  DELETE_ONE_USER_FAILURE,
  CLEAN_UP_USERS_FROM_STATE
} = usersTypes;

const INITIAL_STATE = {
  allUsers: [],
  isLoading: false,
  errorMessage: null
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ALL_USERS_START:
      return { ...state, isLoading: true };
    case LOAD_ALL_USERS_SUCCESS:
      return { ...state, allUsers: action.payload, isLoading: false };
    case LOAD_ALL_USERS_FAILURE:
    case CREATE_ONE_USER_FAILURE:
    case UPDATE_ONE_USER_FAILURE:
    case DELETE_ONE_USER_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case CLEAN_UP_USERS_FROM_STATE:
      return { ...state, allUsers: [], isLoading: false, errorMessage: null };
    default:
      return state;
  }
};

export default usersReducer;
