import "./AuthorizationPage.scss";
import React from "react";

// components
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const AuthorizationPage = () => {
  return (
    <div className="authorization-page">
      <div className="authorization-page__placeholder"></div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthorizationPage;
