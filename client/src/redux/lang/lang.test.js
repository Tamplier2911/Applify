// reducer
import langReducer from "./lang.reducer";

// actions
import {
  toggleLanguagePanel,
  setLanguageEng,
  setLanguageRus,
  setLanguageUkr,
} from "./lang.actions";

// types
import langTypes from "./lang.types";

const {
  TOGGLE_LANGUAGE_PANEL,
  SET_LANGUAGE_ENG,
  SET_LANGUAGE_RUS,
  SET_LANGUAGE_UKR,
} = langTypes;

const defaultState = { languagePanelHidden: true, currentLanguage: "eng" };

describe("lang.actions", () => {
  it("returns an action object with expected type", () => {
    const actionObject = toggleLanguagePanel();
    expect(actionObject.type).toEqual(TOGGLE_LANGUAGE_PANEL);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setLanguageEng();
    expect(actionObject.type).toEqual(SET_LANGUAGE_ENG);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setLanguageRus();
    expect(actionObject.type).toEqual(SET_LANGUAGE_RUS);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setLanguageUkr();
    expect(actionObject.type).toEqual(SET_LANGUAGE_UKR);
  });
});

describe("lang.reducer", () => {
  it("returns default state if no action type matched", () => {
    const state = langReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  it("perform changes to state depends on action type", () => {
    const state = langReducer(defaultState, toggleLanguagePanel());
    expect(state.languagePanelHidden).toBe(false);
  });

  it("perform changes to state depends on action type", () => {
    const state = langReducer(defaultState, setLanguageEng());
    expect(state.currentLanguage).toBe("eng");
  });

  it("perform changes to state depends on action type", () => {
    const state = langReducer(defaultState, setLanguageRus());
    expect(state.currentLanguage).toBe("rus");
  });

  it("perform changes to state depends on action type", () => {
    const state = langReducer(defaultState, setLanguageUkr());
    expect(state.currentLanguage).toBe("ukr");
  });
});
