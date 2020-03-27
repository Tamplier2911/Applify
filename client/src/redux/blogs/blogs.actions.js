import blogsTypes from "./blogs.types";

const {
  SET_CURRENT_SET_NEXT,
  SET_CURRENT_SET_PREV,
  SET_CURRENT_SET_BY_SLOT,

  LOAD_ALL_BLOGPOSTS_START,
  LOAD_ALL_BLOGPOSTS_SUCCESS,
  LOAD_ALL_BLOGPOSTS_FAILURE,
  CREATE_ONE_BLOGPOST_START,
  CREATE_ONE_BLOGPOST_SUCCESS,
  CREATE_ONE_BLOGPOST_FAILURE,
  UPDATE_ONE_BLOGPOST_START,
  UPDATE_ONE_BLOGPOST_SUCCESS,
  UPDATE_ONE_BLOGPOST_FAILURE,
  DELETE_ONE_BLOGPOST_START,
  DELETE_ONE_BLOGPOST_SUCCESS,
  DELETE_ONE_BLOGPOST_FAILURE,
  LIKE_ONE_BLOGPOST_START,
  LIKE_ONE_BLOGPOST_SUCCESS,
  LIKE_ONE_BLOGPOST_FAILURE,
  DISLIKE_ONE_BLOGPOST_START,
  DISLIKE_ONE_BLOGPOST_SUCCESS,
  DISLIKE_ONE_BLOGPOST_FAILURE
} = blogsTypes;

export const setCurrentSetNext = () => ({
  type: SET_CURRENT_SET_NEXT
});

export const setCurrentSetPrev = () => ({
  type: SET_CURRENT_SET_PREV
});

export const setCurrentSetBySlot = slot => ({
  type: SET_CURRENT_SET_BY_SLOT,
  payload: slot
});

export const loadAllBlogpostsStart = () => ({
  type: LOAD_ALL_BLOGPOSTS_START
});

export const loadAllBlogpostsSuccess = allBlogposts => ({
  type: LOAD_ALL_BLOGPOSTS_SUCCESS,
  payload: allBlogposts
});

export const loadAllBlogpostsFailure = errorMessage => ({
  type: LOAD_ALL_BLOGPOSTS_FAILURE,
  payload: errorMessage
});

export const createOneBlogpostStart = blogpostData => ({
  type: CREATE_ONE_BLOGPOST_START,
  payload: blogpostData
});

export const createOneBlogpostSuccess = () => ({
  type: CREATE_ONE_BLOGPOST_SUCCESS
});

export const createOneBlogpostFailure = errorMessage => ({
  type: CREATE_ONE_BLOGPOST_FAILURE,
  payload: errorMessage
});

export const updateOneBlogpostStart = blogpostData => ({
  type: UPDATE_ONE_BLOGPOST_START,
  payload: blogpostData
});

export const updateOneBlogpostSuccess = () => ({
  type: UPDATE_ONE_BLOGPOST_SUCCESS
});

export const updateOneBlogpostFailure = errorMessage => ({
  type: UPDATE_ONE_BLOGPOST_FAILURE,
  payload: errorMessage
});

export const deleteOneBlogpostStart = blogpostId => ({
  type: DELETE_ONE_BLOGPOST_START,
  payload: blogpostId
});

export const deleteOneBlogpostSuccess = () => ({
  type: DELETE_ONE_BLOGPOST_SUCCESS
});

export const deleteOneBlogpostFailure = errorMessage => ({
  type: DELETE_ONE_BLOGPOST_FAILURE,
  payload: errorMessage
});

export const likeOneBlogpostStart = blogpostId => ({
  type: LIKE_ONE_BLOGPOST_START,
  payload: blogpostId
});

export const likeOneBlogpostSuccess = () => ({
  type: LIKE_ONE_BLOGPOST_SUCCESS
});

export const likeOneBlogpostFailure = errorMessage => ({
  type: LIKE_ONE_BLOGPOST_FAILURE,
  payload: errorMessage
});

export const dislikeOneBlogpostStart = blogpostId => ({
  type: DISLIKE_ONE_BLOGPOST_START,
  payload: blogpostId
});

export const dislikeOneBlogpostSuccess = () => ({
  type: DISLIKE_ONE_BLOGPOST_SUCCESS
});

export const dislikeOneBlogpostFailure = errorMessage => ({
  type: DISLIKE_ONE_BLOGPOST_FAILURE,
  payload: errorMessage
});
