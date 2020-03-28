// import "./BlogPlaceholder.scss";
import React from "react";

// JS Rendering CSS
import {
  BlogPlaceholderContainer,
  BlogPlaceholderWrapper,
  BlogPlaceholderSVG
} from "./BlogPlaceholderStyles";

const BlogPlaceholder = ({ pos }) => {
  const big = [0, 3, 4];
  const isBig = big.includes(pos) ? 1 : 0;
  return (
    <BlogPlaceholderContainer big={isBig}>
      <BlogPlaceholderWrapper>
        <BlogPlaceholderSVG />
      </BlogPlaceholderWrapper>
    </BlogPlaceholderContainer>
  );
};

export default BlogPlaceholder;
