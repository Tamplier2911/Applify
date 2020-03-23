import feedbacksTypes from "./feedbacks.types";

const {
  SEND_FEEDBACK_FAILURE,
  DELETE_FEEDBACK_FAILURE,
  LOAD_FEEDBACKS_START,
  LOAD_FEEDBACKS_SUCCESS,
  LOAD_FEEDBACKS_FAILURE,
  GET_MORE_FEEDS
} = feedbacksTypes;

const INITIAL_STATE = {
  allFeedbacks: [],
  currentlyLoaded: [],
  totalLoaded: 0,
  isLoading: false,
  errorMessage: null
};

const feedbacksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FEEDBACKS_START:
      return { ...state, isLoading: true };
    case LOAD_FEEDBACKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allFeedbacks: action.payload,
        currentlyLoaded: action.payload.slice(0, 4),
        totalLoaded: action.payload.length
      };
    case GET_MORE_FEEDS:
      return {
        ...state,
        currentlyLoaded: [
          ...state.currentlyLoaded,
          ...state.allFeedbacks.splice(4, 4)
        ]
      };
    case LOAD_FEEDBACKS_FAILURE:
    case SEND_FEEDBACK_FAILURE:
    case DELETE_FEEDBACK_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default feedbacksReducer;
