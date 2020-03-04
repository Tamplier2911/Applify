import "./ContactsPage.scss";
import React from "react";

// components
import Contacts from "../../components/Contacts/Contacts";

// JS Rendering CSS
import {} from "./ContactsPageStyles";

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <Contacts />
    </div>
  );
};

export default ContactsPage;
