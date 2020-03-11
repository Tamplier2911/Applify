// import "./SignUpForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  SignUpFormContainer,
  SignUpFormTitle,
  SignUpFormElement
} from "./SignUpFormStyles";

// component constants
import signUpFormData from "../../utils/ComponentSignUpFormConstants/componentSignUpFormConstants";

const SignUpForm = ({ lang }) => {
  const {
    signUpFormTitle,
    signUpFormName,
    signUpFormEmail,
    signUpFormPassword,
    signUpFormPasswordConfirm,
    signUpFormButton
  } = signUpFormData[lang];

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const { name, email, password, passwordConfirm } = userCredentials;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(userCredentials);
  };

  return (
    <SignUpFormContainer>
      <SignUpFormTitle>{signUpFormTitle}</SignUpFormTitle>
      <SignUpFormElement
        className="signup-form__form"
        autoComplete="off"
        onSubmit={e => onSubmit(e)}
      >
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={name}
          label={signUpFormName}
          name="name"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label={signUpFormEmail}
          name="email"
          type="email"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={password}
          label={signUpFormPassword}
          name="password"
          type="password"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={passwordConfirm}
          label={signUpFormPasswordConfirm}
          name="passwordConfirm"
          type="password"
          required
        />
        <Button type="submit" value={signUpFormButton} />
      </SignUpFormElement>
    </SignUpFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(SignUpForm);
