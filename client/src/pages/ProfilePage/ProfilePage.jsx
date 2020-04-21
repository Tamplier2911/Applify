// import "./ProfilePage.scss";
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Switch, Route, useRouteMatch } from "react-router-dom";

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

const ProfilePage = ({ isLogged, userObject }) => {
  const match = useRouteMatch();
  const { role } = userObject;
  const showAdminRoutes = isLogged && (role === "admin" || role === "owner");

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
          exact
          path={`${match.path}/blogs/create`}
          render={() =>
            showAdminRoutes ? <BlogCreate /> : <Redirect to="/" />
          }
        />
        <Route
          path={`${match.path}/blogs/:id`}
          render={() =>
            showAdminRoutes ? <BlogUpdate /> : <Redirect to="/" />
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
          exact
          path={`${match.path}/feeds/create`}
          render={() =>
            showAdminRoutes ? <AdminFeedbackCreate /> : <Redirect to="/" />
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
  userObject: selectUserObject,
});

ProfilePage.propTypes = {
  isLogged: PropTypes.bool,
  userObject: PropTypes.object,
};

export default connect(mapStateToProps)(ProfilePage);
