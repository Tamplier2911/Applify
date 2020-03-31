// import "./CreateUpdateUser.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import CreateUpdateUserForm from "../CreateUpdateUserForm/CreateUpdateUserForm";

// JS Rendering CSS
import { CreateUpdateUserContainer } from "./CreateUpdateUserStyle";

// component constants
import createUpdateUserData from "../../utils/ComponentCreateUpdateUserConstants/componentCreateUpdateUserConstants";

const CreateUpdateUser = ({ lang, method, updateData }) => {
  const isMethodPost = method === "POST";
  const {
    createUpdateUserTitleCr,
    createUpdateUserTitleUp
  } = createUpdateUserData[lang];

  return (
    <CreateUpdateUserContainer>
      <FormHolder
        type="update-create-user"
        title={isMethodPost ? createUpdateUserTitleCr : createUpdateUserTitleUp}
      >
        <CreateUpdateUserForm method={method} updateData={updateData} />
      </FormHolder>
    </CreateUpdateUserContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(CreateUpdateUser);
