// import "./CreateUpdateBlogpost.scss";
import React from "react";

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
    <CreateUpdateBlogpostContainer>
      <FormHolder
        type="update-create-blog"
        title={
          method === "POST"
            ? createUpdateBlogpostTitleCr
            : createUpdateBlogpostTitleUp
        }
      >
        <CreateUpdateBlogpostForm method={method} updateData={updateData} />
      </FormHolder>
    </CreateUpdateBlogpostContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(CreateUpdateBlogpost);
