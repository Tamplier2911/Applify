// import './BlogsHolder.scss';
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
// import { loadBlogsStart } from "../../redux/blogs/blogs.actions";
// import {
//   selectAllLoadedFeeds,
//   selectIsLoading
// } from "../../redux/blogs/blogs.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
// import CollectionForHolder from
import Button from "../Button/Button";

// JS Rendering CSS
import { BlogsHolderContainer } from "./BlogsHolderStyles";

// component constants
import blogsHolderData from "../../utils/ComponentBlogsHolderConstants/componentBlogsHolderConstants";

const BlogsHolder = ({ lang, history }) => {
  useEffect(() => {}, []);

  const redirectToCreateBlogpost = () => {
    history.push("/");
  };

  const { blogsHolderTitle, blogsHolderButton } = blogsHolderData[lang];

  return (
    <BlogsHolderContainer>
      <Button
        type="button"
        value={blogsHolderButton}
        click={redirectToCreateBlogpost}
      />
      <CollectionHolder
        lang={lang}
        title={blogsHolderTitle}
        refresher={1}
        cb={() => {}}
      >
        <div>Blogs Collection</div>
      </CollectionHolder>
    </BlogsHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default withRouter(connect(mapStateToProps)(BlogsHolder));
