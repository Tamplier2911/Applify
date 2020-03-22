import messagesTypes from "./messages.types";

const {
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  LOAD_MESSAGES_START,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  CLEAN_UP_MESSAGES_FROM_STATE
} = messagesTypes;

export const sendMessageStart = message => ({
  type: SEND_MESSAGE_START,
  payload: message
});

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS
});

export const sendMessageFailure = errorMessage => ({
  type: SEND_MESSAGE_FAILURE,
  payload: errorMessage
});

export const deleteMessageStart = messageId => ({
  type: DELETE_MESSAGE_START,
  payload: messageId
});

export const deleteMessageSuccess = () => ({
  type: DELETE_MESSAGE_SUCCESS
});

export const deleteMessageFailure = errorMessage => ({
  type: DELETE_MESSAGE_FAILURE,
  payload: errorMessage
});

export const loadMessagesStart = () => ({
  type: LOAD_MESSAGES_START
});

export const loadMessagesSuccess = messages => ({
  type: LOAD_MESSAGES_SUCCESS,
  payload: messages
});

export const loadMessagesFailure = errorMessage => ({
  type: LOAD_MESSAGES_FAILURE,
  payload: errorMessage
});

export const cleanUpMessagesFromState = () => ({
  type: CLEAN_UP_MESSAGES_FROM_STATE
});
