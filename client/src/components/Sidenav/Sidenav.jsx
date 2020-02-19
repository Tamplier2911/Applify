// import "./Sidenav.scss";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";

// JS Rendering CSS
import {
  SidenavContainer,
  SidenavContent,
  SidenavHero,
  SidenavHeroImgContainer,
  SidenavImage,
  SidenavUserData,
  SidenavUserName,
  SidenavUserEmail,
  SidenavUserLinks,
  SidenavNavigation,
  SidenavUl,
  SidenavLi,
  SidenavLink
} from "./SidenavStyles";

// temporary data object
const data = {
  name: "Ulka Simone MohantyUlka Simone MohantyUlka Simone Mohanty",
  email: "ulkasimone@gmail.comulkasimone@gmail.comulkasimone@gmail.com",
  photo: "https://my-hit.org/storage/1967587_210x300x50x2.jpg"
};

// temporary user logged condition
const logged = true;

const Sidenav = ({ sidenavCondition, toggleSideNav }) => {
  const { name, email, photo } = data;
  return ReactDOM.createPortal(
    <SidenavContainer hidden={sidenavCondition} onClick={toggleSideNav}>
      <SidenavContent onClick={e => e.stopPropagation()}>
        <SidenavHero>
          {logged ? (
            <Fragment>
              <SidenavHeroImgContainer>
                <SidenavImage src={photo} alt="Happy user." />
              </SidenavHeroImgContainer>
              <SidenavUserData>
                <SidenavUserName>{name}</SidenavUserName>
                <SidenavUserEmail>{email}</SidenavUserEmail>
                <SidenavUserLinks to="/" onClick={toggleSideNav}>
                  Profile
                </SidenavUserLinks>
                <SidenavUserLinks to="/" onClick={toggleSideNav}>
                  Log Out
                </SidenavUserLinks>
              </SidenavUserData>
            </Fragment>
          ) : (
            <SidenavUserData>
              <SidenavUserLinks to="/" onClick={toggleSideNav}>
                Log In
              </SidenavUserLinks>
            </SidenavUserData>
          )}
        </SidenavHero>
        <SidenavNavigation>
          <SidenavUl>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                Home
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                Resume
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/portfolio" onClick={toggleSideNav}>
                Portfolio
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                Contacts
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                Feedback
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                Blog
              </SidenavLink>
            </SidenavLi>
          </SidenavUl>
        </SidenavNavigation>
      </SidenavContent>
    </SidenavContainer>,
    document.querySelector("#sidenav")
  );
};

const mapStateToProps = createStructuredSelector({
  sidenavCondition: selectSidenavHidden
});

export default connect(mapStateToProps, { toggleSideNav })(Sidenav);
