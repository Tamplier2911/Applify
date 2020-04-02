import projectsTypes from "./projects.types";

const {
  SET_CURRENT_PROJECT_FIRST,
  SET_CURRENT_PROJECT_SECOND,
  SET_CURRENT_PROJECT_THIRD,
  SET_CURRENT_PROJECT_FOURTH,
  SET_CURRENT_PROJECT_NEXT,
  SET_CURRENT_PROJECT_PREV,
  GET_CURRENT_PROJECT,
  SET_CURRENT_IMAGE_NEXT,
  SET_CURRENT_IMAGE_PREV
} = projectsTypes;

export const setCurrentProjectFirst = lang => ({
  type: SET_CURRENT_PROJECT_FIRST,
  payload: lang
});

export const setCurrentProjectSecond = lang => ({
  type: SET_CURRENT_PROJECT_SECOND,
  payload: lang
});

export const setCurrentProjectThird = lang => ({
  type: SET_CURRENT_PROJECT_THIRD,
  payload: lang
});

export const setCurrentProjectFourth = lang => ({
  type: SET_CURRENT_PROJECT_FOURTH,
  payload: lang
});

export const setCurrentProjectNext = lang => ({
  type: SET_CURRENT_PROJECT_NEXT,
  payload: lang
});

export const setCurrentProjectPrev = lang => ({
  type: SET_CURRENT_PROJECT_PREV,
  payload: lang
});

export const getCurrentProject = lang => ({
  type: GET_CURRENT_PROJECT,
  payload: lang
});

export const setCurrentImageNext = screenSize => ({
  type: SET_CURRENT_IMAGE_NEXT,
  payload: screenSize
});

export const setCurrentImagePrev = screenSize => ({
  type: SET_CURRENT_IMAGE_PREV,
  payload: screenSize
});
