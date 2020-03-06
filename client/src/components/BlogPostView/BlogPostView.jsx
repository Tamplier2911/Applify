import "./BlogPostView.scss";
import React from "react";
import { Link } from "react-router-dom";

// JS Rendering CSS
import {} from "./BlogPostViewStyles";

// svg
import { ReactComponent as HartSVG } from "../../assets/svg/heart.svg";

const BlogPostView = ({ id, title, theme, date, like, image, liked, pos }) => {
  const big = [0, 3, 4];
  //   const small = [1001, 1002, 1005];

  /*
  <Link
      to={`${id}`}
      className={`blog-post-view ${big.includes(pos) ? "big" : "small"}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent , #0000007e 40%) ,url(${image})`
      }}>
  </Link>
  */

  return (
    <Link
      to={`blog/${id}`}
      className={`blog-post-view ${big.includes(pos) ? "big" : "small"}`}
    >
      <img
        className="blog-post-view__image"
        alt="blog post presentation"
        src={`${image}`}
      ></img>
      <div className="blog-post-view__content">
        <div className="blog-post-view__content--wrapper">
          <div className="blog-post-view__content--theme">{theme}</div>
          <h4 className="blog-post-view__content--title">{title}</h4>
          <div className="blog-post-view__content--date">
            <div className="blog-post-view__content--date-itself">
              {date.toLocaleString("en-us", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </div>
            <div className="blog-post-view__content--likewrap">
              <div className="blog-post-view__content--like">{like}</div>
              <HartSVG
                className={`blog-post-view__content--svg ${
                  liked ? "liked" : "none"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

/*
console.log(
    blogs[0].date.toLocaleString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  );
*/

export default BlogPostView;
