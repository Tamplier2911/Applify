import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// error filter
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

// modifiers
import appendColorsToFeedbackObjects from "../../utils/DataTransformations/appendColorsToFeedbackObjects";

// feedbacks actions
import {
  sendFeedbackSuccess,
  sendFeedbackFailure,
  deleteFeedbackSuccess,
  deleteFeedbackFailure,
  loadFeedbacksStart,
  loadFeedbacksSuccess,
  loadFeedbacksFailure
} from "./feedbacks.actions";

// modal actions
import { openModal } from "../modal/modal.actions";

// feedbacks types
import feedbacksTypes from "./feedbacks.types";

const {
  SEND_FEEDBACK_START,
  DELETE_FEEDBACK_START,
  LOAD_FEEDBACKS_START
} = feedbacksTypes;

export function* sendFeedback({ payload }) {
  try {
    const { feedbackMessage, feedbackRating } = payload;
    const res = yield axios({
      method: "POST",
      url: "/api/v1/feedbacks",
      data: {
        feedback: feedbackMessage,
        rating: feedbackRating
      }
    });
    yield put(sendFeedbackSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Feedback successfully sent!"
        })
      );
    }
    yield put(loadFeedbacksStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(sendFeedbackFailure(content));
  }
}

export function* deleteFeedback({ payload }) {
  try {
    const res = yield axios({
      method: "DELETE",
      url: `/api/v1/feedbacks/${payload}`
    });
    yield put(deleteFeedbackSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Feedback successfully deleted."
        })
      );
    }
    yield put(loadFeedbacksStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(deleteFeedbackFailure(content));
  }
}

export function* loadFeedbacks() {
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/feedbacks"
    });
    const feedbacks = appendColorsToFeedbackObjects(res.data.data.data);
    yield put(loadFeedbacksSuccess(feedbacks));
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(loadFeedbacksFailure(content));
  }
}

export function* onSendFeedbackStart() {
  yield takeLatest(SEND_FEEDBACK_START, sendFeedback);
}

export function* onDeleteFeedbackStart() {
  yield takeLatest(DELETE_FEEDBACK_START, deleteFeedback);
}

export function* onLoadFeedbacksStart() {
  yield takeLatest(LOAD_FEEDBACKS_START, loadFeedbacks);
}

export function* feedbacksSagas() {
  yield all([
    call(onSendFeedbackStart),
    call(onDeleteFeedbackStart),
    call(onLoadFeedbacksStart)
  ]);
}
