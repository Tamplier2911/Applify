// import "./FileInput.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  FileInputContainer,
  FileInputLabel,
  FileInputSign,
  FileInputElement,
} from "./FileInputStyles";

const FileInput = ({ onInputChange, label, id, image, ...otherProps }) => {
  return (
    <FileInputContainer data-test="file-input">
      {label ? (
        <FileInputLabel data-test="file-input-label" htmlFor={id}>
          {label}
        </FileInputLabel>
      ) : null}
      {image ? (
        <FileInputSign image={image}>&#10004;</FileInputSign>
      ) : (
        <FileInputSign image={image}>&#10006;</FileInputSign>
      )}
      <FileInputElement
        data-test="file-input-element"
        onChange={onInputChange}
        id={id}
        {...otherProps}
      />
    </FileInputContainer>
  );
};

FileInput.propTypes = {
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.number,
  otherProps: PropTypes.object,
};

export default FileInput;
