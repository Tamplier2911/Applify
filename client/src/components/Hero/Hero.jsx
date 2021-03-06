// import "./Hero.scss";
import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectCurrentTheme } from "../../redux/theme/theme.selectors";

// components
import Square from "../Square/Square";

// JS Rendering CSS
import {
  HeroContainer,
  HeroActiveCTA,
  HeroActiveCTALink,
  HeroContent,
  HeroTextbox,
  HeroHeader,
  HeroText,
  HeroPassiveCTA,
} from "./HeroStyles";

// component constants
import { squares, ctaOptions } from "./HeroSquaresConstants";
import heroData from "./HeroConstants";

// get window dimensions
import getWindowDimensions from "../../utils/WindowCaptions/getWindowDimensions";
// get device value
import getDeviceValue from "../../utils/WindowCaptions/getDeviceValue";
// debouncer
import { debounce } from "../../utils/Debounce/debounce";

const Hero = ({ lang, theme }) => {
  const currentData = heroData[lang];
  const { companyName, companySlogan, companyCTA } = currentData;

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { width } = windowDimensions;

  useEffect(() => {
    const debounced = debounce(
      () => setWindowDimensions(getWindowDimensions()),
      250
    );
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
    // const handleResize = () => setWindowDimensions(getWindowDimensions());
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  // get divice value
  const device = getDeviceValue(width);

  return (
    <HeroContainer theme={theme} data-test="hero">
      {device === "desktop"
        ? squares[theme].map((obj) => {
            return <Square key={obj.id} options={obj} />;
          })
        : null}
      <HeroActiveCTA data-test="hero-cta">
        <HeroActiveCTALink to="/contacts">
          <Square options={ctaOptions[theme]} text={companyCTA} />
        </HeroActiveCTALink>
      </HeroActiveCTA>
      <HeroContent data-test="hero-content">
        <HeroTextbox animateIn={"bounceInRight"} animateOnce={true}>
          <HeroHeader>{companyName}</HeroHeader>
          <HeroText>{companySlogan}</HeroText>
        </HeroTextbox>
        <HeroPassiveCTA data-test="hero-cta" to="/contacts" theme={theme}>
          {companyCTA}
        </HeroPassiveCTA>
      </HeroContent>
    </HeroContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  theme: selectCurrentTheme,
});

export default connect(mapStateToProps)(Hero);
