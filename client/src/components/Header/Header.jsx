// import "./Header.scss";
import React, { Fragment } from "react";

// redux
import { connect } from "react-redux";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";

import logo from "../../assets/png/logo-min.png";

// JS Rendering CSS
import {
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  HeaderLinksWrapper,
  HeaderLink,
  HeaderLogoLink,
  HeaderLogoImage
} from "./HeaderStyles";

// temp logg condition
const logged = true;

const Header = ({ toggleSideNav }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinksWrapper>
          {logged ? (
            <HeaderLink to="/">Log Out</HeaderLink>
          ) : (
            <Fragment>
              <HeaderLink to="/">Log In</HeaderLink> /{" "}
              <HeaderLink to="/">Sign Up</HeaderLink>
            </Fragment>
          )}
        </HeaderLinksWrapper>
        <HeaderLogoLink to="/">
          <HeaderLogoImage
            src={logo}
            alt="logo in shape of rocket"
          ></HeaderLogoImage>
        </HeaderLogoLink>
        <HeaderMenu onClick={toggleSideNav} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSideNav })(Header);
