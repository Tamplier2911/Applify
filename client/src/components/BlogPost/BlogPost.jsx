// import "./BlogPost.scss";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectAllBlogpostsAsObject } from "../../redux/blogs/blogs.selectors";

// components
import GetBack from "../GetBack/GetBack";

// data formaters
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";
import formBlogpostData from "../../utils/DataTransformations/blogContentTransformations";

// JS Rendering CSS
import {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostTitle,
  BlogPostAuthor,
  BlogPostAuthorImgCont,
  BlogPostAuthorImg,
  BlogPostAuthorName,
  BlogPostDate,
  BlogPostImgCont,
  BlogPostImg,
  BlogPostContent,
  BlogPostContentTitle,
  BlogPostContentParagraph
} from "./BlogPostStyles";

// image: "uploads/images/posts/default.jpg"
// likes: 0
// createdAt: "2020-03-27T17:01:02.868Z"
// title: "Lorem ipsum dolor sit amet."
// theme: "JavaScript / React"
// content: ""%HEADER%Lorem ipsum dolor sit amet consectetur.."
// author:
// photo: "uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg"
// _id: "5e6e618672e9151d503701ed"
// name: "Artyom Nikolaiev"

// for likes user object may have or may not
// likedBlogposts: (2) ["5e7132b79ce13d35d83cf151", "5e7132b79ce13d35d83cf153"]

const BlogPost = ({ blogObject }) => {
  const {
    // _id,
    // likes,
    image,
    createdAt,
    title,
    // theme,
    content,
    author
  } = blogObject ? blogObject : {};

  const blogImg = getImageRelativePath(image ? image : "");
  const blogDate = transformDateToLocaleString(
    createdAt ? createdAt : new Date()
  );
  const authorImg = getImageRelativePath(author ? author.photo : "");

  const formatedContent = formBlogpostData(content ? content : "");
  // imageSet, linkSet - all arrays
  const { titleSet, contentSet } = formatedContent;

  const totalSets = Object.keys(titleSet).length;

  return (
    <BlogPostContainer>
      <BlogPostHeader>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostAuthor>
          <BlogPostAuthorImgCont>
            <BlogPostAuthorImg src={authorImg} alt="happy author" />
          </BlogPostAuthorImgCont>
          <BlogPostAuthorName>{author ? author.name : ""}</BlogPostAuthorName>
          <BlogPostDate>{blogDate}</BlogPostDate>
        </BlogPostAuthor>
      </BlogPostHeader>
      <BlogPostImgCont>
        <BlogPostImg alt="blog representation" src={blogImg} />
      </BlogPostImgCont>
      <BlogPostContent>
        {Array.from(new Array(totalSets ? totalSets : 0), (el, i) => i).map(
          i => {
            return (
              <Fragment key={i}>
                <BlogPostContentTitle>{titleSet[i]}</BlogPostContentTitle>
                <BlogPostContentParagraph>
                  {contentSet[i]}
                </BlogPostContentParagraph>
              </Fragment>
            );
          }
        )}
      </BlogPostContent>
      <GetBack path={`/blog`} />
    </BlogPostContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  blogObject: selectAllBlogpostsAsObject(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(BlogPost));
