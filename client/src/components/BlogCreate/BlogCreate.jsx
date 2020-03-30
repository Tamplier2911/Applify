// import "./BlogCreate.scss";
import React from "react";

// components
import CreateUpdateBlogpost from "../CreateUpdateBlogpost/CreateUpdateBlogpost";

// JS Rendering CSS
import { BlogCreateContainer } from "./BlogCreateStyles";

const BlogCreate = () => {
  return (
    <BlogCreateContainer>
      <CreateUpdateBlogpost method="POST" />
    </BlogCreateContainer>
  );
};

export default BlogCreate;
