import "./WithSpinnerHOC.scss";
import React from "react";

// JS Rendering CSS
import {
  WithSpinnerHOCContainer,
  WithSpinnerHOCSquare
} from "./WithSpinnerHOCStyles";

const WithSpinnerHOC = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <WithSpinnerHOCContainer>
      <WithSpinnerHOCSquare />
    </WithSpinnerHOCContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinnerHOC;
