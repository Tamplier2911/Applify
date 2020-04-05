// import "./Sidenav.scss";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";
import { logUserOutStart } from "../../redux/auth/auth.actions";
import {
  selectIsLogged,
  selectUserObject,
} from "../../redux/auth/auth.selectors";
import { setThemeDark, setThemeLight } from "../../redux/theme/theme.actions";
import { selectCurrentTheme } from "../../redux/theme/theme.selectors";

// JS Rendering CSS
import {
  SidenavContainer,
  SidenavContent,
  SidenavTheme,
  SidenavSunSVG,
  SidenavMoonSVG,
  SidenavHero,
  SidenavHeroImgContainer,
  SidenavImage,
  SidenavUserData,
  SidenavUserName,
  SidenavUserEmail,
  SidenavUserLinks,
  SidenavLogout,
  SidenavNavigation,
  SidenavUl,
  SidenavLi,
  SidenavLink,
} from "./SidenavStyles";

// component constants
import sidenavData from "./SidenavConstants";

const Sidenav = ({
  sidenavCondition,
  toggleSideNav,
  lang,
  isLogged,
  user,
  logUserOutStart,
  theme,
  setThemeDark,
  setThemeLight,
}) => {
  const { name, email, photo } = user;
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
    sidenavBlog,
  } = currentData;

  let image = "";
  if (process.env.NODE_ENV === "development" && photo) {
    image = `${process.env.REACT_APP_SERVE_IMAGE_DEV + "api/" + photo}`;
  } else if (photo) {
    image = `${"api/" + photo}`;
  }

  return ReactDOM.createPortal(
    <SidenavContainer hidden={sidenavCondition} onClick={toggleSideNav}>
      <SidenavContent onClick={(e) => e.stopPropagation()}>
        <SidenavTheme
          onClick={() => (theme === "light" ? setThemeDark() : setThemeLight())}
        >
          {theme === "light" ? <SidenavMoonSVG /> : <SidenavSunSVG />}
        </SidenavTheme>
        <SidenavHero>
          {isLogged ? (
            <Fragment>
              <SidenavHeroImgContainer>
                <SidenavImage src={image} alt="Happy user." />
              </SidenavHeroImgContainer>
              <SidenavUserData>
                <SidenavUserName>{name}</SidenavUserName>
                <SidenavUserEmail>{email}</SidenavUserEmail>
                <SidenavUserLinks to="/profile" onClick={toggleSideNav}>
                  {sidenavProfile}
                </SidenavUserLinks>
                <SidenavLogout
                  onClick={() => {
                    logUserOutStart();
                    toggleSideNav();
                  }}
                >
                  {sidenavLogOut}
                </SidenavLogout>
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
  lang: selectCurrentLanguage,
  isLogged: selectIsLogged,
  user: selectUserObject,
  theme: selectCurrentTheme,
});

export default connect(mapStateToProps, {
  toggleSideNav,
  logUserOutStart,
  setThemeDark,
  setThemeLight,
})(Sidenav);
