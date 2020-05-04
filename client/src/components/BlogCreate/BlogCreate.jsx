// import "./BlogCreate.scss";
import React from "react";

// components
import CreateUpdateBlogpost from "../CreateUpdateBlogpost/CreateUpdateBlogpost";
import BlogCreateRules from "../BlogCreateRules/BlogCreateRules";

// JS Rendering CSS
import { BlogCreateContainer } from "./BlogCreateStyles";

const BlogCreate = () => {
  return (
    <BlogCreateContainer data-test="blog-create">
      <BlogCreateRules data-test="blog-create-rules" />
      <CreateUpdateBlogpost method="POST" data-test="blog-create-cub" />
    </BlogCreateContainer>
  );
};

export default BlogCreate;
