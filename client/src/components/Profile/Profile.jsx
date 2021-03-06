// import "./Profile.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectUserObject } from "../../redux/auth/auth.selectors";

// components
import ProfilePortrait from "../ProfilePortrait/ProfilePortrait";
import ProfileAboutFrom from "../ProfileAboutForm/ProfileAboutForm";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfilePasswordForm from "../ProfilePasswordForm/ProfilePasswordForm";

// JS Rendering CSS
import {
  ProfileContainer,
  ProfileTitle,
  ProfileContent,
} from "./ProfileStyles";

// component constants
import profileData from "./ProfileConstants";

const Profile = ({ lang, user }) => {
  const { name, email, photo, about, role } = user;
  const { profileTitle } = profileData[lang];

  let image = "";
  if (process.env.NODE_ENV === "development" && photo) {
    image = `${process.env.REACT_APP_SERVE_IMAGE_DEV + "api/" + photo}`;
  } else if (photo) {
    image = `${"api/" + photo}`;
  }

  return (
    <ProfileContainer data-test="profile">
      <ProfileTitle>{profileTitle}</ProfileTitle>
      <ProfileContent data-test="profile-content">
        <ProfilePortrait photo={image} userRole={role} />
        <ProfileAboutFrom about={about} />
        <ProfileInfoForm name={name} email={email} photo={photo} />
        <ProfilePasswordForm />
      </ProfileContent>
    </ProfileContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  user: selectUserObject,
});

export default connect(mapStateToProps)(Profile);
