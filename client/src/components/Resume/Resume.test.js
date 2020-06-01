import React from "react";
import toJson from "enzyme-to-json";

// component
import Resume from "./Resume";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Resume />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Resume store={store} />);
  });

  it("renders without an error", () => {
    const resume = findByTestAttr(wrapper, "resume");
    expect(resume).toHaveLength(1);
  });

  it("renders children - resume head", () => {
    const resumeHead = findByTestAttr(wrapper, "resume-head");
    expect(resumeHead).toHaveLength(1);
  });

  it("renders children - resume info", () => {
    const resumeInfo = findByTestAttr(wrapper, "resume-info");
    expect(resumeInfo).toHaveLength(1);
  });

  it("renders children - resume main", () => {
    const resumeMain = findByTestAttr(wrapper, "resume-main");
    expect(resumeMain).toHaveLength(1);
  });

  it("renders children - resume links", () => {
    const resumeLinks = findByTestAttr(wrapper, "resume-links");
    expect(resumeLinks).toHaveLength(1);
  });

  it("have expected href and text content - github link ", () => {
    const resumeGithubLink = findByTestAttr(wrapper, "resume-github");
    expect(resumeGithubLink).toHaveLength(1);
    expect(resumeGithubLink.text()).toBe("GitHub");
    expect(resumeGithubLink.prop("href")).toEqual(
      "https://github.com/Tamplier2911"
    );
  });

  it("have expected href and text content - twitter link", () => {
    const resumeTwitterLink = findByTestAttr(wrapper, "resume-twitter");
    expect(resumeTwitterLink).toHaveLength(1);
    expect(resumeTwitterLink.text()).toBe("Twitter");
    expect(resumeTwitterLink.prop("href")).toEqual(
      "https://twitter.com/ArtyomNikolayev"
    );
  });

  it("renders children - resumne ", () => {
    const resume = findByTestAttr(wrapper, "resume");
    expect(toJson(resume)).toMatchSnapshot();
  });
});
