// import "./BlogPlaceholder.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  BlogPlaceholderContainer,
  BlogPlaceholderWrapper,
  BlogPlaceholderSVG,
} from "./BlogPlaceholderStyles";

const BlogPlaceholder = ({ pos }) => {
  const big = [0, 3, 4];
  const isBig = big.includes(pos) ? 1 : 0;
  return (
    <BlogPlaceholderContainer big={isBig} data-test="blog-placeholder">
      <BlogPlaceholderWrapper data-test="blog-placeholder-wrap">
        <BlogPlaceholderSVG />
      </BlogPlaceholderWrapper>
    </BlogPlaceholderContainer>
  );
};

BlogPlaceholder.propTypes = {
  pos: PropTypes.number,
};

export default BlogPlaceholder;
