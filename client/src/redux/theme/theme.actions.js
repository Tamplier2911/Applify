import themeTypes from "./theme.types";

const { SET_THEME_LIGHT, SET_THEME_DARK } = themeTypes;

export const setThemeLight = () => ({
  type: SET_THEME_LIGHT
});

export const setThemeDark = () => ({
  type: SET_THEME_DARK
});
