import React from "react";

// component
import CreateUpdateBlogpostForm from "./CreateUpdateBlogpostForm";

// utils
import {
  setShallowC,
  findByTestAttr,
  checkProps,
  storeFactory,
} from "../../tests/testUtils";

describe("<CreateUpdateBlogpostForm />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(
      <CreateUpdateBlogpostForm store={store} updateData={{}} />
    );
  });

  it("renders without an error", () => {
    const createUpdateBlogpostForm = findByTestAttr(
      wrapper,
      "create-update-bp-form"
    );
    expect(createUpdateBlogpostForm.length).toBe(1);
  });

  it("renders child - form element", () => {
    const createUpdateBlogpostFormElement = findByTestAttr(
      wrapper,
      "create-update-bp-form-elem"
    );
    expect(createUpdateBlogpostFormElement.length).toBe(1);
  });

  it("renders childs - text inputs", () => {
    const createUpdateBlogpostFormInput = findByTestAttr(
      wrapper,
      "create-update-bp-form-input"
    );
    expect(createUpdateBlogpostFormInput.length).toBe(3);
  });

  it("recieves expected props", () => {
    const expectedProps = { method: "POST", updateData: {} };
    const err = checkProps(CreateUpdateBlogpostForm, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const createUpdateBlogpostForm = findByTestAttr(
      wrapper,
      "create-update-bp-form"
    );
    expect(createUpdateBlogpostForm).toMatchSnapshot();
  });
});
