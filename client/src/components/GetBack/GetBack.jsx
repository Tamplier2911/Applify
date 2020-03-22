// import "./GetBack.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// JS Rendering CSS
import { GetBackContainer, GetBackSVG } from "./GetBackStyles";

const GetBack = ({ history, path }) => {
  return (
    <GetBackContainer onClick={() => history.push(`${path}`)}>
      <GetBackSVG />
    </GetBackContainer>
  );
};

export default withRouter(GetBack);
