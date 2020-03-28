// import "./BlogPostView.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserObject } from "../../redux/auth/auth.selectors";
import {
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  likeOneBlogpostLocally,
  dislikeOneBlogpostLocally
} from "../../redux/blogs/blogs.actions";
import { openModal } from "../../redux/modal/modal.actions";

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

// data transformations
import transformDateToLocaleString from "../../utils/DataTransformations/transformDateToLocaleString";
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";

const BlogPostView = ({
  blog,
  user,
  pos,
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  likeOneBlogpostLocally,
  dislikeOneBlogpostLocally,
  openModal,
  slot,
  index
}) => {
  const { _id, title, theme, createdAt, likes, image } = blog ? blog : {};
  const { likedBlogposts } = user;

  const big = [0, 3, 4];
  const isBig = big.includes(pos) ? 1 : 0;

  const isLiked = likedBlogposts && likedBlogposts.includes(_id) ? 1 : 0;

  const blogImg = getImageRelativePath(image ? image : "");
  const blogDate = transformDateToLocaleString(
    createdAt ? createdAt : new Date()
  );

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
    <BlogViewContainer to={`blog/${_id}-${slot}-${index}`} big={isBig}>
      <BlogViewImg alt="blog post presentation" src={`${blogImg}`} />
      <BlogViewContent>
        <BlogViewContentWrap>
          <BlogViewContentTheme>{theme}</BlogViewContentTheme>
          <BlogViewContentTitle>{title}</BlogViewContentTitle>
          <BlogViewContentDateWrap>
            <BlogViewContentDate>{blogDate}</BlogViewContentDate>
            <BlogViewContentLikeWrap onClick={e => onLikeClick(e)}>
              <BlogViewContentLike>{likes}</BlogViewContentLike>
              <BlogViewContentLikeSVG liked={isLiked} />
            </BlogViewContentLikeWrap>
          </BlogViewContentDateWrap>
        </BlogViewContentWrap>
      </BlogViewContent>
    </BlogViewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUserObject
});

export default connect(mapStateToProps, {
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  likeOneBlogpostLocally,
  dislikeOneBlogpostLocally,
  openModal
})(BlogPostView);
