// import "./BlogPage.scss";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentSet,
  selectAllSets,
  selectCurrentSlot,
  selectAllSlots,
  selectIsLoading,
} from "../../redux/blogs/blogs.selectors";
import { loadAllBlogpostsStart } from "../../redux/blogs/blogs.actions";

// components
import BlogsCollection from "../../components/BlogsCollection/BlogsCollection";
import BlogPost from "../../components/BlogPost/BlogPost";
import WithSpinnerHOC from "../../components/WithSpinnerHOC/WithSpinnerHOC";

// JS Rendering CSS
import { BlogPageContainer, BlogPagePlaceholder } from "./BlogPageStyles.js";

// buff blogs collection with spinner
const BlogsCollectionWithSpinner = WithSpinnerHOC(BlogsCollection);

const BlogPage = ({
  match,
  loadAllBlogpostsStart,
  isLoading,
  currentDataSet,
  allDataSets,
  currentDataSlot,
  allDataSlots,
}) => {
  useEffect(() => {
    if (!currentDataSet.length) {
      loadAllBlogpostsStart();
    }
  }, [loadAllBlogpostsStart, currentDataSet.length]);

  const blogsData = {
    currentDataSet,
    allDataSets,
    currentDataSlot,
    allDataSlots,
  };

  return (
    <BlogPageContainer data-test="blog-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <BlogsCollectionWithSpinner
              isLoading={isLoading}
              blogsData={blogsData}
            />
          )}
          data-test="blog-page-route-cl"
        />
        <Route
          path={`${match.path}/:id`}
          component={BlogPost}
          data-test="blog-page-route-id"
        />
      </Switch>
      <BlogPagePlaceholder data-test="blog-page-placeholder" />
    </BlogPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentDataSet: selectCurrentSet,
  allDataSets: selectAllSets,
  currentDataSlot: selectCurrentSlot,
  allDataSlots: selectAllSlots,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, { loadAllBlogpostsStart })(BlogPage);
