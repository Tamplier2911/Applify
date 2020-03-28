import authTypes from "./auth.types";
import blogsTypes from "../blogs/blogs.types";

const {
  SIGN_USER_UP_SUCCESS,
  SIGN_USER_UP_FAILURE,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  UPDATE_USER_DATA_FAILURE,
  UPDATE_USER_PASSWORD_FAILURE,
  USER_FORGOT_PASSWORD_FAILURE,
  USER_RESTORE_PASSWORD_FAILURE,
  FETCH_AUTH_OBJECT_SUCCESS,
  FETCH_AUTH_OBJECT_FAILURE
} = authTypes;

const { LIKE_ONE_BLOGPOST_LOCALLY, DISLIKE_ONE_BLOGPOST_LOCALLY } = blogsTypes;

const INITIAL_STATE = {
  userObject: {
    id: "",
    name: "",
    email: "",
    photo: "",
    about: "",
    likedBlogposts: []
  },
  errorMessage: null,
  isLogged: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH_OBJECT_SUCCESS:
      return {
        ...state,
        userObject: action.payload ? action.payload : state.userObject,
        errorMessage: null,
        isLogged: action.payload ? true : false
      };
    case SIGN_USER_UP_SUCCESS:
    case LOG_USER_IN_SUCCESS:
    case LOG_USER_OUT_SUCCESS:
      return {
        ...state,
        userObject: {
          id: "",
          name: "",
          email: "",
          photo: "",
          about: "",
          likedBlogposts: []
        },
        errorMessage: null,
        isLogged: action.payload
      };
    case SIGN_USER_UP_FAILURE:
    case LOG_USER_IN_FAILURE:
    case LOG_USER_OUT_FAILURE:
    case UPDATE_USER_DATA_FAILURE:
    case UPDATE_USER_PASSWORD_FAILURE:
    case USER_FORGOT_PASSWORD_FAILURE:
    case USER_RESTORE_PASSWORD_FAILURE:
    case FETCH_AUTH_OBJECT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case LIKE_ONE_BLOGPOST_LOCALLY:
      return {
        ...state,
        userObject: {
          ...state.userObject,
          likedBlogposts: [
            ...state.userObject.likedBlogposts,
            action.payload.blogpostId
          ]
        }
      };
    case DISLIKE_ONE_BLOGPOST_LOCALLY:
      return {
        ...state,
        userObject: {
          ...state.userObject,
          likedBlogposts: state.userObject.likedBlogposts.filter(
            id => id !== action.payload.blogpostId
          )
        }
      };
    default:
      return state;
  }
};

export default authReducer;
