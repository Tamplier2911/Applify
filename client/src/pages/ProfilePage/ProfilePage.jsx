// import "./ProfilePage.scss";
import React from "react";
import {
  Redirect,
  Switch,
  Route,
  // useRouteMatch,
  withRouter,
} from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsLogged,
  selectUserObject,
} from "../../redux/auth/auth.selectors";

// components
import Profile from "../../components/Profile/Profile";
import MessagesHolder from "../../components/MessagesHolder/MessagesHolder";
import MessageRead from "../../components/MessageRead/MessageRead";
import FeedbacksHolder from "../../components/FeedbacksHolder/FeedbacksHolder";
import FeedbackUpdate from "../../components/FeedbackUpdate/FeedbackUpdate";
import AdminFeedbackCreate from "../../components/AdminFeedbackCreate/AdminFeedbackCreate";
import UsersHolder from "../../components/UsersHolder/UsersHolder";
import UserUpdate from "../../components/UserUpdate/UserUpdate";
import UserCreate from "../../components/UserCreate/UserCreate";
import BlogsHolder from "../../components/BlogsHolder/BlogsHolder";
import BlogUpdate from "../../components/BlogUpdate/BlogUpdate";
import BlogCreate from "../../components/BlogCreate/BlogCreate";

// JS Rendering CSS
import {
  ProfilePageContainer,
  ProfilePagePlaceholder,
} from "./ProfilePageStyles";

const ProfilePage = ({ isLogged, userObject, match }) => {
  // const match = useRouteMatch();
  const { role } = userObject;
  const showAdminRoutes = isLogged && (role === "admin" || role === "owner");

  return (
    <ProfilePageContainer data-test="profile-page">
      <ProfilePagePlaceholder />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (isLogged ? <Profile /> : <Redirect to="/" />)}
          data-test="profile-page-exact"
        />

        <Route
          exact
          path={`${match.path}/users`}
          render={() =>
            showAdminRoutes ? <UsersHolder /> : <Redirect to="/" />
          }
          data-test="profile-page-users"
        />
        <Route
          exact
          path={`${match.path}/users/create`}
          render={() =>
            showAdminRoutes ? <UserCreate /> : <Redirect to="/" />
          }
          data-test="profile-page-users-create"
        />
        <Route
          path={`${match.path}/users/:id`}
          render={() =>
            showAdminRoutes ? <UserUpdate /> : <Redirect to="/" />
          }
          data-test="profile-page-users-id"
        />
        <Route
          exact
          path={`${match.path}/messages`}
          render={() =>
            showAdminRoutes ? <MessagesHolder /> : <Redirect to="/" />
          }
          data-test="profile-page-messages"
        />
        <Route
          path={`${match.path}/messages/:id`}
          render={() =>
            showAdminRoutes ? <MessageRead /> : <Redirect to="/" />
          }
          data-test="profile-page-messages-id"
        />
        <Route
          exact
          path={`${match.path}/blogs`}
          render={() =>
            showAdminRoutes ? <BlogsHolder /> : <Redirect to="/" />
          }
          data-test="profile-page-blogs"
        />
        <Route
          exact
          path={`${match.path}/blogs/create`}
          render={() =>
            showAdminRoutes ? <BlogCreate /> : <Redirect to="/" />
          }
          data-test="profile-page-blogs-create"
        />
        <Route
          path={`${match.path}/blogs/:id`}
          render={() =>
            showAdminRoutes ? <BlogUpdate /> : <Redirect to="/" />
          }
          data-test="profile-page-blogs-id"
        />
        <Route
          exact
          path={`${match.path}/feeds`}
          render={() =>
            showAdminRoutes ? <FeedbacksHolder /> : <Redirect to="/" />
          }
          data-test="profile-page-feeds"
        />
        <Route
          exact
          path={`${match.path}/feeds/create`}
          render={() =>
            showAdminRoutes ? <AdminFeedbackCreate /> : <Redirect to="/" />
          }
          data-test="profile-page-feeds-create"
        />
        <Route
          path={`${match.path}/feeds/:id`}
          render={() =>
            showAdminRoutes ? <FeedbackUpdate /> : <Redirect to="/" />
          }
          data-test="profile-page-feeds-id"
        />
      </Switch>
    </ProfilePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged,
  userObject: selectUserObject,
});

export default withRouter(connect(mapStateToProps)(ProfilePage));
