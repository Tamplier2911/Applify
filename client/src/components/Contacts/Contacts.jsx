// import "./Contacts.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import ContactsForm from "../ContactsForm/ContactsForm";

// JS Rendering CSS
import {
  ContactsContainer,
  ContactsTitle,
  ContactsFormComp,
  ContactsFormCompLeft,
  ContactsFormCompSVG,
  ContactsFormCompRight,
  ContactsFormCompFormWrap
} from "./ContactsStyles";

// component constants
import contactsData from "../../utils/ComponentContactsConstants/componentContactsConstants";

const Contacts = ({ lang }) => {
  const { contactsHeader } = contactsData[lang];
  return (
    <ContactsContainer>
      <ContactsTitle>{contactsHeader}</ContactsTitle>
      <ContactsFormComp>
        <ContactsFormCompLeft>
          <ContactsFormCompSVG />
        </ContactsFormCompLeft>
        <ContactsFormCompRight>
          <ContactsFormCompFormWrap>
            <ContactsForm />
          </ContactsFormCompFormWrap>
        </ContactsFormCompRight>
      </ContactsFormComp>
    </ContactsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(Contacts);
