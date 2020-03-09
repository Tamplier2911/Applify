// import "./Header.scss";
import React, { Fragment } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// import logo from "../../assets/png/logo-min.png";

// JS Rendering CSS
import {
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  HeaderLinksWrapper,
  HeaderLink,
  HeaderLogoLink,
  HeaderLogoSVG
} from "./HeaderStyles";

// Component Constants
import headerData from "../../utils/ComponentHeaderConstants/componentHeaderConstants";

// temp logg condition
const logged = true;

const Header = ({ toggleSideNav, lang }) => {
  const currentData = headerData[lang];
  const { headerLogOut, headerLogIn, headerSignUp } = currentData;

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinksWrapper>
          {logged ? (
            <HeaderLink to="/">{headerLogOut}</HeaderLink>
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
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { toggleSideNav })(Header);
