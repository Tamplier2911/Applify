import React from "react";
import toJson from "enzyme-to-json";

// component
import CollectionForHolder from "./CollectionForHolder";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<CollectionForHolder />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<CollectionForHolder />);
  });

  it("renders without an error", () => {
    const collectionForHolder = findByTestAttr(
      wrapper,
      "collection-for-holder"
    );
    expect(collectionForHolder.length).toBe(1);
  });

  it("recives expected props", () => {
    const expectedProps = { dataCollection: [], children: {} };
    const err = checkProps(CollectionForHolder, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const collectionForHolder = findByTestAttr(
      wrapper,
      "collection-for-holder"
    );
    expect(toJson(collectionForHolder)).toMatchSnapshot();
  });
});
