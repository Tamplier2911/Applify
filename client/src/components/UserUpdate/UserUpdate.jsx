import "./UserUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllUsersAsObject } from "../../redux/users/users.selectors";

// components
import GetBack from "../GetBack/GetBack";
import CreateUpdateUser from "../CreateUpdateUser/CreateUpdateUser";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {} from "./UserUpdateStyles";

// component constants

const UserUpdate = ({ userObject }) => {
  const { _id, photo, about, role, name, email, passwordChangedAt } = userObject
    ? userObject
    : {};

  const image = getImageRelativePath(photo ? photo : "");
  const date = transformDateToLocaleString(
    passwordChangedAt ? passwordChangedAt : ""
  );

  return userObject ? (
    <div className="user-update">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Role: {role}</div>
      <div>About: {about}</div>
      <div>ID: {_id}</div>
      <div>Password Changed: {date ? date : "Never changed"}</div>
      <div
        style={{
          width: "10rem",
          height: "10rem",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: `0rem 0rem .8rem var(--cl-primary)`
        }}
      >
        <img
          src={image}
          alt="happy user"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover"
          }}
        ></img>
      </div>
      <CreateUpdateUser method="PATCH" />
      <GetBack path={`/profile/users`} />
    </div>
  ) : (
    <div>Object with that id not found.</div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userObject: selectAllUsersAsObject(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(UserUpdate));
