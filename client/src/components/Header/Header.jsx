// import "./Header.scss";
import React, { Fragment } from "react";

// redux
import { connect } from "react-redux";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";

// JS Rendering CSS
import {
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  HeaderLinksWrapper,
  HeaderLink
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
        <HeaderMenu onClick={toggleSideNav} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSideNav })(Header);
