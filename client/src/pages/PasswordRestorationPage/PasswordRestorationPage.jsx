// import "./PasswordRestorationPage.scss";
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLogged } from "../../redux/auth/auth.selectors";

// components
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import RestorePassword from "../../components/RestorePassword/RestorePassword";

// JS Rendering CSS
import { PasswordRestorationPageContainer } from "./PasswordRestorationPageStyles";

const PasswordRestorationPage = ({ match, isLogged }) => {
  return (
    <PasswordRestorationPageContainer>
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (isLogged ? <Redirect to="/" /> : <ForgotPassword />)}
        />
        <Route
          exact
          path={`${match.path}/:id`}
          render={() => (isLogged ? <Redirect to="/" /> : <RestorePassword />)}
        />
      </Switch>
    </PasswordRestorationPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged
});

export default withRouter(connect(mapStateToProps)(PasswordRestorationPage));
