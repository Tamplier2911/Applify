// import "./AdminBar.scss";
import React from "react";

// JS Rendering CSS
import {
  ProfilePortraitAdminBar,
  ProfilePortraitAdminUL,
  ProfilePortraitAdminLI,
  ProfilePortraitAdminLink,
  ProfilePortraitAdminUsersSVG,
  ProfilePortraitAdminMessagesSVG,
  ProfilePortraitAdminPostsSVG,
  ProfilePortraitAdminFeedsSVG
} from "./AdminBarStyles.js";

const AdminBar = () => {
  return (
    <ProfilePortraitAdminBar>
      <ProfilePortraitAdminUL>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink to="profile/users">
            <ProfilePortraitAdminUsersSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink to="profile/messages">
            <ProfilePortraitAdminMessagesSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink to="profile/blogs">
            <ProfilePortraitAdminPostsSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink to="profile/feeds">
            <ProfilePortraitAdminFeedsSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
      </ProfilePortraitAdminUL>
    </ProfilePortraitAdminBar>
  );
};

export default AdminBar;
