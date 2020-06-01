// import "./SelectInput.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  SelectInputContainer,
  SelectInputLabel,
  SelectInputElement,
  SelectInputOptions,
} from "./SelectInputStyles";

/**
 * @JSXComponent
 * @param {function} onInputChange - on change trigger.
 * @param {JSXComponent} label - svg icon that we want to render within select bar.
 * @param {string} count - represent amount of labels to render, eg 1-5 stars for feedbacl.
 * @param {array} options - array of objects to render select options {name: "", value: ""}.
 * @param {object} otherProps - defaultValue, required etc..
 */

export const SelectInput = ({
  onInputChange,
  label,
  options,
  count,
  ...otherProps
}) => {
  return (
    <SelectInputContainer>
      {label && count ? (
        <SelectInputLabel columns={count}>
          {Array.from(new Array(Number(count)), (el, i) => i + 1).map((el, i) =>
            React.cloneElement(label, { key: `${el + i}` })
          )}
        </SelectInputLabel>
      ) : (
        <SelectInputLabel columns={label.length}>{label}</SelectInputLabel>
      )}
      <SelectInputElement {...otherProps} onChange={onInputChange}>
        {options.map((option, i) => {
          const { name, value } = option;
          return (
            <SelectInputOptions value={value} key={i}>
              {name}
            </SelectInputOptions>
          );
        })}
      </SelectInputElement>
    </SelectInputContainer>
  );
};

SelectInput.propTypes = {
  onInputChange: PropTypes.func,
  label: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  count: PropTypes.string,
};

export default SelectInput;
