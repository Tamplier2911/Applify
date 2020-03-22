// import './Refresher.scss'
import React from "react";

// JS Rendering CSS
import { RefresherContainer, RefresherSVG } from "./RefresherStyles";

const Refresher = ({ click }) => {
  return (
    <RefresherContainer>
      <RefresherSVG {...(click ? { onClick: () => click() } : {})} />
    </RefresherContainer>
  );
};

export default Refresher;
