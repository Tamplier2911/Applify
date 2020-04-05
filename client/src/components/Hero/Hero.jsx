// import "./Hero.scss";
import React from "react";

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

const Hero = ({ lang, theme }) => {
  const currentData = heroData[lang];
  const { companyName, companySlogan, companyCTA } = currentData;

  return (
    <HeroContainer theme={theme}>
      {squares[theme].map((obj) => {
        return <Square key={obj.id} options={obj} />;
      })}
      <HeroActiveCTA>
        <HeroActiveCTALink to="/contacts">
          <Square options={ctaOptions[theme]} text={companyCTA} />
        </HeroActiveCTALink>
      </HeroActiveCTA>
      <HeroContent>
        <HeroTextbox animateIn={"bounceInRight"} animateOnce={true}>
          <HeroHeader>{companyName}</HeroHeader>
          <HeroText>{companySlogan}</HeroText>
        </HeroTextbox>
        <HeroPassiveCTA to="/contacts" theme={theme}>
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
