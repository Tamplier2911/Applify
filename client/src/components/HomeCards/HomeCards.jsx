// import "./HomeCards.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import Card from "../Card/Card";

// JS Rendering CSS
import { HomeCardContainer } from "./HomeCardsStyles";

// component constats
import homeCardsData from "./HomeCardConstants";

export const HomeCards = ({ lang }) => {
  const currentData = homeCardsData[lang];
  return (
    <HomeCardContainer>
      {currentData.map((card) => {
        const { icon, title, text, gradient, svg, id } = card;
        return (
          <Card
            icon={icon}
            title={title}
            text={text}
            gradient={gradient}
            key={id}
            id={id}
            SVG={svg}
          />
        );
      })}
    </HomeCardContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    lang: selectCurrentLanguage,
  });

export default connect(mapStateToProps)(HomeCards);
