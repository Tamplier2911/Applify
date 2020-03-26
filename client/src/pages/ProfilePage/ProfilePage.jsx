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
import FeedbacksHolder from "../../components/FeedbacksHolder/FeedbacksHolder";
import FeedbackUpdate from "../../components/FeedbackUpdate/FeedbackUpdate";
import UsersHolder from "../../components/UsersHolder/UsersHolder";
import UserUpdate from "../../components/UserUpdate/UserUpdate";
import UserCreate from "../../components/UserCreate/UserCreate";
import BlogsHolder from "../../components/BlogsHolder/BlogsHolder";

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
          exact
          path={`${match.path}/users`}
          render={() =>
            showAdminRoutes ? <UsersHolder /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path={`${match.path}/users/create`}
          render={() =>
            showAdminRoutes ? <UserCreate /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/users/:id`}
          render={() =>
            showAdminRoutes ? <UserUpdate /> : <Redirect to="/" />
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
          exact
          path={`${match.path}/blogs`}
          render={() =>
            showAdminRoutes ? <BlogsHolder /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/blogs/:id`}
          render={() =>
            showAdminRoutes ? <div>Singular Blog</div> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path={`${match.path}/feeds`}
          render={() =>
            showAdminRoutes ? <FeedbacksHolder /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/feeds/:id`}
          render={() =>
            showAdminRoutes ? <FeedbackUpdate /> : <Redirect to="/" />
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
