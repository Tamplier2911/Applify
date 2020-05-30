// import './ProfilePortrait.scss';
import React from "react";
import PropTypes from "prop-types";

// components
import AdminBar from "../AdminBar/AdminBar";

// JS Rendering CSS
import {
  ProfilePortraitContainer,
  ProfilePortraitWrapper,
  ProfilePortraitImage,
} from "./ProfilePortraitStyles";

const ProfilePortrait = ({ photo, userRole }) => {
  return (
    <ProfilePortraitContainer
      data-test="profile-portrait"
      animateIn="bounceInRight"
      animateOnce={true}
    >
      <ProfilePortraitWrapper data-test="profile-portrait-photo">
        <ProfilePortraitImage src={photo} alt="happy user" />
      </ProfilePortraitWrapper>
      {userRole === "admin" || userRole === "owner" ? (
        <AdminBar data-test="profile-portrait-adminbar" />
      ) : null}
    </ProfilePortraitContainer>
  );
};

ProfilePortrait.propTypes = {
  photo: PropTypes.string,
  userRole: PropTypes.string,
};

export default ProfilePortrait;
