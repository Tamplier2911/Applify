// import './usersHolder.scss';
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
// import { loadUsersStart } from "../../redux/users/users.actions";
// import {
//   selectAllLoadedFeeds,
//   selectIsLoading
// } from "../../redux/users/users.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
// import CollectionForHolder from
import Button from "../Button/Button";

// JS Rendering CSS
import { UsersHolderContainer } from "./UserHolderStyles";

// component constants
import usersHolderData from "../../utils/ComponentUsersHolderConstants/componentUsersHolderConstants";

const UsersHolder = ({ lang, history }) => {
  useEffect(() => {}, []);

  const redirectToCreateUser = () => {
    history.push("/authorization");
  };

  const { usersHolderTitle, usersHolderButton } = usersHolderData[lang];

  return (
    <UsersHolderContainer>
      <Button
        type="button"
        value={usersHolderButton}
        click={redirectToCreateUser}
      />
      <CollectionHolder
        lang={lang}
        title={usersHolderTitle}
        refresher={1}
        cb={() => {}}
      >
        <div>Users Collection</div>
      </CollectionHolder>
    </UsersHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default withRouter(connect(mapStateToProps)(UsersHolder));
