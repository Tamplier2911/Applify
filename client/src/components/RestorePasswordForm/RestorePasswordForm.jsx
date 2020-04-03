// import "./RestorePasswordForm.scss";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { userRestorePasswordStart } from "../../redux/auth/auth.actions";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  RestorePasswordFormContainer,
  RestorePasswordFormTitle,
  RestorePasswordFormElement,
} from "./RestorePasswordFormStyles";

// component constants
import restorePasswordFormData from "./RestorePasswordFormConstants";

const RestorePasswordForm = ({
  lang,
  match: {
    params: { id },
  },
  openModal,
  userRestorePasswordStart,
}) => {
  const [userPasswords, setUserPasswords] = useState({
    newPassword: "",
    newPasswordConfirm: "",
    resetToken: id ? id : "",
  });
  const { newPassword, newPasswordConfirm } = userPasswords;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserPasswords({ ...userPasswords, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 8)
      return openModal({
        header: "Attention!",
        content: "Password must be at least 8 characters long.",
      });
    if (newPassword !== newPasswordConfirm)
      return openModal({
        header: "Attention!",
        content: "Password and Confirm Password fields don't match.",
      });
    userRestorePasswordStart(userPasswords);
  };

  const {
    restorePasswordFormTitle,
    restorePasswordFormNewPass,
    restorePasswordFormNewPassConf,
    restorePasswordFormButton,
  } = restorePasswordFormData[lang];

  return (
    <RestorePasswordFormContainer>
      <RestorePasswordFormTitle lang={lang}>
        {restorePasswordFormTitle}
      </RestorePasswordFormTitle>
      <RestorePasswordFormElement
        onSubmit={(e) => onSubmit(e)}
        autoComplete="off"
      >
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={newPassword}
          label={restorePasswordFormNewPass}
          name="newPassword"
          type="password"
          required
        />
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={newPasswordConfirm}
          label={restorePasswordFormNewPassConf}
          name="newPasswordConfirm"
          type="password"
          required
        />
        <Button type="submit" value={restorePasswordFormButton} />
      </RestorePasswordFormElement>
    </RestorePasswordFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default withRouter(
  connect(mapStateToProps, { openModal, userRestorePasswordStart })(
    RestorePasswordForm
  )
);
