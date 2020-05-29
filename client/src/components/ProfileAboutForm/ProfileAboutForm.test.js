import React from "react";

// component
import ProfileAboutForm from "./ProfileAboutForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<ProfileAboutForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(
      <ProfileAboutForm store={store} about="I love Unicorns!" />
    );
  });

  it("renders without an error", () => {
    const profileAaboutForm = findByTestAttr(wrapper, "profile-about-form");
    expect(profileAaboutForm.length).toBe(1);
  });

  it("renders - children profile about form element", () => {
    const profileAaboutFormElement = findByTestAttr(
      wrapper,
      "profile-about-form-element"
    );
    expect(profileAaboutFormElement.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { about: "I love Unicorns!" };
    const err = checkProps(ProfileAboutForm, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const profileAaboutForm = findByTestAttr(wrapper, "profile-about-form");
    expect(profileAaboutForm).toMatchSnapshot();
  });
});
