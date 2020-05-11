import React from "react";

// component
import CollectionForHolder from "./CollectionHolder.jsx";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<CollectionHolder />", () => {
  it("renders without an error", () => {
    const wrapper = setShallow(<CollectionForHolder />);
    const collectionForHolder = findByTestAttr(
      wrapper,
      "collection-for-holder"
    );
    expect(collectionForHolder.length).toBe(1);
  });

  it("renders children without an error", () => {
    const wrapper = setShallow(<CollectionForHolder children={{}} />);
    const collectionForHolderChild = findByTestAttr(
      wrapper,
      "collection-for-holder-children"
    );
    expect(collectionForHolderChild.length).toBe(1);
  });

  it("renders refresher without an error", () => {
    const wrapper = setShallow(<CollectionForHolder refresher={1} />);
    const collectionForHolderRefresher = findByTestAttr(
      wrapper,
      "collection-for-holder-refresher"
    );
    expect(collectionForHolderRefresher.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      children: {},
      title: "str",
      lang: "eng",
      refresher: 1,
      cb: () => {},
    };
    const err = checkProps(CollectionForHolder, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const wrapper = setShallow(<CollectionForHolder />);
    const collectionForHolder = findByTestAttr(
      wrapper,
      "collection-for-holder"
    );
    expect(collectionForHolder).toMatchSnapshot();
  });
});
