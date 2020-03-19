import "./PasswordRestorationPage.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import RestorePassword from "../../components/RestorePassword/RestorePassword";

// JS Rendering CSS
import {} from "./PasswordRestorationPageStyles";

const PasswordRestorationPage = ({ match }) => {
  return (
    <div className="password-restoration-page">
      <Switch>
        <Route exact path={`${match.path}`} component={ForgotPassword} />
        <Route path={`${match.path}/:id`} component={RestorePassword} />
      </Switch>
    </div>
  );
};

export default PasswordRestorationPage;
