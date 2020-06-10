import React from "react";
import toJson from "enzyme-to-json";

// svg
import { ReactComponent as TestSVG } from "../../assets/svg/admin.svg";

// component
import SelectInput from "./SelectInput";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<SelectInput />", () => {
  let wrapper;
  const customProps = {
    onInputChange: () => {},
    label: <TestSVG />,
    options: [{ name: "opt1", value: "val1" }],
    count: "1",
  };
  beforeEach(() => {
    wrapper = setShallow(<SelectInput {...customProps} />);
  });

  it("renders without an error", () => {
    const selectInput = findByTestAttr(wrapper, "select-input");
    expect(selectInput).toHaveLength(1);
  });

  it("renders children - select input select", () => {
    const selectInputSelect = findByTestAttr(wrapper, "select-input");
    expect(selectInputSelect).toHaveLength(1);
  });

  it("renders as much labels, as count props equals", () => {
    const customProps = {
      onInputChange: () => {},
      label: <TestSVG />,
      options: [{ name: "opt1", value: "val1" }],
      count: "3",
    };
    wrapper = setShallow(<SelectInput {...customProps} />);
    const selectInputLabel = findByTestAttr(wrapper, "select-input-label");
    expect(selectInputLabel.length).toBe(Number(customProps.count));
  });

  it("renders as much select options, as options length is", () => {
    const customProps = {
      onInputChange: () => {},
      label: <TestSVG />,
      options: [
        { name: "opt1", value: "val1" },
        { name: "opt2", value: "val2" },
      ],
      count: "3",
    };
    wrapper = setShallow(<SelectInput {...customProps} />);
    const selectInputSelectOption = findByTestAttr(
      wrapper,
      "select-input-select-option"
    );
    expect(selectInputSelectOption.length).toBe(customProps.options.length);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      onInputChange: () => {},
      label: <TestSVG />,
      options: [],
      count: "1",
    };
    const err = checkProps(SelectInput, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const selectInput = findByTestAttr(wrapper, "select-input");
    expect(toJson(selectInput)).toMatchSnapshot();
  });
});
