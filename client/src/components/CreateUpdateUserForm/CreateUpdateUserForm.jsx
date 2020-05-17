// import "./CreateUpdateUserForm.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import {
  createOneUserStart,
  updateOneUserStart,
} from "../../redux/users/users.actions";

// validator
import emailValidator from "../../utils/EmailValidator/emailValidator";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  CreateUpdateUserFormContainer,
  CreateUpdateUserFormTitle,
  CreateUpdateUserFormElement,
  CreateUpdateUserFormLength,
  CreateUpdateUserFormUserSVG,
  CreateUpdateUserFormAdminSVG,
  CreateUpdateUserFormOwnerSVG,
} from "./CreateUpdateUserFormStyles";

// component constants
import createUpdateUserFormData from "./CreateUpdateUserFormConstants";

const CreateUpdateUserForm = ({
  lang,
  method,
  updateData,
  openModal,
  createOneUserStart,
  updateOneUserStart,
}) => {
  const isMethodPost = method === "POST";

  const { _id, name, email, role, about } = updateData ? updateData : {};

  const [userCredentials, setUserCredentials] = useState({
    userName: isMethodPost ? "" : name,
    userEmail: isMethodPost ? "" : email,
    userRole: isMethodPost ? "user" : role,
    userAbout: isMethodPost ? "" : about,
    userPassword: "",
    userPasswordConfirm: "",
  });
  const {
    userName,
    userEmail,
    userRole,
    userAbout,
    userPassword,
    userPasswordConfirm,
  } = userCredentials;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validate
    if (!emailValidator(userEmail))
      return openModal({
        header: "Attention!",
        content: "Please, make sure that email is matching required format.",
      });
    if (isMethodPost) {
      if (
        !userName ||
        !userEmail ||
        !userRole ||
        !userPassword ||
        !userPasswordConfirm
      )
        return openModal({
          header: "Attention!",
          content:
            "Please, enter name, email, password, confirm password and choose a role.",
        });
      if (userPassword !== userPasswordConfirm)
        return openModal({
          header: "Attention!",
          content: "Password and Confirm Password fields don't match.",
        });
      if (userPassword.length < 8)
        return openModal({
          header: "Attention!",
          content: "Password must be at least 8 characters long.",
        });
      createOneUserStart(userCredentials);
      setUserCredentials({
        userName: "",
        userEmail: "",
        userRole: "user",
        userAbout: "",
        userPassword: "",
        userPasswordConfirm: "",
      });
    } else {
      if (!userName || !userEmail || !userRole)
        return openModal({
          header: "Attention!",
          content: "Please, make sure user has a name, email and role.",
        });
      const userCredentialsWithId = { ...userCredentials, _id: _id };
      updateOneUserStart(userCredentialsWithId);
    }
  };

  const CreateUpdateUserFormTextLabel =
    userRole === "user"
      ? CreateUpdateUserFormUserSVG
      : userRole === "admin"
      ? CreateUpdateUserFormAdminSVG
      : userRole === "owner"
      ? CreateUpdateUserFormOwnerSVG
      : null;

  const {
    createUpdateUserFormTitleCr,
    createUpdateUserFormTitleUp,
    createUpdateUserFormName,
    createUpdateUserFormEmail,
    createUpdateUserFormPassword,
    createUpdateUserFormPasswordConfirm,
    createUpdateUserFormAbout,
    createUpdateUserFormRoleOptions,
    createUpdateUserFormButtonCr,
    createUpdateUserFormButtonUp,
    createUpdateUserFormLength,
  } = createUpdateUserFormData[lang];

  return (
    <CreateUpdateUserFormContainer data-test="create-update-user-form">
      <CreateUpdateUserFormTitle lang={lang}>
        {isMethodPost
          ? createUpdateUserFormTitleCr
          : createUpdateUserFormTitleUp}
      </CreateUpdateUserFormTitle>
      <CreateUpdateUserFormElement
        data-test="create-update-user-form-element"
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <FormInput
          data-test="create-update-user-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={userName}
          name="userName"
          label={createUpdateUserFormName}
          type="text"
          required
        />
        <FormInput
          data-test="create-update-user-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={userEmail}
          name="userEmail"
          label={createUpdateUserFormEmail}
          type="email"
          required
        />
        {isMethodPost ? (
          <React.Fragment>
            <FormInput
              onInputChange={(e) => onInputChange(e)}
              value={userPassword}
              name="userPassword"
              label={createUpdateUserFormPassword}
              type="password"
              required
            />
            <FormInput
              onInputChange={(e) => onInputChange(e)}
              value={userPasswordConfirm}
              name="userPasswordConfirm"
              label={createUpdateUserFormPasswordConfirm}
              type="password"
              required
            />
          </React.Fragment>
        ) : (
          <TextInput
            onInputChange={(e) => onInputChange(e)}
            value={userAbout}
            name="userAbout"
            label={createUpdateUserFormAbout}
            rows="4"
            max="700"
          />
        )}
        <SelectInput
          data-test="create-update-user-form-input"
          onInputChange={(e) => onInputChange(e)}
          defaultValue={isMethodPost ? "user" : userRole}
          label={<CreateUpdateUserFormTextLabel />}
          name="userRole"
          options={createUpdateUserFormRoleOptions}
          required
        />
        <Button
          type="submit"
          value={
            isMethodPost
              ? createUpdateUserFormButtonCr
              : createUpdateUserFormButtonUp
          }
        />
      </CreateUpdateUserFormElement>
      {isMethodPost ? null : (
        <CreateUpdateUserFormLength>
          {createUpdateUserFormLength + " "}
          {700 - userAbout.length}
        </CreateUpdateUserFormLength>
      )}
    </CreateUpdateUserFormContainer>
  );
};

CreateUpdateUserForm.propTypes = {
  method: PropTypes.string,
  updateData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, {
  openModal,
  createOneUserStart,
  updateOneUserStart,
})(CreateUpdateUserForm);
