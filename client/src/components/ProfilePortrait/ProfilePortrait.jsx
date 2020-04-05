// import './ProfilePortrait.scss';
import React from "react";

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
    <ProfilePortraitContainer animateIn="bounceInRight" animateOnce={true}>
      <ProfilePortraitWrapper>
        <ProfilePortraitImage src={photo} alt="happy user" />
      </ProfilePortraitWrapper>
      {userRole === "admin" || userRole === "owner" ? <AdminBar /> : null}
    </ProfilePortraitContainer>
  );
};

export default ProfilePortrait;
