// import "./UserCard.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteOneUserStart } from "../../redux/users/users.actions";

// components
import Button from "../Button/Button";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  UserCardContainer,
  UserCardHeader,
  UserCardHeaderName,
  UserCardHeaderEmail,
  UserCardHeaderRole,
  UserCardBody,
  UserCardBodyWrap,
  UserCardBodyImg,
  UserCardBodyAbout,
  UserCardBodyAboutLQT,
  UserCardBodyAboutCTN,
  UserCardBodyAboutRQT,
  UserCardBodyPassword,
  UserCardBodyPasswordOptions,
  UserCardBodyPasswordChanged,
  UserCardControlls,
  UserCardControllsLink
} from "./UserCardStyles";

// component constants
import userCardData from "../../utils/ComponentUserCardConstants/componentUserCardConstants";

// photo: "uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg"
// about: "Hey, I love Node.js!"
// likedBlogposts: (2) ["5e7132b79ce13d35d83cf151", "5e7132b79ce13d35d83cf153"]
// role: "owner"
// _id: "5e6e618672e9151d503701ed"
// name: "Artyom Nikolaiev"
// email: "artyom.nikolaev@yahoo.com"
// passwordChangedAt: "2020-03-20T20:36:48.399Z"

const UserCard = ({ data, lang, deleteOneUserStart }) => {
  const { _id, photo, about, role, name, email, passwordChangedAt } = data
    ? data
    : {};

  const long = about.slice(0, 80)[79];
  const shortenAbout = about.slice(0, 80);
  const image = getImageRelativePath(photo ? photo : "");
  const date = transformDateToLocaleString(
    passwordChangedAt ? passwordChangedAt : ""
  );

  const {
    userCardDelete,
    userCardUpdate,
    userCardAbout,
    userCardPasswordChangedAt,
    userCardPasswordNotYet
  } = userCardData[lang];

  return (
    <UserCardContainer>
      <UserCardHeader>
        <UserCardHeaderName>{name}</UserCardHeaderName>
        <UserCardHeaderEmail>{email}</UserCardHeaderEmail>
        <UserCardHeaderRole>{role}</UserCardHeaderRole>
      </UserCardHeader>
      <UserCardBody>
        <UserCardBodyWrap>
          <UserCardBodyImg src={image} alt="happy user" />
        </UserCardBodyWrap>
        <UserCardBodyAbout>
          <UserCardBodyAboutLQT>&ldquo;</UserCardBodyAboutLQT>
          <UserCardBodyAboutCTN>
            {about && long
              ? shortenAbout + "..."
              : about
              ? about
              : userCardAbout}
          </UserCardBodyAboutCTN>
          <UserCardBodyAboutRQT>&bdquo;</UserCardBodyAboutRQT>
        </UserCardBodyAbout>
        <UserCardBodyPassword>
          <UserCardBodyPasswordOptions>
            {userCardPasswordChangedAt}
          </UserCardBodyPasswordOptions>
          <UserCardBodyPasswordChanged>
            {passwordChangedAt ? date : userCardPasswordNotYet}
          </UserCardBodyPasswordChanged>
        </UserCardBodyPassword>
      </UserCardBody>
      <UserCardControlls>
        <Button
          type="button"
          value={userCardDelete}
          click={() => deleteOneUserStart(_id)}
        />
        <UserCardControllsLink to={`/profile/users/${_id}`}>
          {userCardUpdate}
        </UserCardControllsLink>
      </UserCardControlls>
    </UserCardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { deleteOneUserStart })(UserCard);
