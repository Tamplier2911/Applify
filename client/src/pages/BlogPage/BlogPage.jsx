import "./BlogPage.scss";
import React from "react";

// components
import BlogsCollection from "../../components/BlogsCollection/BlogsCollection";

// JS Rendering CSS
import {} from "./BlogPageStyles.js";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <BlogsCollection />
      <div></div>
    </div>
  );
};

export default BlogPage;
