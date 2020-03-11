// import "./AuthorizationPage.scss";
import React from "react";

// components
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

// JS Rendering CSS
import {
  AuthPageContainer,
  AuthPagePlaceholder
} from "./AuthorizationPageStyles";

const AuthorizationPage = () => {
  return (
    <AuthPageContainer>
      <AuthPagePlaceholder />
      <SignIn />
      <SignUp />
    </AuthPageContainer>
  );
};

export default AuthorizationPage;
