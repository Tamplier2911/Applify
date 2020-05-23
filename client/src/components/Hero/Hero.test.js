import React from "react";

// component
import Hero from "./Hero";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Hero />", () => {
  const initialStore = {
    theme: {
      currentTheme: "light",
    },
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Hero store={store} />);
  });

  it("renders without an error", () => {
    const hero = findByTestAttr(wrapper, "hero");
    expect(hero.length).toBe(1);
  });

  it("renders children - hero CTA", () => {
    const heroCTA = findByTestAttr(wrapper, "hero-cta");
    expect(heroCTA.length).not.toBe(0);
  });

  it("renders children - hero content", () => {
    const heroContent = findByTestAttr(wrapper, "hero-content");
    expect(heroContent.length).toBe(1);
  });

  it("matches snapshot", () => {
    const hero = findByTestAttr(wrapper, "hero");
    expect(hero).toMatchSnapshot();
  });
});
