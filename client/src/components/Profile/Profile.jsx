// import "./Profile.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import ProfilePortrait from "../ProfilePortrait/ProfilePortrait";
import ProfileAboutFrom from "../ProfileAboutForm/ProfileAboutForm";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfilePasswordForm from "../ProfilePasswordForm/ProfilePasswordForm";

// JS Rendering CSS
import {
  ProfileContainer,
  ProfileTitle,
  ProfileContent
} from "./ProfileStyles";

// component constants
import profileData from "../../utils/ComponentProfileConstants/componentProfileConstants";

// temporary data object
const data = {
  name: "Ulka Simone MohantyUlka Simone MohantyUlka Simone Mohanty",
  email: "ulkasimone@gmail.comulkasimone@gmail.comulkasimone@gmail.com",
  photo: "https://my-hit.org/storage/1967587_210x300x50x2.jpg",
  about:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet sunt dolorum? Obcaecati nobis dicta ab! Assumenda, ea vero possimus eius exercitationem delectus, accusantium sunt consectetur tempora repudiandae placeat maiores."
};

const Profile = ({ lang }) => {
  const { name, email, photo, about } = data;
  const { profileTitle } = profileData[lang];
  return (
    <ProfileContainer>
      <ProfileTitle>{profileTitle}</ProfileTitle>
      <ProfileContent>
        <ProfilePortrait photo={photo} />
        <ProfileAboutFrom about={about} />
        <ProfileInfoForm name={name} email={email} />
        <ProfilePasswordForm />
      </ProfileContent>
    </ProfileContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(Profile);
