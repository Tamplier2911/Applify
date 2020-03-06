import blogsTypes from "./blogs.types";

const {
  SET_CURRENT_SET_NEXT,
  SET_CURRENT_SET_PREV,
  SET_CURRENT_SET_BY_SLOT
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
