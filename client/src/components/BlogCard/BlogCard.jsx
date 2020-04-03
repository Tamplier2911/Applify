// import "./BlogCard.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteOneBlogpostStart } from "../../redux/blogs/blogs.actions";

// components
import Button from "../Button/Button";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  BlogCardContainer,
  BlogCardHeader,
  BlogCardHeaderTitle,
  BlogCardHeaderTheme,
  BlogCardHeaderDate,
  BlogCardBody,
  BlogCardBodyImgWrap,
  BlogCardBodyImg,
  BlogCardBodyName,
  BlogCardBodyLikes,
  BlogCardBodyAmount,
  BlogCardBodySvgWrap,
  BlogCardBodySVG,
  BlogCardControlls,
  BlogCardControllsLink,
} from "./BlogCardStyles";

// component constants
import blogCardData from "./BlogCardConstants";

const BlogCard = ({ data, lang, deleteOneBlogpostStart }) => {
  const { _id, image, likes, createdAt, title, theme, author } = data
    ? data
    : {};
  const { blogCardDelete, blogCardUpdate } = blogCardData[lang];

  const blogImg = getImageRelativePath(image ? image : "");
  const blogDate = transformDateToLocaleString(
    createdAt ? createdAt : new Date()
  );
  const authorImg = getImageRelativePath(author ? author.photo : "");

  return (
    <BlogCardContainer img={blogImg}>
      <BlogCardHeader>
        <BlogCardHeaderTitle>{title}</BlogCardHeaderTitle>
        <BlogCardHeaderTheme>{theme}</BlogCardHeaderTheme>
        <BlogCardHeaderDate>{blogDate}</BlogCardHeaderDate>
      </BlogCardHeader>
      <BlogCardBody>
        <BlogCardBodyImgWrap>
          <BlogCardBodyImg alt="happy author" src={authorImg} />
        </BlogCardBodyImgWrap>
        <BlogCardBodyName>{author ? author.name : ""}</BlogCardBodyName>
        <BlogCardBodyLikes>
          <BlogCardBodyAmount>{likes}</BlogCardBodyAmount>
          <BlogCardBodySvgWrap>
            <BlogCardBodySVG />
          </BlogCardBodySvgWrap>
        </BlogCardBodyLikes>
      </BlogCardBody>
      <BlogCardControlls>
        <Button
          type="button"
          value={blogCardDelete}
          click={() => deleteOneBlogpostStart(_id)}
        />
        <BlogCardControllsLink to={`/profile/blogs/${_id}`}>
          {blogCardUpdate}
        </BlogCardControllsLink>
      </BlogCardControlls>
    </BlogCardContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { deleteOneBlogpostStart })(BlogCard);
