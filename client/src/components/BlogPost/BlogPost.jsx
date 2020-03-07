// import "./BlogPost.scss";
import React from "react";

// router
import { withRouter } from "react-router-dom";

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
  BlogPostContentParagraph,
  BlogPostBackButton,
  BlogPostBackButtonSVG
} from "./BlogPostStyles";

// DATA SAMPLE
const dataObjectSample = {
  blogTitle: "Why You Should Start Learning Code TODAY!",
  author: {
    authorName: "Mina Yu",
    authorImage: "https://bit.ly/2TseDz2"
  },
  blogDate: new Date("December 10, 2020 03:24:00"),
  content: {
    contentTitle: "Lorem ipsum dolor sit amet consectetur Cupiditate?",
    contentText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam facilis officiis amet, cumque omnis ullam illo libero maiores unde, distinctio aspernatur quasi corrupti necessitatibus explicabo modi quis, possimus debitis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam facilis officiis amet, cumque omnis ullam illo libero maiores unde, distinctio aspernatur quasi corrupti necessitatibus explicabo modi quis, possimus debitis."
  }
};

const BlogPost = ({ history }) => {
  const {
    blogTitle,
    author: { authorName, authorImage },
    blogDate,
    content: { contentTitle, contentText }
  } = dataObjectSample;

  const date = blogDate.toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <BlogPostContainer>
      <BlogPostHeader>
        <BlogPostTitle>{blogTitle}</BlogPostTitle>
        <BlogPostAuthor>
          <BlogPostAuthorImgCont>
            <BlogPostAuthorImg src={authorImage} alt="happy author" />
          </BlogPostAuthorImgCont>
          <BlogPostAuthorName>{authorName}</BlogPostAuthorName>
          <BlogPostDate>{date}</BlogPostDate>
        </BlogPostAuthor>
      </BlogPostHeader>
      <BlogPostImgCont>
        <BlogPostImg alt="blog representation" src="https://bit.ly/2VLGiN2" />
      </BlogPostImgCont>
      <BlogPostContent>
        <BlogPostContentTitle>{contentTitle}</BlogPostContentTitle>
        <BlogPostContentParagraph>{contentText}</BlogPostContentParagraph>
        <BlogPostContentTitle>{contentTitle}</BlogPostContentTitle>
        <BlogPostContentParagraph>{contentText}</BlogPostContentParagraph>
        <BlogPostContentTitle>{contentTitle}</BlogPostContentTitle>
        <BlogPostContentParagraph>{contentText}</BlogPostContentParagraph>
      </BlogPostContent>
      <BlogPostBackButton onClick={() => history.push("/blog")}>
        <BlogPostBackButtonSVG />
      </BlogPostBackButton>
    </BlogPostContainer>
  );
};

export default withRouter(BlogPost);
