import { createSelector } from "reselect";

const selectLang = state => state.lang;

export const selectCurrentLanguage = createSelector(
  [selectLang],
  lang => lang.currentLanguage
);

export const selectLanguagePanelHidden = createSelector(
  [selectLang],
  lang => lang.languagePanelHidden
);
