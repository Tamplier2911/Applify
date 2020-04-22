// import "./ContactsPage.scss";
import React from "react";

// components
import Contacts from "../../components/Contacts/Contacts";

// JS Rendering CSS
import {
  ContactsPageContainer,
  ContactsPagePlaceholder,
} from "./ContactsPageStyles";

const ContactsPage = () => {
  return (
    <ContactsPageContainer data-test="contacts-page">
      <Contacts data-test="contacts-page-cp" />
      <ContactsPagePlaceholder />
    </ContactsPageContainer>
  );
};

export default ContactsPage;
