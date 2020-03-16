// import "./ContactsForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  ContactsFormContainer,
  ContactsFormTitle,
  ContactsFormItself
} from "./ContactsFormStyles";

// component constants
import contactsFormData from "../../utils/ComponentContactsFormConstants/componentContactsFormConstants";

const ContactsForm = ({ lang }) => {
  const [contactsInfo, setContactsInfo] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = contactsInfo;

  const onInputChange = e => {
    const { name, value } = e.target;
    setContactsInfo({ ...contactsInfo, [name]: value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // PERFORM VALIDATION ON EMAIL
    console.log(contactsInfo);
  };

  const {
    contactsFormTitle,
    contactsFormNameField,
    contactsFormEmailField,
    contactsFormMsgField,
    contactsFormSubmitField,
    contactsFormMsgLength
  } = contactsFormData[lang];

  return (
    <ContactsFormContainer>
      <ContactsFormTitle lang={lang}>{contactsFormTitle}</ContactsFormTitle>
      <ContactsFormItself autoComplete="off" onSubmit={e => onFormSubmit(e)}>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={name}
          label={contactsFormNameField}
          name="name"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label={contactsFormEmailField}
          name="email"
          type="email"
          required
        />
        <TextInput
          rows="6"
          onInputChange={e => onInputChange(e)}
          label={contactsFormMsgField}
          name="message"
          value={message}
          max="2000"
          //   placeholder="Don't be shy, share your ideas with me!"
          required
        />
        <Button type="submit" value={contactsFormSubmitField} />
      </ContactsFormItself>
      {contactsFormMsgLength + " "}
      {2000 - message.length}
    </ContactsFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(ContactsForm);
