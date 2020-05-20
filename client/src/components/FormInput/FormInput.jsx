// import "./FormInput.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  FormInputContainer,
  FormInputBar,
  FormInputFillingBar,
  FormInputLabel,
} from "./FormInputStyles";

const FormInput = ({ onInputChange, label, ...otherProps }) => {
  return (
    <FormInputContainer data-test="form-input">
      <FormInputBar onChange={onInputChange} {...otherProps} />
      <FormInputFillingBar />
      {label ? (
        <FormInputLabel
          data-test="form-input-label"
          inputlength={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </FormInputContainer>
  );
};

FormInput.propTypes = {
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  otherProps: PropTypes.object,
};

export default FormInput;
