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
  AnimateWrapper,
  SidenavLink,
} from "./SidenavStyles";

// component constants
import sidenavData from "./SidenavConstants";

// component motions
import sidenavMotions from "./SidenavMotions.js";

const BuffedLink = ({ children, direction, delay }) => {
  const variants = sidenavMotions(delay);
  return (
    <AnimateWrapper
      initial="hidden"
      animate="visible"
      variants={variants[direction]}
    >
      {children ? children : null}
    </AnimateWrapper>
  );
};

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
      {sidenavCondition ? null : (
        <SidenavContent onClick={(e) => e.stopPropagation()}>
          <SidenavTheme
            onClick={() =>
              theme === "light" ? setThemeDark() : setThemeLight()
            }
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
                <BuffedLink direction="left" delay={0}>
                  <SidenavLink to="/" onClick={toggleSideNav}>
                    {sidenavHome}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
              {/* hide me later */}
              <SidenavLi>
                <BuffedLink direction="right" delay={0.2}>
                  <SidenavLink to="/resume" onClick={toggleSideNav}>
                    {sidenavResume}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
              {/* hide me later */}
              <SidenavLi>
                <BuffedLink direction="left" delay={0.4}>
                  <SidenavLink to="/portfolio" onClick={toggleSideNav}>
                    {sidenavPortfolio}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
              <SidenavLi>
                <BuffedLink direction="right" delay={0.6}>
                  <SidenavLink to="/contacts" onClick={toggleSideNav}>
                    {sidenavContacts}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
              <SidenavLi>
                <BuffedLink direction="left" delay={0.8}>
                  <SidenavLink to="/feedback" onClick={toggleSideNav}>
                    {sidenavFeedback}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
              <SidenavLi>
                <BuffedLink direction="right" delay={1}>
                  <SidenavLink to="/blog" onClick={toggleSideNav}>
                    {sidenavBlog}
                  </SidenavLink>
                </BuffedLink>
              </SidenavLi>
            </SidenavUl>
          </SidenavNavigation>
        </SidenavContent>
      )}
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
