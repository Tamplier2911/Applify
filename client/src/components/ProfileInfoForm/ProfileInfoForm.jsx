// import "./ProfileInfoForm.scss";
import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

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

const ProfileInfoForm = ({ name, email, lang }) => {
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
    profileImage: undefined
  });

  const { profileName, profileEmail } = profileInfo;

  useEffect(() => {
    setProfileInfo({
      profileName: name,
      profileEmail: email,
      profileImage: undefined
    });
  }, [email, name]);

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
    console.log(profileInfo);
  };

  //   console.log(profileInfo, "from ProfileInfoForm");

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

export default connect(mapStateToProps)(ProfileInfoForm);
