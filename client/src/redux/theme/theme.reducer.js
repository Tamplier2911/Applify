import themeTypes from "./theme.types";

const { SET_THEME_LIGHT, SET_THEME_DARK } = themeTypes;

const INITIAL_STATE = {
  currentTheme: "light"
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME_LIGHT:
      return { ...state, currentTheme: "light" };
    case SET_THEME_DARK:
      return { ...state, currentTheme: "dark" };
    default:
      return state;
  }
};

export default themeReducer;
