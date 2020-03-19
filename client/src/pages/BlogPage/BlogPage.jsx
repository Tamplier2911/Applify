// import "./BlogPage.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import BlogsCollection from "../../components/BlogsCollection/BlogsCollection";
import BlogPost from "../../components/BlogPost/BlogPost";

// JS Rendering CSS
import { BlogPageContainer, BlogPagePlaceholder } from "./BlogPageStyles.js";

const BlogPage = ({ match }) => {
  return (
    <BlogPageContainer>
      <Switch>
        <Route exact path={`${match.path}`} component={BlogsCollection} />
        <Route path={`${match.path}/:id`} component={BlogPost} />
      </Switch>
      <BlogPagePlaceholder />
    </BlogPageContainer>
  );
};

export default BlogPage;
