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
  ProfilePortraitAdminFeedsSVG,
} from "./AdminBarStyles.js";

const AdminBar = () => {
  return (
    <ProfilePortraitAdminBar data-test="admin-bar">
      <ProfilePortraitAdminUL>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink
            to="profile/users"
            data-test="admin-bar-users"
          >
            <ProfilePortraitAdminUsersSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink
            to="profile/messages"
            data-test="admin-bar-messages"
          >
            <ProfilePortraitAdminMessagesSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink
            to="profile/blogs"
            data-test="admin-bar-blogs"
          >
            <ProfilePortraitAdminPostsSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
        <ProfilePortraitAdminLI>
          <ProfilePortraitAdminLink
            to="profile/feeds"
            data-test="admin-bar-feeds"
          >
            <ProfilePortraitAdminFeedsSVG />
          </ProfilePortraitAdminLink>
        </ProfilePortraitAdminLI>
      </ProfilePortraitAdminUL>
    </ProfilePortraitAdminBar>
  );
};

export default AdminBar;
