import "./ContactsForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {} from "./ContactsFormStyles";

const ContactsForm = () => {
  const [contactsInfo, setContactsInfo] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = contactsInfo;

  console.log(contactsInfo);

  const onInputChange = e => {
    const { name, value } = e.target;
    setContactsInfo({ ...contactsInfo, [name]: value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(contactsInfo);
  };

  return (
    <div className="contacts-form">
      <h3
        className="contacts-form__title"
        style={{ fontFamily: "var(--font-title)" }}
      >
        Send me a message describing your problem, and I will get back to you
        shortly!
      </h3>
      <form
        className="contacts-form__form"
        autoComplete="off"
        onSubmit={e => onFormSubmit(e)}
      >
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={name}
          label="Name"
          name="name"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={email}
          label="Email"
          name="email"
          type="email"
          required
        />
        <TextInput
          rows="6"
          onChange={e => onInputChange(e)}
          name="message"
          value={message}
          label="Message"
          max="700"
          //   placeholder="Don't be shy, share your ideas with me!"
          required
        />
        <Button type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactsForm;
