import { takeLatest, put, all, call, select } from "redux-saga/effects";
import axios from "axios";

// error filter
import {
  getErrorMessage,
  successfulResponse,
} from "../../utils/ErrorFilters/errorFilters";

import confirmation from "../../utils/Confirmation/confirmation";

// modifiers
import appendColorsToFeedbackObjects from "../../utils/DataTransformations/appendColorsToFeedbackObjects";

// feedbacks actions
import {
  sendFeedbackSuccess,
  sendFeedbackFailure,
  updateFeedbackSuccess,
  updateFeedbackFailure,
  deleteFeedbackSuccess,
  deleteFeedbackFailure,
  loadFeedbacksStart,
  loadFeedbacksSuccess,
  loadFeedbacksFailure,
} from "./feedbacks.actions";

// modal actions
import { openModal } from "../modal/modal.actions";

// feedbacks types
import feedbacksTypes from "./feedbacks.types";

const {
  SEND_FEEDBACK_START,
  UPDATE_FEEDBACK_START,
  DELETE_FEEDBACK_START,
  LOAD_FEEDBACKS_START,
} = feedbacksTypes;

export const getTheme = (state) => state.theme;

export function* sendFeedback({ payload }) {
  try {
    const { feedbackMessage, feedbackRating } = payload;
    const res = yield axios({
      method: "POST",
      url: "/api/v1/feedbacks",
      data: {
        feedback: feedbackMessage,
        rating: feedbackRating,
      },
    });
    yield put(sendFeedbackSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Feedback successfully sent!",
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

export function* updateFeedback({ payload }) {
  try {
    const { feedbackMessage, feedbackRating, feedbackId } = payload;
    const res = yield axios({
      method: "PATCH",
      url: `/api/v1/feedbacks/${feedbackId}`,
      data: {
        feedback: feedbackMessage,
        rating: feedbackRating,
      },
    });
    yield put(updateFeedbackSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Feedback was successfully updated.",
        })
      );
    }
    yield put(loadFeedbacksStart());
  } catch (error) {
    const { header, content } = getErrorMessage();
    yield put(openModal({ header, content }));
    yield put(updateFeedbackFailure(content));
  }
}

export function* deleteFeedback({ payload }) {
  if (confirmation("Are you sure, that you want to delete a feedback?")) {
    try {
      const res = yield axios({
        method: "DELETE",
        url: `/api/v1/feedbacks/${payload}`,
      });
      yield put(deleteFeedbackSuccess());
      if (successfulResponse(res)) {
        yield put(
          openModal({
            header: "Success!",
            content: "Feedback successfully deleted.",
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
}

export function* loadFeedbacks() {
  const { currentTheme } = yield select(getTheme);
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/feedbacks",
    });
    const feedbacks = appendColorsToFeedbackObjects(
      res.data.data.data,
      currentTheme
    );
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

export function* onUpdateFeedbackStart() {
  yield takeLatest(UPDATE_FEEDBACK_START, updateFeedback);
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
    call(onUpdateFeedbackStart),
    call(onDeleteFeedbackStart),
    call(onLoadFeedbacksStart),
  ]);
}
