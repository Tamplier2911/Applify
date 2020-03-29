import "./BlogUpdate.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllBlogpostsAsObject } from "../../redux/blogs/blogs.selectors";

// components
import GetBack from "../GetBack/GetBack";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";

// JS Rendering CSS
import {} from "./BlogUpdateStyles";

// component constants

const BlogUpdate = ({ blogObject }) => {
  // author
  const { _id, image, likes, createdAt, title, theme, content } = blogObject
    ? blogObject
    : {};

  const blogImg = getImageRelativePath(image ? image : "");
  const blogDate = transformDateToLocaleString(
    createdAt ? createdAt : new Date()
  );

  return blogObject ? (
    <div>
      <div>ID: {_id}</div>
      <div>Likes: {likes}</div>
      <div>Date: {blogDate}</div>
      <div>Title: {title}</div>
      <div>Theme: {theme}</div>
      <div
        style={{
          width: "100%",
          height: "20rem",
          boxShadow: `0rem 0rem .8rem var(--cl-primary)`
        }}
      >
        <img
          src={blogImg}
          alt="happy user"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover"
          }}
        ></img>
      </div>
      <div>Content: {content}</div>
      <GetBack path={`/profile/blogs`} />
    </div>
  ) : (
    <div>Object with that id not found.</div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  blogObject: selectAllBlogpostsAsObject(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(BlogUpdate));
