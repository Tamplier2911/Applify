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
import signUpData from "../../utils/ComponentSignUpConstants/componentSignUpConstants";

const SignUp = ({ lang }) => {
  const { signUpTitle } = signUpData[lang];
  return (
    <SignUpContainer>
      <FormHolder type="signUp" title={signUpTitle}>
        <SignUpForm />
      </FormHolder>
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(SignUp);
