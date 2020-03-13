// import "./SignInForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// component constants
import signInFormData from "../../utils/ComponentSignInFormConstants/componentSignInFormConstants";

// JS Rendering CSS
import {
  SignInFormContainer,
  SignInFormTitle,
  SignInFormElement,
  SignInFormPasForgot
} from "./SignInFormStyles";

const SignInForm = ({ lang }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { password, email } = userCredentials;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // validate email
    console.log(userCredentials, lang);
  };

  const {
    signInFormTitle,
    signInFormEmail,
    signInFormPassword,
    signInFormButton,
    signInFormForgotPas
  } = signInFormData[lang];

  return (
    <SignInFormContainer>
      <SignInFormTitle lang={lang}>{signInFormTitle}</SignInFormTitle>
      <SignInFormElement
        // autoComplete="off"
        onSubmit={e => onSubmit(e)}
      >
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label={signInFormEmail}
          name="email"
          type="email"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={password}
          label={signInFormPassword}
          name="password"
          type="password"
          required
        />
        <Button type="submit" value={signInFormButton} />
      </SignInFormElement>
      <SignInFormPasForgot to="/forgotPassword">
        {signInFormForgotPas}
      </SignInFormPasForgot>
    </SignInFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(SignInForm);
