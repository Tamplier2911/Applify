// import "./ProfilePage.scss";
import React from "react";
import { Redirect, Switch, Route, useRouteMatch } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsLogged,
  selectUserObject
} from "../../redux/auth/auth.selectors";

// components
import Profile from "../../components/Profile/Profile";
import MessagesHolder from "../../components/MessagesHolder/MessagesHolder";
import MessageRead from "../../components/MessageRead/MessageRead";

// JS Rendering CSS
import {
  ProfilePageContainer,
  ProfilePagePlaceholder
} from "./ProfilePageStyles";

const ProfilePage = ({ isLogged, userObject }) => {
  const match = useRouteMatch();
  const { id } = userObject;
  const showAdminRoutes = isLogged && id === "5e6e618672e9151d503701ed";

  return (
    <ProfilePageContainer>
      <ProfilePagePlaceholder />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (isLogged ? <Profile /> : <Redirect to="/" />)}
        />

        <Route
          path={`${match.path}/users`}
          render={() =>
            showAdminRoutes ? <MessagesHolder /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path={`${match.path}/messages`}
          render={() =>
            showAdminRoutes ? <MessagesHolder /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/messages/:id`}
          render={() =>
            showAdminRoutes ? <MessageRead /> : <Redirect to="/" />
          }
        />

        <Route
          path={`${match.path}/blogs`}
          render={() =>
            showAdminRoutes ? <MessagesHolder /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/feeds`}
          render={() =>
            showAdminRoutes ? <MessagesHolder /> : <Redirect to="/" />
          }
        />
      </Switch>
    </ProfilePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged,
  userObject: selectUserObject
});

export default connect(mapStateToProps)(ProfilePage);
