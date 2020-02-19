import projectsTypes from "./projects.types";

const {
  SET_CURRENT_PROJECT_FIRST,
  SET_CURRENT_PROJECT_SECOND,
  SET_CURRENT_PROJECT_THIRD,
  SET_CURRENT_PROJECT_FOURTH,
  SET_CURRENT_PROJECT_NEXT,
  SET_CURRENT_PROJECT_PREV,
  SET_CURRENT_IMAGE_NEXT,
  SET_CURRENT_IMAGE_PREV
} = projectsTypes;

export const setCurrentProjectFirst = () => ({
  type: SET_CURRENT_PROJECT_FIRST
});

export const setCurrentProjectSecond = () => ({
  type: SET_CURRENT_PROJECT_SECOND
});

export const setCurrentProjectThird = () => ({
  type: SET_CURRENT_PROJECT_THIRD
});

export const setCurrentProjectFourth = () => ({
  type: SET_CURRENT_PROJECT_FOURTH
});

export const setCurrentProjectNext = () => ({
  type: SET_CURRENT_PROJECT_NEXT
});

export const setCurrentProjectPrev = () => ({
  type: SET_CURRENT_PROJECT_PREV
});

export const setCurrentImageNext = () => ({
  type: SET_CURRENT_IMAGE_NEXT
});

export const setCurrentImagePrev = () => ({
  type: SET_CURRENT_IMAGE_PREV
});
