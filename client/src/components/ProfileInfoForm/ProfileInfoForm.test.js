import React from "react";
import toJson from "enzyme-to-json";

// component
import ProfileInfoForm from "./ProfileInfoForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<ProfileInfoForm />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  const defProps = {
    name: "Thomas",
    email: "ex@maple.com",
    photo: "profile.jpg",
  };
  beforeEach(() => {
    wrapper = setShallowC(<ProfileInfoForm store={store} {...defProps} />);
  });

  it("renders without an error", () => {
    const profileInfoForm = findByTestAttr(wrapper, "profile-info-form");
    expect(profileInfoForm.length).toBe(1);
  });

  it("renders - children profile info form element", () => {
    const profileInfoFormElement = findByTestAttr(
      wrapper,
      "profile-info-form-element"
    );
    expect(profileInfoFormElement.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      name: "Thomas",
      email: "ex@maple.com",
      photo: "profile.jpg",
    };
    const err = checkProps(ProfileInfoForm, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const profileInfoForm = findByTestAttr(wrapper, "profile-info-form");
    expect(toJson(profileInfoForm)).toMatchSnapshot();
  });
});
