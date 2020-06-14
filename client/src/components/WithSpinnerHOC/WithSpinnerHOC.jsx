// import "./WithSpinnerHOC.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  WithSpinnerHOCContainer,
  WithSpinnerHOCSquare,
} from "./WithSpinnerHOCStyles";

const WithSpinnerHOC = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <WithSpinnerHOCContainer data-test="content-is-loading">
      <WithSpinnerHOCSquare />
    </WithSpinnerHOCContainer>
  ) : (
    <WrappedComponent data-test="content-is-loaded" {...otherProps} />
  );
};

WithSpinnerHOC.propTypes = {
  isLoading: PropTypes.bool,
  otherProps: PropTypes.object,
};

export default WithSpinnerHOC;
