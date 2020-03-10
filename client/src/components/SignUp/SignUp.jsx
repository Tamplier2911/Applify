import "./SignUp.scss";
import React from "react";

// components
import FormHolder from "../FormHolder/FormHolder";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className="sign-up">
      <FormHolder type="signUp" title="Create new account:">
        <SignUpForm />
      </FormHolder>
    </div>
  );
};

export default SignUp;
