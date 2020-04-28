// reducer
import themeReducer from "./theme.reducer";

// actions
import { setThemeDark, setThemeLight } from "./theme.actions";

// types
import themeTypes from "./theme.types";

const { SET_THEME_DARK, SET_THEME_LIGHT } = themeTypes;

const defaultState = {
  currentTheme: "light",
};

describe("theme.actions", () => {
  it("returns an action object with expected type", () => {
    const actionObject = setThemeDark();
    expect(actionObject.type).toBe(SET_THEME_DARK);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setThemeLight();
    expect(actionObject.type).toBe(SET_THEME_LIGHT);
  });
});

describe("theme.reducer", () => {
  it("no action returns default state", () => {
    const state = themeReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  it("perform  changes to state depends on action type", () => {
    const state = themeReducer(defaultState, setThemeDark());
    expect(state).toEqual({
      currentTheme: "dark",
    });
  });

  it("perform changes to state depends on action type", () => {
    const state = themeReducer(defaultState, setThemeLight());
    expect(state).toEqual({
      currentTheme: "light",
    });
  });
});
