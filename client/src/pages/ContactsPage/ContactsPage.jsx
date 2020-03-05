// import "./ContactsPage.scss";
import React from "react";

// components
import Contacts from "../../components/Contacts/Contacts";

// JS Rendering CSS
import {
  ContactsPageContainer,
  ContactsPagePlaceholder
} from "./ContactsPageStyles";

const ContactsPage = () => {
  return (
    <ContactsPageContainer>
      <Contacts />
      <ContactsPagePlaceholder />
    </ContactsPageContainer>
  );
};

export default ContactsPage;
