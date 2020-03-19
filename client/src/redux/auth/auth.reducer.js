import authTypes from "./auth.types";

const {
  SIGN_USER_UP_SUCCESS,
  SIGN_USER_UP_FAILURE,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE
} = authTypes;

const INITIAL_STATE = {
  userObject: {
    name: "",
    email: "",
    photo: "",
    about: ""
  },
  errorMessage: null,
  isLogged: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH_OBJECT_SUCCESS:
      let image = "";
      if (process.env.NODE_ENV === "production") {
        image = action.payload.photo
          ? `${process.env.REACT_APP_SERVE_IMAGE_PROD + action.payload.photo}`
          : "";
      } else {
        image = action.payload.photo
          ? `${process.env.REACT_APP_SERVE_IMAGE_DEV + action.payload.photo}`
          : "";
      }
      action.payload.photo = image;
      return {
        ...state,
        userObject: action.payload,
        errorMessage: null,
        isLogged: action.payload ? true : false
      };
    case SIGN_USER_UP_SUCCESS:
    case LOG_USER_IN_SUCCESS:
    case LOG_USER_OUT_SUCCESS:
      return {
        ...state,
        userObject: {
          name: "",
          email: "",
          photo: "",
          about: ""
        },
        errorMessage: null,
        isLogged: action.payload
      };
    case SIGN_USER_UP_FAILURE:
    case LOG_USER_IN_FAILURE:
    case LOG_USER_OUT_FAILURE:
    case FETCH_AUTH_OBJECT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
