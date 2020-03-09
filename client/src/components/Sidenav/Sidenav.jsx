// import "./Sidenav.scss";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
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

// component constants
import sidenavData from "../../utils/ComponentSidenavConstants/componentSidenavConstants";

// temporary data object
const data = {
  name: "Ulka Simone MohantyUlka Simone MohantyUlka Simone Mohanty",
  email: "ulkasimone@gmail.comulkasimone@gmail.comulkasimone@gmail.com",
  photo: "https://my-hit.org/storage/1967587_210x300x50x2.jpg"
};

// temporary user logged condition
const logged = true;

const Sidenav = ({ sidenavCondition, toggleSideNav, lang }) => {
  const { name, email, photo } = data;
  const currentData = sidenavData[lang];
  const {
    sidenavProfile,
    sidenavLogOut,
    sidenavLogIn,
    sidenavHome,
    sidenavResume,
    sidenavPortfolio,
    sidenavContacts,
    sidenavFeedback,
    sidenavBlog
  } = currentData;

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
                <SidenavUserLinks to="/profile" onClick={toggleSideNav}>
                  {sidenavProfile}
                </SidenavUserLinks>
                <SidenavUserLinks to="/" onClick={toggleSideNav}>
                  {sidenavLogOut}
                </SidenavUserLinks>
              </SidenavUserData>
            </Fragment>
          ) : (
            <SidenavUserData>
              <SidenavUserLinks to="/authorization" onClick={toggleSideNav}>
                {sidenavLogIn}
              </SidenavUserLinks>
            </SidenavUserData>
          )}
        </SidenavHero>
        <SidenavNavigation>
          <SidenavUl>
            <SidenavLi>
              <SidenavLink to="/" onClick={toggleSideNav}>
                {sidenavHome}
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/resume" onClick={toggleSideNav}>
                {sidenavResume}
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/portfolio" onClick={toggleSideNav}>
                {sidenavPortfolio}
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/contacts" onClick={toggleSideNav}>
                {sidenavContacts}
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/feedback" onClick={toggleSideNav}>
                {sidenavFeedback}
              </SidenavLink>
            </SidenavLi>
            <SidenavLi>
              <SidenavLink to="/blog" onClick={toggleSideNav}>
                {sidenavBlog}
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
  sidenavCondition: selectSidenavHidden,
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { toggleSideNav })(Sidenav);
