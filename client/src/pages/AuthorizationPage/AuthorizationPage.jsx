// import "./AuthorizationPage.scss";
import React from "react";

// components
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

// JS Rendering CSS
import {
  AuthPageContainer,
  AuthPagePlaceholder,
} from "./AuthorizationPageStyles";

const AuthorizationPage = () => {
  return (
    <AuthPageContainer data-test="auth-page">
      <AuthPagePlaceholder />
      <SignIn data-test="auth-page-signin" />
      <SignUp data-test="auth-page-signup" />
    </AuthPageContainer>
  );
};

export default AuthorizationPage;
