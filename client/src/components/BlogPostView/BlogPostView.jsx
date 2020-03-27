// import "./BlogPostView.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserObject } from "../../redux/auth/auth.selectors";
import {
  likeOneBlogpostStart,
  dislikeOneBlogpostStart
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

// image: "uploads/images/posts/default.jpg"
// likes: 0
// createdAt: "2020-03-27T17:01:02.868Z"
// title: "Lorem ipsum dolor sit amet."
// theme: "JavaScript / React"
// content: ""%HEADER%Lorem, possimus debitis.%CONTENT%""
// author:
// photo: "uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg"
// _id: "5e6e618672e9151d503701ed"
// name: "Artyom Nikolaiev"

// for likes user object may have or may not
// likedBlogposts: (2) ["5e7132b79ce13d35d83cf151", "5e7132b79ce13d35d83cf153"]

const BlogPostView = ({
  blog,
  user,
  pos,
  likeOneBlogpostStart,
  dislikeOneBlogpostStart,
  openModal
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
    isLiked ? dislikeOneBlogpostStart(_id) : likeOneBlogpostStart(_id);
  };

  // 1.
  // In order to not re-fetch both blogpost and user object
  // to reflect like changes and take off some server loads
  // since like applied anyway due to endpoint <----
  // implement function on clinet side, that going to reflect like
  // and likes increment in whatever blog post user performs "like" LOCALLY
  // then, whenever user re-fetches blogs, data will be alrady updated.

  // 2.
  // Find way and mplement box placeholders for non-yet created blogs
  // so grid looks sophisticated.

  // 3.
  // Create and style blogpost card component, implement create, update
  // delete functionality.

  return (
    <BlogViewContainer to={`blog/${_id}`} big={isBig}>
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
  openModal
})(BlogPostView);
