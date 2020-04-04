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

  // const getScrollPoss = () => {
  //   const { scrollX, scrollY } = window;
  //   const limit = document.body.offsetHeight - window.innerHeight;

  //   const x = Math.floor(scrollX / (limit / 100));
  //   const y = Math.floor(scrollY / (limit / 100));

  //   return {
  //     x: x ? x : 0,
  //     y: y ? y : 0,
  //   };
  // };
  // const [ScrollPosition, setScrollPosition] = useState(getScrollPoss());
  // const { y } = ScrollPosition;

  // useEffect(() => {
  //   window.scrollTo(0, 1);
  //   const handleScroll = () => setScrollPosition(getScrollPoss());
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const shadow = y === 0 ? 0 : 1;

  // animate resume, diff blocks appear from diff side

  // make portfolio apear just like form
  // make gallery apear on scroll

  // make feed backs apear one by one from diff sides
  // fix bug with loading

  // think of some cool animation for blog

  // make profile blocks apear from diff sides

  return (
    <HeaderContainer shadow={1}>
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
