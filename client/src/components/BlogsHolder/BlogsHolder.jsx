// import './BlogsHolder.scss';
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { loadAllBlogpostsStart } from "../../redux/blogs/blogs.actions";
import {
  selectAllBlogposts,
  selectIsLoading
} from "../../redux/blogs/blogs.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import CollectionForHolder from "../CollectionForHolder/CollectionForHolder";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

// data formaters
import { simpleBlogsSearch } from "../../utils/DataTransformations/simpleSearches";

// JS Rendering CSS
import {
  BlogsHolderContainer,
  BlogsHolderInputBarContainer
} from "./BlogsHolderStyles";

// component constants
import blogsHolderData from "../../utils/ComponentBlogsHolderConstants/componentBlogsHolderConstants";

// buff collection for holder with spinner
const CollectionForHolderWithSpinner = WithSpinnerHOC(CollectionForHolder);

const BlogsHolder = ({
  lang,
  history,
  loadAllBlogpostsStart,
  blogposts,
  isLoading
}) => {
  useEffect(() => {
    if (!blogposts.length) {
      loadAllBlogpostsStart();
    }
  }, [loadAllBlogpostsStart, blogposts.length]);

  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;
  const onInputChange = e => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const redirectToCreateBlogpost = () => {
    history.push("/profile/blogs/create");
  };

  const blogsArray = simpleBlogsSearch(blogposts, search.toLowerCase());

  const {
    blogsHolderTitle,
    blogsHolderButton,
    blogsHolderSearch
  } = blogsHolderData[lang];

  return (
    <BlogsHolderContainer>
      <Button
        type="button"
        value={blogsHolderButton}
        click={redirectToCreateBlogpost}
      />
      <BlogsHolderInputBarContainer>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={search}
          name="search"
          label={blogsHolderSearch}
          type="text"
        />
      </BlogsHolderInputBarContainer>
      <CollectionHolder
        lang={lang}
        title={blogsHolderTitle}
        refresher={1}
        cb={() => loadAllBlogpostsStart()}
      >
        <CollectionForHolderWithSpinner
          isLoading={isLoading}
          dataCollection={blogsArray}
        >
          <BlogCard />
        </CollectionForHolderWithSpinner>
      </CollectionHolder>
    </BlogsHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  blogposts: selectAllBlogposts,
  isLoading: selectIsLoading
});

export default withRouter(
  connect(mapStateToProps, { loadAllBlogpostsStart })(BlogsHolder)
);
