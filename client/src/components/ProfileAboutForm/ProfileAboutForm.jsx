// import "./ProfileAboutForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// JS Rendering CSS
import {
  ProfileAboutFormContainer,
  ProfileAboutFormTitle,
  ProfileAboutFormElement
} from "./ProfileAboutFormStyles";

// component constants
import profileAboutFormData from "../../utils/ComponentProfileAboutFormConstants/componentProfileAboutFormConstants";

const ProfileAboutForm = ({ about, lang }) => {
  const {
    profileAboutFormTitle,
    profileAboutFormAbout,
    profileAboutFormButton
  } = profileAboutFormData[lang];

  const [aboutMeObj, setAboutMeObj] = useState({ aboutMe: about });
  const { aboutMe } = aboutMeObj;

  const onInputChange = e => {
    const { name, value } = e.target;
    setAboutMeObj({ ...aboutMeObj, [name]: value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // clean up input
    console.log(aboutMeObj);
  };

  // console.log(aboutMeObj, "from ProfileAboutForm");

  return (
    <ProfileAboutFormContainer>
      <ProfileAboutFormTitle lang={lang}>
        {profileAboutFormTitle}
      </ProfileAboutFormTitle>
      <ProfileAboutFormElement
        autoComplete="off"
        onSubmit={e => onFormSubmit(e)}
      >
        <TextInput
          rows="6"
          onInputChange={e => onInputChange(e)}
          label={profileAboutFormAbout}
          name="aboutMe"
          value={aboutMe}
          max="700"
          // placeholder="Don't be shy, share your ideas with me!"
          required
        />
        <Button type="submit" value={profileAboutFormButton} />
      </ProfileAboutFormElement>
    </ProfileAboutFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(ProfileAboutForm);