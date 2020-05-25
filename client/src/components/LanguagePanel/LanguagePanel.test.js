import React from "react";

// component
import LanguagePanel from "./LanguagePanel";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<LanguagePanel />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: false,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<LanguagePanel store={store} />);
  });

  it("renders without an error", () => {
    const languagePanel = findByTestAttr(wrapper, "language-panel");
    expect(languagePanel.length).toBe(1);
  });

  it("do not render langauges if pannel is hidden", () => {
    const initialStore = {
      lang: {
        languagePanelHidden: true,
        currentLanguage: "eng",
      },
    };
    const store = storeFactory(initialStore);
    wrapper = setShallowC(<LanguagePanel store={store} />);
    const languagePanelLanguages = findByTestAttr(
      wrapper,
      "language-panel-languages"
    );
    expect(languagePanelLanguages.length).toBe(0);
  });

  it("set currentLanguage to 'eng' when setLanguageEng is clicked", () => {
    const languagePanelLangEng = findByTestAttr(
      wrapper,
      "language-panel-lang-eng"
    );
    expect(languagePanelLangEng.length).toBe(1);
    // perform click on setLanguageEng
    languagePanelLangEng.simulate("click");
    const {
      lang: { currentLanguage, languagePanelHidden },
    } = store.getState();
    expect(currentLanguage).toBe("eng");
    expect(languagePanelHidden).toBeTruthy();
    // turn "ON" language panel by clicking toggleLanguagePanel
    const toggleLanguagePanel = findByTestAttr(
      wrapper,
      "language-panel-toggle-btn"
    );
    toggleLanguagePanel.simulate("click");
  });

  it("set currentLanguage to 'ukr' when setLanguageUkr is clicked", () => {
    const languagePanelLangUkr = findByTestAttr(
      wrapper,
      "language-panel-lang-ukr"
    );
    expect(languagePanelLangUkr.length).toBe(1);
    // perform click on setLanguageUkr
    languagePanelLangUkr.simulate("click");
    const {
      lang: { currentLanguage },
    } = store.getState();
    expect(currentLanguage).toBe("ukr");
    // turn "ON" language panel by clicking toggleLanguagePanel
    const toggleLanguagePanel = findByTestAttr(
      wrapper,
      "language-panel-toggle-btn"
    );
    toggleLanguagePanel.simulate("click");
  });

  it("set currentLanguage to 'rus' when setLanguageRus is clicked", () => {
    const languagePanelRus = findByTestAttr(wrapper, "language-panel-lang-rus");
    expect(languagePanelRus.length).toBe(1);
    // perform click on setLanguageRus
    languagePanelRus.simulate("click");
    const {
      lang: { currentLanguage },
    } = store.getState();
    expect(currentLanguage).toBe("rus");
    // turn "ON" language panel by clicking toggleLanguagePanel
    const toggleLanguagePanel = findByTestAttr(
      wrapper,
      "language-panel-toggle-btn"
    );
    toggleLanguagePanel.simulate("click");
  });

  it("toggle language pannel when toggleLanguagePanel is clicked", () => {
    // assert on toggling
    const toggleLanguagePanel = findByTestAttr(
      wrapper,
      "language-panel-toggle-btn"
    );
    toggleLanguagePanel.simulate("click");
    let {
      lang: { languagePanelHidden },
    } = store.getState();
    expect(languagePanelHidden).toBeTruthy();
    toggleLanguagePanel.simulate("click");
    ({
      lang: { languagePanelHidden },
    } = store.getState());
    expect(languagePanelHidden).toBeFalsy();
  });

  it("matches snapshot", () => {
    const languagePanel = findByTestAttr(wrapper, "language-panel");
    expect(languagePanel).toMatchSnapshot();
  });
});
