import "./ForgotPassword.scss";
import React from "react";

// components
import FormHolder from "../FormHolder/FormHolder";
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm";

// JS Rendering CSS
import {} from "./ForgotPasswordStyles";

// component constants

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <FormHolder
        type="forgot"
        title={"Forgot password? I'll get you back on track!"}
      >
        <ForgotPasswordForm />
      </FormHolder>
    </div>
  );
};

export default ForgotPassword;
