// import './usersHolder.scss';
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { loadAllUsersStart } from "../../redux/users/users.actions";
import {
  selectAllUsers,
  selectUsersIsLoading
} from "../../redux/users/users.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import CollectionForHolder from "../CollectionForHolder/CollectionForHolder";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import FormInput from "../FormInput/FormInput";

// data transformation
import { simpleUserSearch } from "../../utils/DataTransformations/simpleSearches";

// JS Rendering CSS
import {
  UsersHolderContainer,
  UserHolderSearchBarContainer
} from "./UsersHolderStyles";

// component constants
import usersHolderData from "../../utils/ComponentUsersHolderConstants/componentUsersHolderConstants";

// buff collection for holder with spinner
const CollectionForHolderWithSpinner = WithSpinnerHOC(CollectionForHolder);

const UsersHolder = ({
  lang,
  history,
  loadAllUsersStart,
  users,
  isLoading
}) => {
  useEffect(() => {
    if (!users.length) {
      loadAllUsersStart();
    }
  }, [loadAllUsersStart, users.length]);

  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;

  const onInputChange = e => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const redirectToCreateUser = () => {
    history.push("/profile/users/create");
  };

  const usersArray = simpleUserSearch(users, search);

  const {
    usersHolderTitle,
    usersHolderButton,
    usersHolderSearch
  } = usersHolderData[lang];

  return (
    <UsersHolderContainer>
      <Button
        type="button"
        value={usersHolderButton}
        click={redirectToCreateUser}
      />
      <UserHolderSearchBarContainer>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={search}
          name="search"
          label={usersHolderSearch}
          type="text"
        />
      </UserHolderSearchBarContainer>
      <CollectionHolder
        lang={lang}
        title={usersHolderTitle}
        refresher={1}
        cb={() => loadAllUsersStart()}
      >
        <CollectionForHolderWithSpinner
          isLoading={isLoading}
          dataCollection={usersArray}
        >
          <UserCard />
        </CollectionForHolderWithSpinner>
      </CollectionHolder>
    </UsersHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  users: selectAllUsers,
  isLoading: selectUsersIsLoading
});

export default withRouter(
  connect(mapStateToProps, { loadAllUsersStart })(UsersHolder)
);
