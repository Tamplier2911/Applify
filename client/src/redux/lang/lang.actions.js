import langTypes from "./lang.types";

const {
  SET_LANGUAGE_ENG,
  SET_LANGUAGE_RUS,
  SET_LANGUAGE_UKR,
  TOGGLE_LANGUAGE_PANEL
} = langTypes;

export const setLanguageEng = () => ({
  type: SET_LANGUAGE_ENG
});

export const setLanguageRus = () => ({
  type: SET_LANGUAGE_RUS
});

export const setLanguageUkr = () => ({
  type: SET_LANGUAGE_UKR
});

export const toggleLanguagePanel = () => ({
  type: TOGGLE_LANGUAGE_PANEL
});
