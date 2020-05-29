// import "./ProfilePasswordForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { updateUserPasswordStart } from "../../redux/auth/auth.actions";

// components
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  ProfilePasswordFormContainer,
  ProfilePasswordFormTitle,
  ProfilePasswordFormElement,
} from "./ProfilePasswordFormStyles";

// component constants
import profilePasswordFormData from "./ProfilePasswordFormConstants";

const ProfilePasswordForm = ({ lang, openModal, updateUserPasswordStart }) => {
  const {
    profilePasswordFormTitle,
    profilePasswordFormCurPass,
    profilePasswordFormNewPass,
    profilePasswordFormNewPassConf,
    profilePasswordFormFileButton,
  } = profilePasswordFormData[lang];

  const [userPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const { currentPassword, newPassword, newPasswordConfirm } = userPassword;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserPassword({ ...userPassword, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      currentPassword.length < 8 ||
      newPassword.length < 8 ||
      newPasswordConfirm.length < 8
    )
      return openModal({
        header: "Attention!",
        content: "Password must be at least 8 characters long.",
      });

    if (newPassword !== newPasswordConfirm)
      return openModal({
        header: "Attention!",
        content: "New Password and Confirm New Password fields don't match.",
      });

    if (!currentPassword || !newPassword || !newPasswordConfirm)
      return openModal({
        header: "Attention!",
        content:
          "Please enter current password, new password and confirmation of new password.",
      });

    updateUserPasswordStart(userPassword);
    setUserPassword({
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    });
  };

  return (
    <ProfilePasswordFormContainer
      data-test="profile-password-form"
      animateIn={"bounceInLeft"}
      animateOnce={true}
    >
      <ProfilePasswordFormTitle lang={lang}>
        {profilePasswordFormTitle}
      </ProfilePasswordFormTitle>
      <ProfilePasswordFormElement
        data-test="profile-password-form-element"
        autoComplete="off"
        onSubmit={(e) => onFormSubmit(e)}
      >
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={currentPassword}
          label={profilePasswordFormCurPass}
          name="currentPassword"
          type="password"
          required
        />
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={newPassword}
          label={profilePasswordFormNewPass}
          name="newPassword"
          type="password"
          required
        />
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={newPasswordConfirm}
          label={profilePasswordFormNewPassConf}
          name="newPasswordConfirm"
          type="password"
          required
        />
        <Button type="submit" value={profilePasswordFormFileButton} />
      </ProfilePasswordFormElement>
    </ProfilePasswordFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { openModal, updateUserPasswordStart })(
  ProfilePasswordForm
);
