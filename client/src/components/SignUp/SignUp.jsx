// import "./SignUp.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import SignUpForm from "../SignUpForm/SignUpForm";

// JS Rendering CSS
import { SignUpContainer } from "./SignUpStyles.js";

// component constants
import signUpData from "./SignUpConstants";

const SignUp = ({ lang }) => {
  const { signUpTitle } = signUpData[lang];
  return (
    <SignUpContainer data-test="sign-up">
      <FormHolder
        data-test="sign-up-form-holder"
        type="signUp"
        title={signUpTitle}
      >
        <SignUpForm data-test="sign-up-form-element" />
      </FormHolder>
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(SignUp);
