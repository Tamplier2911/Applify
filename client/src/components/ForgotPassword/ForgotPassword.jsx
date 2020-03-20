// import "./ForgotPassword.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm";

// JS Rendering CSS
import { ForgotPasswordContainer } from "./ForgotPasswordStyles";

// component constants
import forgotPasswordData from "../../utils/ComponentForgotPasswordConstants/componentForgotPasswordConstants";

const ForgotPassword = ({ lang }) => {
  const { forgotPasswordTitle } = forgotPasswordData[lang];
  return (
    <ForgotPasswordContainer>
      <FormHolder type="forgot" title={forgotPasswordTitle}>
        <ForgotPasswordForm />
      </FormHolder>
    </ForgotPasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(ForgotPassword);
