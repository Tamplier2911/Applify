import { all, call } from "redux-saga/effects";

// sagas
import { authSagas } from "./auth/auth.sagas";
import { messagesSagas } from "./messages/messages.sagas";
import { feedbacksSagas } from "./feedbacks/feedbacks.sagas";
import { usersSagas } from "./users/users.sagas";
import { blogsSagas } from "./blogs/blogs.sagas";

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(messagesSagas),
    call(feedbacksSagas),
    call(usersSagas),
    call(blogsSagas)
  ]);
}
