// import "./UserUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllUsersAsObject } from "../../redux/users/users.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import GetBack from "../GetBack/GetBack";
import CreateUpdateUser from "../CreateUpdateUser/CreateUpdateUser";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  UserUpdateContainer,
  UserUpdateInfo,
  UserUpdateCred,
  UserUpdateName,
  UserUpdateEmail,
  UserUpdateRole,
  UserUpdateId,
  UserUpdateChanged,
  UserUpdatePhoto,
  UserUpdatePhotoWrap,
  UserUpdatePhotoImg,
  UserFieldKey,
  UserFieldValue,
  UserUpdateNotFound,
} from "./UserUpdateStyles";

// component constants
import userUpdateData from "./UserUpdateConstants";

/**
 * @JSXComponent
 * @param {string} lang - current language
 * @param {object} userObject - user object retrieved from all users collection
 * by match.params.id
 * @param {string} testObjId - optional argument for testing purposes, contains
 * id of object we trying to test, which is going to be retrieved from all users collection
 */

const UserUpdate = ({ lang, userObject, testObjId }) => {
  const { _id, photo, about, role, name, email, passwordChangedAt } = userObject
    ? userObject
    : {};

  const image = getImageRelativePath(photo ? photo : "");
  const date = transformDateToLocaleString(
    passwordChangedAt ? passwordChangedAt : ""
  );

  const userData = { _id, name, email, role, about };

  const {
    userUpdateName,
    userUpdateEmail,
    userUpdateRole,
    userUpdateId,
    userUpdatePassword,
    userUpdatePasswordChanged,
    userUpdateNotFound,
  } = userUpdateData[lang];

  console.log(userObject);
  console.log(testObjId);

  return userObject ? (
    <UserUpdateContainer test-data="user-update">
      <UserUpdateInfo test-data="user-update-info">
        <UserUpdateCred>
          <UserUpdateName>
            <UserFieldKey>{userUpdateName}</UserFieldKey>
            <UserFieldValue>{name}</UserFieldValue>
          </UserUpdateName>
          <UserUpdateEmail>
            <UserFieldKey>{userUpdateEmail}</UserFieldKey>
            <UserFieldValue>{email}</UserFieldValue>
          </UserUpdateEmail>
          <UserUpdateRole>
            <UserFieldKey>{userUpdateRole}</UserFieldKey>
            <UserFieldValue>{role}</UserFieldValue>
          </UserUpdateRole>
          <UserUpdateId>
            <UserFieldKey>{userUpdateId}</UserFieldKey>
            <UserFieldValue>{_id}</UserFieldValue>
          </UserUpdateId>
          <UserUpdateChanged>
            <UserFieldKey>{userUpdatePassword}</UserFieldKey>
            <UserFieldValue>
              {date !== "Invalid Date" ? date : userUpdatePasswordChanged}
            </UserFieldValue>
          </UserUpdateChanged>
        </UserUpdateCred>
        <UserUpdatePhoto>
          <UserUpdatePhotoWrap>
            <UserUpdatePhotoImg src={image} alt="happy user" />
          </UserUpdatePhotoWrap>
        </UserUpdatePhoto>
      </UserUpdateInfo>
      <CreateUpdateUser
        test-data="user-update-cu"
        method="PATCH"
        updateData={userData}
      />
      <GetBack path={`/profile/users`} />
    </UserUpdateContainer>
  ) : (
    <UserUpdateNotFound test-data="user-update-not-found">
      {userUpdateNotFound}
    </UserUpdateNotFound>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userObject: selectAllUsersAsObject(
    ownProps.testObjId ? ownProps.testObjId : ownProps.match.params.id
  )(state),
  lang: selectCurrentLanguage(state),
});

export default withRouter(connect(mapStateToProps)(UserUpdate));
