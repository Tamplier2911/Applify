// import "./ContactsForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { sendMessageStart } from "../../redux/messages/messages.actions";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// validator
import emailValidator from "../../utils/EmailValidator/emailValidator";

// JS Rendering CSS
import {
  ContactsFormContainer,
  ContactsFormTitle,
  ContactsFormItself,
  ContactsFormLength,
} from "./ContactsFormStyles";

// component constants
import contactsFormData from "./ContactsFormConstants";

const ContactsForm = ({ lang, openModal, sendMessageStart }) => {
  const [contactsInfo, setContactsInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = contactsInfo;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setContactsInfo({ ...contactsInfo, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1 || name.length > 40)
      return openModal({
        header: "Attention!",
        content: "Name must not consist of more than 40 characters.",
      });
    if (!emailValidator(email) || !name || !message)
      return openModal({
        header: "Attention!",
        content:
          "Please, enter your name, email and message. Note: email must match required format.",
      });
    sendMessageStart(contactsInfo);
    setContactsInfo({ name: "", email: "", message: "" });
  };

  const {
    contactsFormTitle,
    contactsFormNameField,
    contactsFormEmailField,
    contactsFormMsgField,
    contactsFormSubmitField,
    contactsFormMsgLength,
  } = contactsFormData[lang];

  return (
    <ContactsFormContainer data-test="contacts-form">
      <ContactsFormTitle lang={lang}>{contactsFormTitle}</ContactsFormTitle>
      <ContactsFormItself
        autoComplete="off"
        onSubmit={(e) => onFormSubmit(e)}
        data-test="contacts-form-element"
      >
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={name}
          label={contactsFormNameField}
          name="name"
          type="text"
          required
          data-test="contacts-form-input"
        />
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={email}
          label={contactsFormEmailField}
          name="email"
          type="email"
          required
          data-test="contacts-form-input"
        />
        <TextInput
          rows="6"
          onInputChange={(e) => onInputChange(e)}
          label={contactsFormMsgField}
          name="message"
          value={message}
          max="2000"
          //   placeholder="Don't be shy, share your ideas with me!"
          required
          data-test="contacts-form-input"
        />
        <Button
          type="submit"
          value={contactsFormSubmitField}
          data-test="contacts-form-submit"
        />
      </ContactsFormItself>
      <ContactsFormLength>
        {contactsFormMsgLength + " "}
        {2000 - message.length}
      </ContactsFormLength>
    </ContactsFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { openModal, sendMessageStart })(
  ContactsForm
);
