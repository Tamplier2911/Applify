// import "./SignIn.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import SignInForm from "../SignInForm/SignInForm";

// component constants
import signInConstants from "../../utils/ComponentSignInConstants/componentSignInConstants";

// JS Rendering CSS
import { SignInContainer } from "./SignInStyles";

const SignIn = ({ lang }) => {
  const { signInTitle } = signInConstants[lang];
  return (
    <SignInContainer>
      <FormHolder type="signIn" title={signInTitle}>
        <SignInForm />
      </FormHolder>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(SignIn);
