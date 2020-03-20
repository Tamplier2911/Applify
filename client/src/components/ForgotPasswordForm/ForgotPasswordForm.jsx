// import "./ForgotPasswordForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { userForgotPasswordStart } from "../../redux/auth/auth.actions";

// validator
import emailValidator from "../../utils/EmailValidator/emailValidator";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  ForgotPasswordFormContainer,
  ForgotPasswordFormTitle,
  ForgotPasswordFormElement
} from "./ForgotPasswordFormStyles";

// component constants
import forgotPasswordFormData from "../../utils/ComponentForgotPasswordFormConstants/componentForgotPasswordFormConstants";

const ForgotPasswordForm = ({ lang, openModal, userForgotPasswordStart }) => {
  const [userEmailAddress, setUserEmailAddress] = useState({ userEmail: "" });
  const { userEmail } = userEmailAddress;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserEmailAddress({ ...userEmailAddress, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!emailValidator(userEmail) || !userEmail)
      return openModal({
        header: "Attention!",
        content: "Please, enter your email address."
      });
    userForgotPasswordStart(userEmailAddress);
  };

  const {
    forgotPasswordFormTitle,
    forgotPasswordEmail,
    forgotPasswordFormButton
  } = forgotPasswordFormData[lang];

  return (
    <ForgotPasswordFormContainer>
      <ForgotPasswordFormTitle lang={lang}>
        {forgotPasswordFormTitle}
      </ForgotPasswordFormTitle>
      <ForgotPasswordFormElement onSubmit={e => onSubmit(e)} autoComplete="on">
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={userEmail}
          label={forgotPasswordEmail}
          name="userEmail"
          type="email"
          required
        />
        <Button type="submit" value={forgotPasswordFormButton} />
      </ForgotPasswordFormElement>
    </ForgotPasswordFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { openModal, userForgotPasswordStart })(
  ForgotPasswordForm
);
