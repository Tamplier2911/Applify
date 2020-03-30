import "./CreateUpdateUserForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import {
  createOneUserStart,
  updateOneUserStart
} from "../../redux/users/users.actions";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  CreateUpdateUserFormContainer,
  CreateUpdateUserFormTitle,
  CreateUpdateUserFormElement,
  CreateUpdateUserFormLength,
  CreateUpdateUserFormHolder
} from "./CreateUpdateUserFormStyles";

// component constants

const CreateUpdateUserForm = ({
  lang,
  method,
  updateData,
  openModal,
  createOneUserStart,
  updateOneUserStart
}) => {
  const isMethodPost = method === "POST";

  const onSubmit = e => {
    e.preventDefault();
    // validate
    console.log("submited");
  };

  return (
    <CreateUpdateUserFormContainer>
      <CreateUpdateUserFormTitle lang={lang}>
        {isMethodPost ? "Create new user." : "Update user credentials."}
      </CreateUpdateUserFormTitle>
      <CreateUpdateUserFormElement
        autoComplete="off"
        onSubmit={e => onSubmit(e)}
      >
        <FormInput />
        <FormInput />
        <FormInput />
        <TextInput />
        <Button type="submit" value={isMethodPost ? "Create" : "Update"} />
      </CreateUpdateUserFormElement>
      <CreateUpdateUserFormLength>
        Length for about form?
      </CreateUpdateUserFormLength>
    </CreateUpdateUserFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, {
  openModal,
  createOneUserStart,
  updateOneUserStart
})(CreateUpdateUserForm);
