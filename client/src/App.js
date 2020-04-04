// import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import "animate.css/animate.min.css";
import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { openModal } from "./redux/modal/modal.actions";
import { selectIsLogged } from "./redux/auth/auth.selectors";
import { fetchAuthObjectStart } from "./redux/auth/auth.actions";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";
import LanguagePannel from "./components/LanguagePanel/LanguagePanel";

import LazzySpinner from "./components/LazzySpinner/LazzySpinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// pages
// import HomePage from "./pages/HomePage/HomePage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
// import ResumePage from "./pages/ResumePage/ResumePage";
// import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
// import BlogPage from "./pages/BlogPage/BlogPage";
// import PasswordRestorationPage from "./pages/PasswordRestorationPage/PasswordRestorationPage";

// JS rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

// lazzy loaded pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const AuthorizationPage = lazy(() =>
  import("./pages/AuthorizationPage/AuthorizationPage")
);
const ResumePage = lazy(() => import("./pages/ResumePage/ResumePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage/FeedbackPage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const PasswordRestorationPage = lazy(() =>
  import("./pages/PasswordRestorationPage/PasswordRestorationPage")
);

const App = ({ openModal, fetchAuthObjectStart, isLogged }) => {
  useEffect(() => {
    // openModal({
    //   header: "Attention!",
    //   content:
    //     "App is currently in development, back-end is wired up partially."
    // });
    fetchAuthObjectStart();
  }, [openModal, fetchAuthObjectStart]);

  return (
    <AppContainer>
      <Header />
      <Sidenav />
      <Modal />

      <AppMain>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<LazzySpinner />}>
              <Route
                path="/profile"
                render={() =>
                  isLogged ? <ProfilePage /> : <Redirect to="/" />
                }
              />
              <Route
                exact
                path="/authorization"
                render={() =>
                  !isLogged ? <AuthorizationPage /> : <Redirect to="/" />
                }
              />
              <Route exact path="/resume" component={ResumePage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/contacts" component={ContactsPage} />
              <Route exact path="/feedback" component={FeedbackPage} />
              <Route path="/blog" component={BlogPage} />
              <Route
                path="/restore"
                render={() =>
                  !isLogged ? <PasswordRestorationPage /> : <Redirect to="/" />
                }
              />
              <Route exact path="/" component={HomePage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
        <LanguagePannel />
      </AppMain>

      <Footer />
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged,
});

export default connect(mapStateToProps, { openModal, fetchAuthObjectStart })(
  App
);
