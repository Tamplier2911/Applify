import messagesTypes from "./messages.types";

const {
  SEND_MESSAGE_FAILURE,
  DELETE_MESSAGE_FAILURE,
  LOAD_MESSAGES_START,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  CLEAN_UP_MESSAGES_FROM_STATE
} = messagesTypes;

const INITIAL_STATE = {
  allMessages: {},
  isLoading: false,
  errorMessage: null
};

const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MESSAGES_START:
      return { ...state, isLoading: true };
    case LOAD_MESSAGES_SUCCESS:
      return { ...state, allMessages: action.payload, isLoading: false };
    case LOAD_MESSAGES_FAILURE:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case SEND_MESSAGE_FAILURE:
    case DELETE_MESSAGE_FAILURE:
      return { ...state, errorMessage: action.payload };
    case CLEAN_UP_MESSAGES_FROM_STATE:
      return {
        ...state,
        allMessages: {},
        isLoading: false,
        errorMessage: null
      };
    default:
      return state;
  }
};

export default messagesReducer;
