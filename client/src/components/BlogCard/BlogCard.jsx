// import "./BlogCard.scss";
import React from "react";
import PropTypes from "prop-types";

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
    <BlogCardContainer
      img={blogImg}
      animateIn={"flipInY"}
      animateOnce={true}
      data-test="blog-card"
    >
      <BlogCardHeader data-test="blog-card-header">
        <BlogCardHeaderTitle>{title}</BlogCardHeaderTitle>
        <BlogCardHeaderTheme>{theme}</BlogCardHeaderTheme>
        <BlogCardHeaderDate>{blogDate}</BlogCardHeaderDate>
      </BlogCardHeader>
      <BlogCardBody data-test="blog-card-body">
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
      <BlogCardControlls data-test="blog-card-controls">
        <Button
          type="button"
          value={blogCardDelete}
          click={() => deleteOneBlogpostStart(_id)}
          data-test="blog-card-button"
        />
        <BlogCardControllsLink
          to={`/profile/blogs/${_id}`}
          data-test="blog-card-link"
        >
          {blogCardUpdate}
        </BlogCardControllsLink>
      </BlogCardControlls>
    </BlogCardContainer>
  );
};

BlogCard.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    theme: PropTypes.string,
    title: PropTypes.string,
    _id: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { deleteOneBlogpostStart })(BlogCard);
