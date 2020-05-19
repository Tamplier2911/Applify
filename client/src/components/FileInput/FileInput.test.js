import React from "react";

// component
import FileInput from "./FileInput";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<FileInput />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<FileInput />);
  });

  it("renders without an error", () => {
    const fileInput = findByTestAttr(wrapper, "file-input");
    expect(fileInput.length).toBe(1);
  });

  it("renders child - label if label property is passed in", () => {
    wrapper = setShallow(<FileInput label={"Labelicous"} />);
    const fileInputLabel = findByTestAttr(wrapper, "file-input-label");
    expect(fileInputLabel.length).toBe(1);
  });

  it("renders child - input element", () => {
    const fileInputElement = findByTestAttr(wrapper, "file-input-element");
    expect(fileInputElement.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      onInputChange: () => {},
      label: "Labelous",
      id: "SDK2131",
      image: 1,
      otherProps: {},
    };
    const err = checkProps(FileInput, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("", () => {
    const fileInput = findByTestAttr(wrapper, "file-input");
    expect(fileInput).toMatchSnapshot();
  });
});
