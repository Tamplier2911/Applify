// import "./CreateUpdateBlogpost.scss";
import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import FormHolder from "../FormHolder/FormHolder";
import CreateUpdateBlogpostForm from "../CreateUpdateBlogpostForm/CreateUpdateBlogpostForm";

// JS Rendering CSS
import { CreateUpdateBlogpostContainer } from "./CreateUpdateBlogpostStyles";

// component constants
import createUpdateBlogpostData from "./CreateUpdateBlogpostConstants";

const CreateUpdateBlogpost = ({ lang, method, updateData }) => {
  const {
    createUpdateBlogpostTitleCr,
    createUpdateBlogpostTitleUp,
  } = createUpdateBlogpostData[lang];

  return (
    <CreateUpdateBlogpostContainer data-test="create-update-bp">
      <FormHolder
        data-test="create-update-bp-form-holder"
        type="update-create-blog"
        title={
          method === "POST"
            ? createUpdateBlogpostTitleCr
            : createUpdateBlogpostTitleUp
        }
      >
        <CreateUpdateBlogpostForm
          data-test="create-update-bp-form"
          method={method}
          updateData={updateData}
        />
      </FormHolder>
    </CreateUpdateBlogpostContainer>
  );
};

CreateUpdateBlogpost.propTypes = {
  method: PropTypes.string,
  updateData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(CreateUpdateBlogpost);
