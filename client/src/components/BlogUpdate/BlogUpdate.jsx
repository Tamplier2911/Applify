// import "./BlogUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllBlogpostsAsObject } from "../../redux/blogs/blogs.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// components
import GetBack from "../GetBack/GetBack";
import CreateUpdateBlogpost from "../CreateUpdateBlogpost/CreateUpdateBlogpost";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {
  BlogUpdateContainer,
  BlogUpdateData,
  BlogUpdateAuthor,
  BlogUpdateCredit,
  BlogUpdateName,
  BlogUpdateDate,
  BlogUpdateImgWrap,
  BlogUpdateImg,
  BlogUpdateLikes,
  BlogUpdateLikesCount,
  BlogUpdateSVGWrap,
  BlogUpdateSVG,
  BlogUpdateNotFound,
} from "./BlogUpdateStyles";

// component constants
import blogUpdateData from "./BlogUpdateConstants";

const BlogUpdate = ({ lang, blogObject }) => {
  // author
  const {
    _id,
    image,
    likes,
    createdAt,
    title,
    theme,
    content,
    author,
  } = blogObject ? blogObject : {};

  const blogImg = getImageRelativePath(image ? image : "");
  const blogDate = transformDateToLocaleString(
    createdAt ? createdAt : new Date()
  );

  const authorImg = getImageRelativePath(
    author && author.photo ? author.photo : ""
  );

  const updateData = { title, theme, content, _id };

  const { blogUpdateNotFound } = blogUpdateData[lang];

  return blogObject ? (
    <BlogUpdateContainer data-test="blog-update">
      <BlogUpdateData img={blogImg} data-test="blog-update-data">
        <BlogUpdateAuthor>
          <BlogUpdateCredit>
            <BlogUpdateName>
              {author && author.name ? author.name : ""}
            </BlogUpdateName>
            <BlogUpdateDate>{blogDate}</BlogUpdateDate>
          </BlogUpdateCredit>
          <BlogUpdateImgWrap>
            <BlogUpdateImg src={authorImg} alt="happy author" />
          </BlogUpdateImgWrap>
        </BlogUpdateAuthor>
        <BlogUpdateLikes>
          <BlogUpdateLikesCount>{likes}</BlogUpdateLikesCount>
          <BlogUpdateSVGWrap>
            <BlogUpdateSVG />
          </BlogUpdateSVGWrap>
        </BlogUpdateLikes>
      </BlogUpdateData>
      <CreateUpdateBlogpost method="PATCH" updateData={updateData} />
      <GetBack path={`/profile/blogs`} />
    </BlogUpdateContainer>
  ) : (
    <BlogUpdateNotFound data-test="blog-update-not-found">
      {blogUpdateNotFound}
    </BlogUpdateNotFound>
  );
};

const mapStateToProps = (state, ownProps) => ({
  blogObject: selectAllBlogpostsAsObject(ownProps.match.params.id)(state),
  lang: selectCurrentLanguage(state),
});

export default withRouter(connect(mapStateToProps)(BlogUpdate));
