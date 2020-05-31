import React from "react";
import toJson from "enzyme-to-json";

// component
import Card from "./Card";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<Card />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<Card />);
  });

  it("renders without an error", () => {
    const card = findByTestAttr(wrapper, "card-component");
    expect(card.length).toBe(1);
  });

  it("renders child - svg", () => {
    const cardSvg = findByTestAttr(wrapper, "card-component-svg");
    expect(cardSvg.length).toBe(1);
  });

  it("renders child - content", () => {
    const cardContent = findByTestAttr(wrapper, "card-component-content");
    expect(cardContent.length).toBe(1);
  });

  it("recieves expected prop types", () => {
    const expectedProps = {
      title: "str",
      text: "str",
      gradient: [],
      SVG: {},
      id: 777,
    };
    const err = checkProps(Card, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const card = findByTestAttr(wrapper, "card-component");
    expect(toJson(card)).toMatchSnapshot();
  });
});
