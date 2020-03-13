// import "./ProfilePage.scss";
import React from "react";

// components
import Profile from "../../components/Profile/Profile";

// JS Rendering CSS
import {
  ProfilePageContainer,
  ProfilePagePlaceholder
} from "./ProfilePageStyles";

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <ProfilePagePlaceholder />
      <Profile />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
