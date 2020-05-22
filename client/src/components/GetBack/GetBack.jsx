// import "./GetBack.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// JS Rendering CSS
import { GetBackContainer, GetBackSVG } from "./GetBackStyles";

const GetBack = ({ history, path }) => {
  return (
    <GetBackContainer
      data-test="get-back"
      onClick={() => history.push(`${path}`)}
    >
      <GetBackSVG data-test="get-back-svg" />
    </GetBackContainer>
  );
};

export default withRouter(GetBack);
