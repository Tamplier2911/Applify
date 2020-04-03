// import "./Header.scss";
import React, { Fragment } from "react";

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
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinksWrapper>
          {isLogged ? (
            <HeaderLogout onClick={() => logUserOutStart()}>
              {headerLogOut}
            </HeaderLogout>
          ) : (
            <Fragment>
              <HeaderLink to="/authorization">{headerLogIn}</HeaderLink> /{" "}
              <HeaderLink to="/authorization">{headerSignUp}</HeaderLink>
            </Fragment>
          )}
        </HeaderLinksWrapper>
        <HeaderLogoLink to="/">
          <HeaderLogoSVG />
          {/* <HeaderLogoImage
            src={logo}
            alt="logo in shape of rocket"
          ></HeaderLogoImage> */}
        </HeaderLogoLink>
        <HeaderMenu onClick={toggleSideNav} />
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
