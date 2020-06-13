import React from "react";
import toJson from "enzyme-to-json";

// component
import TextInput from "./TextInput";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<TextInput />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<TextInput />);
  });

  it("renders without an error", () => {
    const textInput = findByTestAttr(wrapper, "text-input");
    expect(textInput).toHaveLength(1);
  });

  it("renders children - label if label prop is passed", () => {
    wrapper = setShallow(<TextInput label="test label" />);
    const textInputLabel = findByTestAttr(wrapper, "text-input-label");
    expect(textInputLabel).toHaveLength(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      onInputChange: () => {},
      value: "",
      max: "2",
      label: "",
      otherProps: {},
    };
    const err = checkProps(TextInput, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const textInput = findByTestAttr(wrapper, "text-input");
    expect(toJson(textInput)).toMatchSnapshot();
  });
});
