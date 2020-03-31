// import "./BlogPost.scss";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectUserObject } from "../../redux/auth/auth.selectors";
import { openModal } from "../../redux/modal/modal.actions";
import {
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  likeOneBlogpostLocally,
  dislikeOneBlogpostLocally
} from "../../redux/blogs/blogs.actions";
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
  BlogpostTheme,
  BlogpostLikes,
  BlogpostLikesCount,
  BlogpostLikesImage,
  BlogpostLikeSVG,
  BlogPostImgCont,
  BlogPostImg,
  BlogPostContent,
  BlogPostContentTitle,
  BlogPostContentParagraph
} from "./BlogPostStyles";

const BlogPost = ({
  match,
  blogObject,
  user,
  openModal,
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  likeOneBlogpostLocally,
  dislikeOneBlogpostLocally
}) => {
  const {
    _id,
    likes,
    image,
    createdAt,
    title,
    theme,
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

  const parseBlogData = (content = "") => {
    const blocks = {};

    content
      .replace(/\r?\n|\r/g, " ")
      .split("%BLOCK%")
      .filter(el => el !== "" && el !== " " && el !== "  ")
      .forEach((str, i) => (blocks[i] = str));

    return blocks;
  };
  const data = parseBlogData(content);
  console.log(data);
  Object.values(data).forEach(string => {
    let arr = string.split(" ").filter(el => el !== "");
    console.log(arr);
  });

  // like funcitonality
  const { likedBlogposts } = user;
  const isLiked = likedBlogposts && likedBlogposts.includes(_id) ? 1 : 0;

  // get slot and index for local like / dislike
  const { id } = match && match.params ? match.params : {};
  const splitedId = id.split("-");
  const slot = splitedId[1];
  const index = splitedId[2];

  const onLikeClick = e => {
    e.preventDefault();
    if (!user.id)
      return openModal({
        header: "Unfortunate!",
        content: "You have to sign in, in order to like a blog post."
      });
    isLiked
      ? dislikeOneBlogpostStart(_id) &&
        dislikeOneBlogpostLocally({
          slot: slot,
          index: index,
          blogpostId: _id
        })
      : likeOneBlogpostStart(_id) &&
        likeOneBlogpostLocally({ slot: slot, index: index, blogpostId: _id });
  };

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
        <BlogpostTheme>{theme}</BlogpostTheme>
        <BlogpostLikes>
          <BlogpostLikesCount>{likes}</BlogpostLikesCount>
          <BlogpostLikesImage onClick={e => onLikeClick(e)}>
            <BlogpostLikeSVG liked={isLiked} />
          </BlogpostLikesImage>
        </BlogpostLikes>
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
  blogObject: selectAllBlogpostsAsObject(
    ownProps.match.params.id.split("-")[0]
  )(state),
  user: selectUserObject(state)
});

export default withRouter(
  connect(mapStateToProps, {
    openModal,
    likeOneBlogpostStart,
    dislikeOneBlogpostStart,
    likeOneBlogpostLocally,
    dislikeOneBlogpostLocally
  })(BlogPost)
);
