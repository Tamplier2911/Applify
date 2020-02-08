import authTypes from "./auth.types";

const { FETCH_AUTH_OBJECT_SUCCESS, FETCH_AUTH_OBJECT_FAILURE } = authTypes;

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  isLogged: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH_OBJECT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        isLogged: action.payload ? true : false
      };
    case FETCH_AUTH_OBJECT_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
