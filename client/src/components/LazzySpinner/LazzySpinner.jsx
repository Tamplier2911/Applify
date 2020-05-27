// import './LazzySpinner.scss';
import React from "react";

// JS Rendering CSS
import {
  LazzySpinnerContainer,
  LazzySpinnerSquare,
} from "./LazzySpinnerStyles";

const LazzySpinner = () => {
  return (
    <LazzySpinnerContainer data-test="lazzy-spinner">
      <LazzySpinnerSquare data-test="lazzy-spinner-square" />
    </LazzySpinnerContainer>
  );
};

export default LazzySpinner;
