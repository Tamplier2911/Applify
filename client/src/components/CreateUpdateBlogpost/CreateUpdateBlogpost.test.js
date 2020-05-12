import React from "react";

// component
import CreateUpdateBlogpost from "./CreateUpdateBlogpost";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../tests/testUtils";

describe("<CreateUpdateBlogpost />", () => {
  const initialStore = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<CreateUpdateBlogpost store={store} />);
  });

  it("renders without an error", () => {
    const createUpdateBlogpost = findByTestAttr(wrapper, "create-update-bp");
    expect(createUpdateBlogpost.length).toBe(1);
  });

  it("renders children - form holder", () => {
    const createUpdateBPFormHolder = findByTestAttr(
      wrapper,
      "create-update-bp-form-holder"
    );
    expect(createUpdateBPFormHolder.length).toBe(1);
  });

  it("renders children - form", () => {
    const createUpdateBPForm = findByTestAttr(wrapper, "create-update-bp");
    expect(createUpdateBPForm.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = { method: "POST", updateData: {} };
    const err = checkProps(CreateUpdateBlogpost, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const createUpdateBlogpost = findByTestAttr(wrapper, "create-update-bp");
    expect(createUpdateBlogpost).toMatchSnapshot();
  });
});
