import "./RestorePassword.scss";
import React from "react";

// components
import FormHolder from "../FormHolder/FormHolder";
import RestorePasswordForm from "../RestorePasswordForm/RestorePasswordForm";

// JS Rendering CSS
import {} from "./RestorePasswordStyles";

// component constants

const RestorePassword = () => {
  return (
    <div className="restore-password">
      <FormHolder type="restore" title={"Restore password:"}>
        <RestorePasswordForm />
      </FormHolder>
    </div>
  );
};

export default RestorePassword;
