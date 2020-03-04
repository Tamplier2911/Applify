import "./Contacts.scss";
import React from "react";

// components
import ContactsForm from "../ContactsForm/ContactsForm";

// svg
import { ReactComponent as DevSVG } from "../../assets/svg/web_developer.svg";

// JS Rendering CSS
import {} from "./ContactsStyles";

const Contacts = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__header">
        Ready to enhance your business with cutting edge technologies?
      </h2>
      <div className="contacts__formComposition">
        <div className="contacts__formComposition--left">
          <DevSVG className="contacts__formComposition--left--svg" />
        </div>
        <div className="contacts__formComposition--right">
          <div className="contacts__formComposition--right--formContainer">
            <ContactsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
