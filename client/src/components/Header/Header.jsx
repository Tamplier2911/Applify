// import "./Header.scss";
import React from "react";

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

const Header = ({ toggleSideNav }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinksWrapper>
          <HeaderLink to="/">Log In</HeaderLink> /{" "}
          <HeaderLink to="/">Sign Up</HeaderLink>
        </HeaderLinksWrapper>
        <HeaderMenu onClick={toggleSideNav} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSideNav })(Header);
