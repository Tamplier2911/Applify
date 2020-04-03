// import "./RestorePassword.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import RestorePasswordForm from "../RestorePasswordForm/RestorePasswordForm";

// JS Rendering CSS
import { RestorePasswordContainer } from "./RestorePasswordStyles";

// component constants
import restorePasswordData from "./RestorePasswordConstatns";

const RestorePassword = ({ lang }) => {
  const { restorePasswordTitle } = restorePasswordData[lang];

  return (
    <RestorePasswordContainer>
      <FormHolder type="restore" title={restorePasswordTitle}>
        <RestorePasswordForm />
      </FormHolder>
    </RestorePasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(RestorePassword);
