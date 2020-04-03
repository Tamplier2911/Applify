// import "./BlogPost.scss";
import React from "react";
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
import parseBlogData from "../../utils/DataTransformations/blogContentTransformations";

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
  BlogPostContentBlock,
  BlogPostContentTitle,
  BlogPostContentParagraph,
  BlogPostContentLink,
  BlogPostContentListUl,
  BlogPostContentListItem,
  BlogPostContentListSpan,
  BlogPostContentCode,
  BlogPostContentCodeDiv
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

  // parse blog content
  const blocks = parseBlogData(content);

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
        {blocks.map((block, i) => {
          const {
            headerSet,
            paragraphSet,
            linkSet,
            listItemSet,
            codeSet
          } = block;
          return (
            <BlogPostContentBlock key={i}>
              {headerSet.length
                ? headerSet.map((header, i) => {
                    return (
                      <BlogPostContentTitle key={i}>
                        {header}
                      </BlogPostContentTitle>
                    );
                  })
                : null}
              {paragraphSet.length
                ? paragraphSet.map((parahraph, i) => {
                    return (
                      <BlogPostContentParagraph key={i}>
                        {parahraph}
                      </BlogPostContentParagraph>
                    );
                  })
                : null}
              {linkSet.length
                ? linkSet.map((link, i) => {
                    const splitedLink = link.split(":");
                    const url = splitedLink[0];
                    const text = splitedLink[1];
                    return (
                      <BlogPostContentLink
                        href={`https://${url}`}
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {text}
                      </BlogPostContentLink>
                    );
                  })
                : null}
              {listItemSet.length ? (
                <BlogPostContentListUl>
                  {listItemSet.map((listItem, i) => {
                    return (
                      <BlogPostContentListItem key={i}>
                        <BlogPostContentListSpan>
                          &#x25cf;
                        </BlogPostContentListSpan>
                        <BlogPostContentListSpan>
                          {listItem}
                        </BlogPostContentListSpan>
                      </BlogPostContentListItem>
                    );
                  })}
                </BlogPostContentListUl>
              ) : null}

              {codeSet.length ? (
                <BlogPostContentCode>
                  {codeSet.map((code, i) => {
                    return (
                      <BlogPostContentCodeDiv key={i} startsWith={code[0]}>
                        {code}
                      </BlogPostContentCodeDiv>
                    );
                  })}
                </BlogPostContentCode>
              ) : null}
            </BlogPostContentBlock>
          );
        })}
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
