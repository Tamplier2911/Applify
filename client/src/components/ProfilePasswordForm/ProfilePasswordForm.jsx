// import "./ProfilePasswordForm.scss";
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
  ProfilePasswordFormContainer,
  ProfilePasswordFormTitle,
  ProfilePasswordFormElement
} from "./ProfilePasswordFormStyles";

// component constants
import profilePasswordFormData from "../../utils/ComponentProfilePasswordFormConstants/componentProfilePasswordFormConstants";

const ProfilePasswordForm = ({ lang }) => {
  const {
    profilePasswordFormTitle,
    profilePasswordFormCurPass,
    profilePasswordFormNewPass,
    profilePasswordFormNewPassConf,
    profilePasswordFormFileButton
  } = profilePasswordFormData[lang];

  const [userPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: ""
  });

  const { currentPassword, newPassword, newPasswordConfirm } = userPassword;

  const onInputChange = e => {
    const { name, value } = e.target;
    setUserPassword({ ...userPassword, [name]: value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // validate pass
    console.log(userPassword);
  };

  // console.log(userPassword, "from ProfilePasswordForm");

  return (
    <ProfilePasswordFormContainer>
      <ProfilePasswordFormTitle lang={lang}>
        {profilePasswordFormTitle}
      </ProfilePasswordFormTitle>
      <ProfilePasswordFormElement
        autoComplete="off"
        onSubmit={e => onFormSubmit(e)}
      >
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={currentPassword}
          label={profilePasswordFormCurPass}
          name="currentPassword"
          type="password"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={newPassword}
          label={profilePasswordFormNewPass}
          name="newPassword"
          type="password"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
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
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(ProfilePasswordForm);
