// projects constants
import projectsData from "../redux/projects/projectsConstants";

const store = {
  theme: {
    currentTheme: "light",
  },
  lang: {
    languagePanelHidden: true,
    currentLanguage: "eng",
  },
  user: {
    userObject: {
      id: "",
      name: "",
      email: "",
      photo: "",
      about: "",
      likedBlogposts: [],
    },
    errorMessage: null,
    isLogged: false,
  },
  users: {
    allUsers: [],
    isLoading: false,
    errorMessage: null,
  },
  projects: projectsData,
  sidenav: {
    sidenavHidden: true,
  },
  modal: {
    modalHidden: true,
    modalContent: {
      header: "",
      content: "",
    },
  },
  blogs: {
    allBlogposts: [],
    allSets: {},
    currentSet: [],
    currentSlot: 0,
    allSlots: 0,
    isLoading: false,
    errorMessage: null,
  },
  messages: {
    allMessages: {},
    isLoading: false,
    errorMessage: null,
  },
  feedbacks: {
    allFeedbacks: [],
    currentlyLoaded: [],
    totalLoaded: 0,
    isLoading: false,
    errorMessage: null,
  },
};

export default store;
