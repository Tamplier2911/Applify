// import './ProfilePortrait.scss';
import React from "react";

// JS Rendering CSS
import {
  ProfilePortraitContainer,
  ProfilePortraitWrapper,
  ProfilePortraitImage
} from "./ProfilePortraitStyles";

const ProfilePortrait = ({ photo }) => {
  return (
    <ProfilePortraitContainer>
      <ProfilePortraitWrapper>
        <ProfilePortraitImage src={photo} alt="happy user" />
      </ProfilePortraitWrapper>
    </ProfilePortraitContainer>
  );
};

export default ProfilePortrait;
