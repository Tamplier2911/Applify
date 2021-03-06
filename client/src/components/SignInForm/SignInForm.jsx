// import "./SignInForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { logUserInStart } from "../../redux/auth/auth.actions";
import { openModal } from "../../redux/modal/modal.actions";

// validator
import emailValidator from "../../utils/EmailValidator/emailValidator";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// component constants
import signInFormData from "./SignInFormConstants";

// JS Rendering CSS
import {
  SignInFormContainer,
  SignInFormTitle,
  SignInFormElement,
  SignInFormPasForgot,
} from "./SignInFormStyles";

const SignInForm = ({ lang, logUserInStart, openModal }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { password, email } = userCredentials;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailValidator(email) || !password)
      return openModal({
        header: "Attention!",
        content:
          "Please, enter email and password. Note: email must match required format.",
      });

    logUserInStart(userCredentials);
    setUserCredentials({
      email: "",
      password: "",
    });
  };

  const {
    signInFormTitle,
    signInFormEmail,
    signInFormPassword,
    signInFormButton,
    signInFormForgotPas,
  } = signInFormData[lang];

  return (
    <SignInFormContainer data-test="signin-form">
      <SignInFormTitle lang={lang}>{signInFormTitle}</SignInFormTitle>
      <SignInFormElement
        data-test="signin-form-element"
        // autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <FormInput
          data-test="signin-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={email}
          label={signInFormEmail}
          name="email"
          type="email"
          required
        />
        <FormInput
          data-test="signin-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={password}
          label={signInFormPassword}
          name="password"
          type="password"
          required
        />
        <Button type="submit" value={signInFormButton} />
      </SignInFormElement>
      <SignInFormPasForgot to="/restore">
        {signInFormForgotPas}
      </SignInFormPasForgot>
    </SignInFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { logUserInStart, openModal })(
  SignInForm
);
