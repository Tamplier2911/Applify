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
  ProfileContent
} from "./ProfileStyles";

// component constants
import profileData from "../../utils/ComponentProfileConstants/componentProfileConstants";

const Profile = ({ lang, user }) => {
  // console.log(user);
  const { name, email, photo, about } = user;
  const { profileTitle } = profileData[lang];

  // let image = "";
  // if (process.env.NODE_ENV === "development" && photo) {
  //   image = `${process.env.REACT_APP_SERVE_IMAGE_DEV + photo}`;
  // } else {
  //   image = photo;
  // }

  let image = "";
  if (process.env.NODE_ENV === "development" && photo) {
    image = `${process.env.REACT_APP_SERVE_IMAGE_DEV + "api/" + photo}`;
  } else {
    image = `${"api/" + photo}`;
  }

  console.log(image);
  return (
    <ProfileContainer>
      <ProfileTitle>{profileTitle}</ProfileTitle>
      <ProfileContent>
        <ProfilePortrait photo={image} />
        <ProfileAboutFrom about={about} />
        <ProfileInfoForm name={name} email={email} />
        <ProfilePasswordForm />
      </ProfileContent>
    </ProfileContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  user: selectUserObject
});

export default connect(mapStateToProps)(Profile);
