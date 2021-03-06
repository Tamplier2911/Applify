// import "./Contacts.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import ContactsForm from "../ContactsForm/ContactsForm";

// JS Rendering CSS
import { ContactsContainer } from "./ContactsStyles";

// component constants
import contactsData from "./ContactsConstants";

const Contacts = ({ lang }) => {
  const { contactsHeader } = contactsData[lang];
  return (
    <ContactsContainer data-test="contacts">
      <FormHolder
        type={"contact"}
        title={contactsHeader}
        data-test="contacts-form-holder"
      >
        <ContactsForm />
      </FormHolder>
    </ContactsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(Contacts);
