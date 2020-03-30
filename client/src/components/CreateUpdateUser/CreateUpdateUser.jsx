import "./CreateUpdateUser.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import CreateUpdateUserForm from "../CreateUpdateUserForm/CreateUpdateUserForm";

// JS Rendering CSS
import {} from "./CreateUpdateUserStyle";

// component constants

const CreateUpdateUser = ({ lang, method, updateData }) => {
  const isMethodPost = method === "POST";
  return (
    <div>
      <FormHolder
        type="update-create-user"
        title={isMethodPost ? "Create User:" : "Update User:"}
      >
        <CreateUpdateUserForm method={method} updateData={updateData} />
      </FormHolder>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(CreateUpdateUser);
