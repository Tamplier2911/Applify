import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// error filter
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

// transform array to object
import transformArrayToObject from "../../utils/DataTransformations/transformArrayToObject";

// confirmation
import confirmation from "../../utils/Confirmation/confirmation";

// messages actions
import {
  sendMessageSuccess,
  sendMessageFailure,
  deleteMessageSuccess,
  deleteMessageFailure,
  loadMessagesStart,
  loadMessagesSuccess,
  loadMessagesFailure
} from "./messages.actions";

// modal actions
import { openModal } from "../modal/modal.actions";

// messages types
import messagesTypes from "./messages.types";

const {
  SEND_MESSAGE_START,
  DELETE_MESSAGE_START,
  LOAD_MESSAGES_START
} = messagesTypes;

export function* sendMessage({ payload }) {
  const { name, email, message } = payload;
  try {
    const res = yield axios({
      method: "POST",
      url: "/api/v1/messages",
      data: {
        name: name,
        email: email,
        message: message
      }
    });
    yield put(sendMessageSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Your message was successfully sent!"
        })
      );
    }
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(sendMessageFailure(content));
  }
}

export function* deleteMessage({ payload }) {
  if (confirmation("Are you sure, that you want to delete a message?")) {
    try {
      const res = yield axios({
        method: "DELETE",
        url: `/api/v1/messages/${payload}`
      });
      yield put(deleteMessageSuccess());
      if (successfulResponse(res)) {
        yield put(
          openModal({
            header: "Success!",
            content: "Message was successfully deleted!"
          })
        );
      }
      yield put(loadMessagesStart());
    } catch (error) {
      const { header, content } = getErrorMessage(error);
      yield put(openModal({ header, content }));
      yield put(deleteMessageFailure(content));
    }
  }
}

export function* loadMessages() {
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/messages"
    });
    const transformedData = transformArrayToObject(res.data.data.data);
    yield put(loadMessagesSuccess(transformedData));
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(loadMessagesFailure(content));
  }
}

export function* onSendMessageStart() {
  yield takeLatest(SEND_MESSAGE_START, sendMessage);
}

export function* onDeleteMessageStart() {
  yield takeLatest(DELETE_MESSAGE_START, deleteMessage);
}

export function* onLoadMessagesStart() {
  yield takeLatest(LOAD_MESSAGES_START, loadMessages);
}

export function* messagesSagas() {
  yield all([
    call(onSendMessageStart),
    call(onDeleteMessageStart),
    call(onLoadMessagesStart)
  ]);
}
