// import "./CreateUpdateBlogpostForm.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import {
  updateOneBlogpostStart,
  createOneBlogpostStart,
} from "../../redux/blogs/blogs.actions";

// components
import FileInput from "../FileInput/FileInput";
import FormInput from "../FormInput/FormInput";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  CreateUpdateBlogpostFormContainer,
  CreateUpdateBlogpostFormTitle,
  CreateUpdateBlogpostFormElement,
  CreateUpdateBlogpostFormLength,
  CreateUpdateBlogpostFormHolder,
} from "./CreateUpdateBlogpostFormStyles";

// component constants
import createUpdateBlogpostFormData from "./CreateUpdateBlogpostFormConstants";

const CreateUpdateBlogpostForm = ({
  lang,
  method,
  updateData,
  openModal,
  updateOneBlogpostStart,
  createOneBlogpostStart,
}) => {
  const isMethodPost = method === "POST";

  const [blogData, setBlogData] = useState({
    blogTitle: isMethodPost ? "" : updateData.title,
    blogTheme: isMethodPost ? "" : updateData.theme,
    blogContent: isMethodPost ? "" : updateData.content,
    blogImage: "",
  });
  const { blogTitle, blogTheme, blogContent, blogImage } = blogData;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "blogImage") {
      const [file] = e.target.files;
      setBlogData({ ...blogData, [name]: file });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (blogTitle.length > 80)
      return openModal({
        header: "Attention!",
        content: "Post Title must not consist of more than 80 characters.",
      });
    if (blogTheme.length > 80)
      return openModal({
        header: "Attention!",
        content: "Post Subject must not consist of more than 80 characters.",
      });
    if (blogImage) {
      if (
        !blogImage.type.startsWith("image") ||
        parseInt(blogImage.size / 1024 / 1024) > 5
      ) {
        return openModal({
          header: "Attention!",
          content:
            "File must be type of 'image'. Note: max allowed file size - 5mb.",
        });
      }
    }
    if (!blogTitle || !blogTheme || !blogContent)
      return openModal({
        header: "Attention!",
        content:
          "Please, enter blog title, subject, content and choose an image.",
      });
    if (isMethodPost) {
      if (!blogImage)
        return openModal({
          header: "Attention!",
          content: "Please, choose an image.",
        });
      createOneBlogpostStart(blogData);
      setBlogData({
        blogTitle: "",
        blogTheme: "",
        blogContent: "",
        blogImage: "",
      });
    } else {
      const data = { ...blogData, _id: updateData._id };
      updateOneBlogpostStart(data);
    }
  };

  const {
    createUpdateBlogpostFormTitle,
    createUpdateBlogpostFormTitleLabel,
    createUpdateBlogpostFormSubjectLabel,
    createUpdateBlogpostFormContentLabel,
    createUpdateBlogpostFormImageLabel,
    createUpdateBlogpostFormBtnCr,
    createUpdateBlogpostFormBtnUp,
    createUpdateBlogpostFormNote,
    createUpdateBlogpostFormLength,
  } = createUpdateBlogpostFormData[lang];

  return (
    <CreateUpdateBlogpostFormContainer data-test="create-update-bp-form">
      <CreateUpdateBlogpostFormTitle lang={lang}>
        {createUpdateBlogpostFormTitle}
      </CreateUpdateBlogpostFormTitle>
      <CreateUpdateBlogpostFormElement
        data-test="create-update-bp-form-elem"
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <FormInput
          data-test="create-update-bp-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={blogTitle}
          name="blogTitle"
          label={createUpdateBlogpostFormTitleLabel}
          type="text"
          required
        />
        <FormInput
          data-test="create-update-bp-form-input"
          onInputChange={(e) => onInputChange(e)}
          value={blogTheme}
          name="blogTheme"
          label={createUpdateBlogpostFormSubjectLabel}
          type="text"
          required
        />
        <TextInput
          data-test="create-update-bp-form-input"
          rows="10"
          onInputChange={(e) => onInputChange(e)}
          value={blogContent}
          name="blogContent"
          label={createUpdateBlogpostFormContentLabel}
          max="100000"
          required
        />
        {isMethodPost ? (
          <FileInput
            onInputChange={(e) => onInputChange(e)}
            image={blogImage ? 1 : 0}
            name="blogImage"
            type="file"
            id="createUpdateBlogostFileInput"
            label={createUpdateBlogpostFormImageLabel}
          />
        ) : null}
        <Button
          type="submit"
          value={`${
            isMethodPost
              ? createUpdateBlogpostFormBtnCr
              : createUpdateBlogpostFormBtnUp
          }`}
        />
      </CreateUpdateBlogpostFormElement>
      <CreateUpdateBlogpostFormLength>
        {isMethodPost ? (
          <CreateUpdateBlogpostFormHolder>
            {createUpdateBlogpostFormNote}
          </CreateUpdateBlogpostFormHolder>
        ) : null}
        <CreateUpdateBlogpostFormHolder>
          {createUpdateBlogpostFormLength + " "}
          {100000 - blogContent.length}
        </CreateUpdateBlogpostFormHolder>
      </CreateUpdateBlogpostFormLength>
    </CreateUpdateBlogpostFormContainer>
  );
};

CreateUpdateBlogpostForm.propTypes = {
  method: PropTypes.string,
  updateData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, {
  openModal,
  updateOneBlogpostStart,
  createOneBlogpostStart,
})(CreateUpdateBlogpostForm);
