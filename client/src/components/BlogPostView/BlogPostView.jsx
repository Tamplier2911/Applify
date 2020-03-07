// import "./BlogPostView.scss";
import React from "react";

// JS Rendering CSS
import {
  BlogViewContainer,
  BlogViewImg,
  BlogViewContent,
  BlogViewContentWrap,
  BlogViewContentTheme,
  BlogViewContentTitle,
  BlogViewContentDateWrap,
  BlogViewContentDate,
  BlogViewContentLikeWrap,
  BlogViewContentLike,
  BlogViewContentLikeSVG
} from "./BlogPostViewStyles";

const BlogPostView = ({ id, title, theme, date, like, image, liked, pos }) => {
  const big = [0, 3, 4];
  const isBig = big.includes(pos) ? 1 : 0;
  const isLiked = liked ? 1 : 0;
  const parsedDate = date.toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <BlogViewContainer to={`blog/${id}`} big={isBig}>
      <BlogViewImg alt="blog post presentation" src={`${image}`} />
      <BlogViewContent>
        <BlogViewContentWrap>
          <BlogViewContentTheme>{theme}</BlogViewContentTheme>
          <BlogViewContentTitle>{title}</BlogViewContentTitle>
          <BlogViewContentDateWrap>
            <BlogViewContentDate>{parsedDate}</BlogViewContentDate>
            <BlogViewContentLikeWrap>
              <BlogViewContentLike>{like}</BlogViewContentLike>
              <BlogViewContentLikeSVG liked={isLiked} />
            </BlogViewContentLikeWrap>
          </BlogViewContentDateWrap>
        </BlogViewContentWrap>
      </BlogViewContent>
    </BlogViewContainer>
  );
};

export default BlogPostView;
