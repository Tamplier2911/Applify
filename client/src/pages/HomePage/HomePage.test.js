import React from "react";
import toJson from "enzyme-to-json";

// component
import HomePage from "./HomePage";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<HomePage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<HomePage />);
  });

  it("renders without error", () => {
    const homePage = findByTestAttr(wrapper, "home-page");
    expect(homePage.length).toBe(1);
  });

  it("renders childrens", () => {
    const heroComponent = findByTestAttr(wrapper, "home-page-hero");
    expect(heroComponent.length).toBe(1);

    const cardsComponent = findByTestAttr(wrapper, "home-page-cards");
    expect(cardsComponent.length).toBe(1);
  });

  it("matches snapshot", () => {
    const homePage = findByTestAttr(wrapper, "home-page");
    expect(toJson(homePage)).toMatchSnapshot();
  });
});
