// import './Refresher.scss'
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import { RefresherContainer, RefresherSVG } from "./RefresherStyles";

const Refresher = ({ click }) => {
  return (
    <RefresherContainer data-test="refresher">
      <RefresherSVG
        data-test="refresher-icon"
        {...(click ? { onClick: () => click() } : {})}
      />
    </RefresherContainer>
  );
};

Refresher.propTypes = {
  click: PropTypes.func,
};

export default Refresher;
