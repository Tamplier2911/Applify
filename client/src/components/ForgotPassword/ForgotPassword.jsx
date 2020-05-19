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
import forgotPasswordData from "./ForgotPasswordConstants";

const ForgotPassword = ({ lang }) => {
  const { forgotPasswordTitle } = forgotPasswordData[lang];
  return (
    <ForgotPasswordContainer data-test="forgot-password">
      <FormHolder
        data-test="forgot-password-holder"
        type="forgot"
        title={forgotPasswordTitle}
      >
        <ForgotPasswordForm data-test="forgot-password-form" />
      </FormHolder>
    </ForgotPasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(ForgotPassword);
