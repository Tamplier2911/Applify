// import "./CreateUpdateUser.scss";
import React from "react";
import PropTypes from "prop-types";

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
import createUpdateUserData from "./CreateUpdateUserConstants";

const CreateUpdateUser = ({ lang, method, updateData }) => {
  const isMethodPost = method === "POST";
  const {
    createUpdateUserTitleCr,
    createUpdateUserTitleUp,
  } = createUpdateUserData[lang];

  return (
    <CreateUpdateUserContainer data-test="create-update-user">
      <FormHolder
        data-test="create-update-user-form-holder"
        type="update-create-user"
        title={isMethodPost ? createUpdateUserTitleCr : createUpdateUserTitleUp}
      >
        <CreateUpdateUserForm
          data-test="create-update-user-form"
          method={method}
          updateData={updateData}
        />
      </FormHolder>
    </CreateUpdateUserContainer>
  );
};

CreateUpdateUser.propTypes = {
  method: PropTypes.string,
  updateData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(CreateUpdateUser);
