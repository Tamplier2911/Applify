import feedbackTypes from "./feedbacks.types";

const {
  SEND_FEEDBACK_START,
  SEND_FEEDBACK_SUCCESS,
  SEND_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_START,
  UPDATE_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_FAILURE,
  DELETE_FEEDBACK_START,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_FAILURE,
  LOAD_FEEDBACKS_START,
  LOAD_FEEDBACKS_SUCCESS,
  LOAD_FEEDBACKS_FAILURE,
  GET_MORE_FEEDS
} = feedbackTypes;

export const sendFeedbackStart = feedbackData => ({
  type: SEND_FEEDBACK_START,
  payload: feedbackData
});

export const sendFeedbackSuccess = () => ({
  type: SEND_FEEDBACK_SUCCESS
});

export const sendFeedbackFailure = errorMessage => ({
  type: SEND_FEEDBACK_FAILURE,
  payload: errorMessage
});

export const updateFeedbackStart = feedbackData => ({
  type: UPDATE_FEEDBACK_START,
  payload: feedbackData
});

export const updateFeedbackSuccess = () => ({
  type: UPDATE_FEEDBACK_SUCCESS
});

export const updateFeedbackFailure = errorMessage => ({
  type: UPDATE_FEEDBACK_FAILURE,
  payload: errorMessage
});

export const deleteFeedbackStart = feedbackId => ({
  type: DELETE_FEEDBACK_START,
  payload: feedbackId
});

export const deleteFeedbackSuccess = () => ({
  type: DELETE_FEEDBACK_SUCCESS
});

export const deleteFeedbackFailure = errorMessage => ({
  type: DELETE_FEEDBACK_FAILURE,
  payload: errorMessage
});

export const loadFeedbacksStart = () => ({
  type: LOAD_FEEDBACKS_START
});

export const loadFeedbacksSuccess = feedbacks => ({
  type: LOAD_FEEDBACKS_SUCCESS,
  payload: feedbacks
});

export const loadFeedbacksFailure = errorMessage => ({
  type: LOAD_FEEDBACKS_FAILURE,
  payload: errorMessage
});

export const getMoreFeeds = () => ({
  type: GET_MORE_FEEDS
});
