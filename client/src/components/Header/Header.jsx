// import "./Header.scss";
import React, { Fragment } from "react";
// import React, { Fragment, useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectIsLogged } from "../../redux/auth/auth.selectors";
import { logUserOutStart } from "../../redux/auth/auth.actions";

// import logo from "../../assets/png/logo-min.png";

// JS Rendering CSS
import {
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  HeaderLinksWrapper,
  HeaderLink,
  HeaderLogout,
  HeaderLogoLink,
  HeaderLogoSVG,
} from "./HeaderStyles";

// Component Constants
import headerData from "./HeaderConstants";

const Header = ({ toggleSideNav, lang, isLogged, logUserOutStart }) => {
  const currentData = headerData[lang];
  const { headerLogOut, headerLogIn, headerSignUp } = currentData;
  return (
    <HeaderContainer shadow={1} data-test="header">
      <HeaderContent>
        <HeaderLinksWrapper>
          {isLogged ? (
            <HeaderLogout
              data-test="header-logout-btn"
              onClick={() => logUserOutStart()}
            >
              {headerLogOut}
            </HeaderLogout>
          ) : (
            <Fragment>
              <HeaderLink data-test="header-login-link" to="/authorization">
                {headerLogIn}
              </HeaderLink>{" "}
              /{" "}
              <HeaderLink data-test="header-signup-link" to="/authorization">
                {headerSignUp}
              </HeaderLink>
            </Fragment>
          )}
        </HeaderLinksWrapper>
        <HeaderLogoLink data-test="header-logo-link" to="/">
          <HeaderLogoSVG />
          {/* <HeaderLogoImage
            src={logo}
            alt="logo in shape of rocket"
          ></HeaderLogoImage> */}
        </HeaderLogoLink>
        <HeaderMenu data-test="header-menu-btn" onClick={toggleSideNav} />
      </HeaderContent>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  isLogged: selectIsLogged,
});

export default connect(mapStateToProps, { toggleSideNav, logUserOutStart })(
  Header
);
