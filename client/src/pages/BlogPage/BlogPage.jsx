// import "./BlogPage.scss";
import React from "react";

// components
import BlogsCollection from "../../components/BlogsCollection/BlogsCollection";

// JS Rendering CSS
import { BlogPageContainer, BlogPagePlaceholder } from "./BlogPageStyles.js";

const BlogPage = () => {
  return (
    <BlogPageContainer>
      <BlogsCollection />
      <BlogPagePlaceholder />
    </BlogPageContainer>
  );
};

export default BlogPage;
