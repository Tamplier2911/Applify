// import "./ProfileInfoForm.scss";
import React, { useState, useEffect } from "react";

// validator
import emailValidator from "../../utils/EmailValidator/emailValidator";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import { updateUserDataStart } from "../../redux/auth/auth.actions";

// components
import FormInput from "../FormInput/FormInput";
import FileInput from "../FileInput/FileInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  ProfileInfoFormContainer,
  ProfileInfoFormTitle,
  ProfileInfoFormElement
} from "./ProfileInfoFormStyles";

// component constants
import profileInfoFormData from "../../utils/ComponentProfileInfoFormConstants/componentProfileInfoFormConstants";

const ProfileInfoForm = ({
  name,
  email,
  photo,
  lang,
  openModal,
  updateUserDataStart
}) => {
  const {
    profileInfoFormTitle,
    profileInfoFormName,
    profileInfoFormEmail,
    profileInfoFormFileUpload,
    profileInfoFormFileButton
  } = profileInfoFormData[lang];

  const [profileInfo, setProfileInfo] = useState({
    profileName: "",
    profileEmail: "",
    profileImage: null,
    profileOldImage: photo
  });

  const { profileName, profileEmail, profileImage } = profileInfo;

  useEffect(() => {
    setProfileInfo({
      profileName: name,
      profileEmail: email,
      profileImage: null,
      profileOldImage: photo
    });
  }, [email, name, photo]);

  const onInputChange = e => {
    const { name, value } = e.target;
    if (name === "profileImage") {
      const [file] = e.target.files;
      setProfileInfo({ ...profileInfo, [name]: file });
    } else {
      setProfileInfo({ ...profileInfo, [name]: value });
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // validate data
    // validate type of image to be type: "image/..."
    if (!emailValidator(profileEmail) || !profileName)
      return openModal({
        header: "Attention!",
        content: "In order to update user data, please, enter name and email."
      });

    if (profileImage) {
      if (
        !profileImage.type.startsWith("image") ||
        parseInt(profileImage.size / 1024 / 1024) > 5
      ) {
        return openModal({
          header: "Attention!",
          content:
            "File must be type of 'image'. Note: max allowed file size - 5mb."
        });
      }
    }
    updateUserDataStart(profileInfo);
  };

  return (
    <ProfileInfoFormContainer>
      <ProfileInfoFormTitle lang={lang}>
        {profileInfoFormTitle}
      </ProfileInfoFormTitle>
      <ProfileInfoFormElement
        autoComplete="off"
        onSubmit={e => onFormSubmit(e)}
      >
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={profileName}
          label={profileInfoFormName}
          name="profileName"
          type="text"
          required
        />
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={profileEmail}
          label={profileInfoFormEmail}
          name="profileEmail"
          type="email"
          required
        />
        <FileInput
          onInputChange={e => onInputChange(e)}
          label={profileInfoFormFileUpload}
          image={profileImage ? 1 : 0}
          name="profileImage"
          type="file"
          id="profileInfoFormFileInput"
        />
        <Button type="submit" value={profileInfoFormFileButton} />
      </ProfileInfoFormElement>
    </ProfileInfoFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { openModal, updateUserDataStart })(
  ProfileInfoForm
);
