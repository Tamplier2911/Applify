import langTypes from "./lang.types";

const {
  SET_LANGUAGE_ENG,
  SET_LANGUAGE_RUS,
  SET_LANGUAGE_UKR,
  TOGGLE_LANGUAGE_PANEL
} = langTypes;

const INITIAL_STATE = {
  languagePanelHidden: true,
  currentLanguage: "eng"
};

const langReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE_ENG:
      return { ...state, currentLanguage: "eng", languagePanelHidden: true };
    case SET_LANGUAGE_RUS:
      return { ...state, currentLanguage: "rus", languagePanelHidden: true };
    case SET_LANGUAGE_UKR:
      return { ...state, currentLanguage: "ukr", languagePanelHidden: true };
    case TOGGLE_LANGUAGE_PANEL:
      return { ...state, languagePanelHidden: !state.languagePanelHidden };
    default:
      return state;
  }
};

export default langReducer;
