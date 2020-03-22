// import './ProfilePortrait.scss';
import React from "react";

// components
import AdminBar from "../AdminBar/AdminBar";

// JS Rendering CSS
import {
  ProfilePortraitContainer,
  ProfilePortraitWrapper,
  ProfilePortraitImage
} from "./ProfilePortraitStyles";

const ProfilePortrait = ({ photo, userId }) => {
  return (
    <ProfilePortraitContainer>
      <ProfilePortraitWrapper>
        <ProfilePortraitImage src={photo} alt="happy user" />
      </ProfilePortraitWrapper>
      {userId === "5e6e618672e9151d503701ed" ? <AdminBar /> : null}
    </ProfilePortraitContainer>
  );
};

export default ProfilePortrait;
