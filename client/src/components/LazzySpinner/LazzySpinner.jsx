// import './LazzySpinner.scss';
import React from "react";

// JS Rendering CSS
import {
  LazzySpinnerContainer,
  LazzySpinnerSquare
} from "./LazzySpinnerStyles";

const LazzySpinner = () => {
  return (
    <LazzySpinnerContainer>
      <LazzySpinnerSquare />
    </LazzySpinnerContainer>
  );
};

export default LazzySpinner;
