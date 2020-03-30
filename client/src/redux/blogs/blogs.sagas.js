import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

// data transformation
import transformBlogsArrayToSlotsObject from "../../utils/DataTransformations/transformBlogsArrayToSlotsObject";

// error filter
import {
  getErrorMessage,
  successfulResponse
} from "../../utils/ErrorFilters/errorFilters";

// blogs actions
import {
  loadAllBlogpostsStart,
  loadAllBlogpostsSuccess,
  loadAllBlogpostsFailure,
  createOneBlogpostSuccess,
  createOneBlogpostFailure,
  updateOneBlogpostSuccess,
  updateOneBlogpostFailure,
  deleteOneBlogpostSuccess,
  deleteOneBlogpostFailure,
  likeOneBlogpostSuccess,
  likeOneBlogpostFailure,
  dislikeOneBlogpostSuccess,
  dislikeOneBlogpostFailure
} from "./blogs.actions";

// modal actions
import { openModal } from "../modal/modal.actions";

// blogs types
import blogsTypes from "./blogs.types";

const {
  LOAD_ALL_BLOGPOSTS_START,
  CREATE_ONE_BLOGPOST_START,
  UPDATE_ONE_BLOGPOST_START,
  DELETE_ONE_BLOGPOST_START,
  LIKE_ONE_BLOGPOST_START,
  DISLIKE_ONE_BLOGPOST_START
} = blogsTypes;

export function* loadAllBlogposts() {
  try {
    const res = yield axios({
      method: "GET",
      url: "/api/v1/blogposts"
    });
    const allBlogpostsArray = [...res.data.data.data];
    const allSets = transformBlogsArrayToSlotsObject(allBlogpostsArray);
    const currentSet = allSets[1];
    const currentSlot = 1;
    const allSlots = Object.keys(allSets).length;
    yield put(
      loadAllBlogpostsSuccess({
        allBlogposts: res.data.data.data,
        allSets: allSets,
        currentSet: currentSet,
        currentSlot: currentSlot,
        allSlots: allSlots
      })
    );
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(loadAllBlogpostsFailure(content));
  }
}

export function* createOneBlogpost({ payload }) {
  const { blogTitle, blogTheme, blogContent, blogImage } = payload;
  const form = new FormData();

  // fill up multipart/formdata
  if (blogTitle) form.append("title", blogTitle);
  if (blogTheme) form.append("theme", blogTheme);
  if (blogContent) form.append("content", blogContent);
  if (blogImage) form.append("image", blogImage);

  try {
    const res = yield axios({
      method: "POST",
      url: "/api/v1/blogposts",
      data: form
    });
    yield put(createOneBlogpostSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Post was successfully created."
        })
      );
    }
    yield put(loadAllBlogpostsStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(createOneBlogpostFailure(content));
  }
}

export function* updateOneBlogpost({ payload }) {
  const { blogTitle, blogTheme, blogContent, _id } = payload;
  try {
    const res = yield axios({
      method: "PATCH",
      url: `/api/v1/blogposts/${_id}`,
      data: {
        title: blogTitle,
        theme: blogTheme,
        content: blogContent
      }
    });
    yield put(updateOneBlogpostSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Post was successfully updated."
        })
      );
    }
    yield put(loadAllBlogpostsStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(updateOneBlogpostFailure(content));
  }
}

export function* deleteOneBlogpost({ payload }) {
  try {
    const res = yield axios({
      method: "DELETE",
      url: `/api/v1/blogposts/${payload}`
    });
    yield put(deleteOneBlogpostSuccess());
    if (successfulResponse(res)) {
      yield put(
        openModal({
          header: "Success!",
          content: "Post was successfully deleted."
        })
      );
    }
    yield put(loadAllBlogpostsStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(deleteOneBlogpostFailure(content));
  }
}

export function* likeOneBlogpost({ payload }) {
  try {
    yield axios({
      method: "PATCH",
      url: `/api/v1/blogposts/like/${payload}`
    });
    yield put(likeOneBlogpostSuccess());
    // yield put(loadAllBlogpostsStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(likeOneBlogpostFailure(content));
  }
}

export function* dislikeOneBlogpost({ payload }) {
  try {
    yield axios({
      method: "PATCH",
      url: `/api/v1/blogposts/dislike/${payload}`
    });
    yield put(dislikeOneBlogpostSuccess());
    // yield put(loadAllBlogpostsStart());
  } catch (error) {
    const { header, content } = getErrorMessage(error);
    yield put(openModal({ header, content }));
    yield put(dislikeOneBlogpostFailure(content));
  }
}

export function* onLoadAllBlogpostsStart() {
  yield takeLatest(LOAD_ALL_BLOGPOSTS_START, loadAllBlogposts);
}

export function* onCreateOneBlogpostStart() {
  yield takeLatest(CREATE_ONE_BLOGPOST_START, createOneBlogpost);
}

export function* onUpdateOneBlogpostStart() {
  yield takeLatest(UPDATE_ONE_BLOGPOST_START, updateOneBlogpost);
}

export function* onDeleteOneBlogpostStart() {
  yield takeLatest(DELETE_ONE_BLOGPOST_START, deleteOneBlogpost);
}

export function* onLikeOneBlogpostStart() {
  yield takeLatest(LIKE_ONE_BLOGPOST_START, likeOneBlogpost);
}

export function* onDislikeOneBlogpostStart() {
  yield takeLatest(DISLIKE_ONE_BLOGPOST_START, dislikeOneBlogpost);
}

export function* blogsSagas() {
  yield all([
    call(onLoadAllBlogpostsStart),
    call(onCreateOneBlogpostStart),
    call(onUpdateOneBlogpostStart),
    call(onDeleteOneBlogpostStart),
    call(onLikeOneBlogpostStart),
    call(onDislikeOneBlogpostStart)
  ]);
}
