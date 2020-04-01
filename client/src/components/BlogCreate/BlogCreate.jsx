// import "./BlogCreate.scss";
import React from "react";

// components
import CreateUpdateBlogpost from "../CreateUpdateBlogpost/CreateUpdateBlogpost";
import BlogCreateRules from "../BlogCreateRules/BlogCreateRules";

// JS Rendering CSS
import { BlogCreateContainer } from "./BlogCreateStyles";

const BlogCreate = () => {
  return (
    <BlogCreateContainer>
      <BlogCreateRules />
      <CreateUpdateBlogpost method="POST" />
    </BlogCreateContainer>
  );
};

export default BlogCreate;
