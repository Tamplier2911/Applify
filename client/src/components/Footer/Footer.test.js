import React from "react";

// component
import Footer from "./Footer";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Footer />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Footer store={store} />);
  });

  it("renders without an error", () => {
    const footer = findByTestAttr(wrapper, "footer");
    expect(footer.length).toBe(1);
  });

  it("renders without an error", () => {
    const footerLinks = findByTestAttr(wrapper, "footer-links");
    expect(footerLinks.length).toBe(1);
  });

  it("renders without an error", () => {
    const footerCopy = findByTestAttr(wrapper, "footer-copy");
    expect(footerCopy.length).toBe(1);
  });

  it("renders without an error", () => {
    const footer = findByTestAttr(wrapper, "footer");
    expect(footer).toMatchSnapshot();
  });
});
