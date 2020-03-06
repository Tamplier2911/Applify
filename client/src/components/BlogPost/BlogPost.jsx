import "./BlogPost.scss";
import React from "react";

import { withRouter } from "react-router-dom";

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
    <section className="blog-post">
      <div className="blog-post__header">
        <h1 className="blog-post__header--text">{blogTitle}</h1>
        <div className="blog-post__header--author">
          <div className="blog-post__header--author-imgWrap">
            <img
              src={authorImage}
              className="blog-post__header--author-img"
              alt="happy author"
            ></img>
          </div>
          <div className="blog-post__header--author-name">{authorName}</div>
          <div className="blog-post__header--author-date">{date}</div>
        </div>
      </div>
      <div className="blog-post__image">
        <img
          className="blog-post__image--img"
          alt="blog representation"
          src="https://bit.ly/2VLGiN2"
        ></img>
      </div>
      <div className="blog-post__content">
        <h2 className="blog-post__content--title">{contentTitle}</h2>
        <p className="blog-post__content--paragraph">{contentText}</p>
        <h2 className="blog-post__content--title">{contentTitle}</h2>
        <p className="blog-post__content--paragraph">{contentText}</p>
        <h2 className="blog-post__content--title">{contentTitle}</h2>
        <p className="blog-post__content--paragraph">{contentText}</p>
      </div>
      <div
        className="blog-post__back-button"
        onClick={() => history.push("/blog")}
      >
        &#x2199;
      </div>
    </section>
  );
};

export default withRouter(BlogPost);
