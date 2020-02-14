import projectsTypes from "./projects.types";

import crownclothing from "../../assets/jpeg/crown-clothing-min.jpg";
import natours from "../../assets/jpeg/natours-min.jpg";
import clarify from "../../assets/jpeg/clarify-min.jpg";

const {
  SET_CURRENT_PROJECT_FIRST,
  SET_CURRENT_PROJECT_SECOND,
  SET_CURRENT_PROJECT_THIRD,
  SET_CURRENT_PROJECT_FOURTH,
  SET_CURRENT_PROJECT_NEXT,
  SET_CURRENT_PROJECT_PREV
} = projectsTypes;

const INITIAL_STATE = {
  currentProject: {
    id: 0,
    image: crownclothing,
    name: "Crown Clothing",
    description:
      "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
    techStack:
      "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
    date: new Date("2019-10-18"),
    url: "https://crwn-clothing-s.herokuapp.com/",
    active: true,
    color: "#000"
  },
  allProjects: [
    {
      id: 0,
      image: crownclothing,
      name: "Crown Clothing",
      description:
        "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
      techStack:
        "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
      date: new Date("2019-10-18"),
      url: "https://crwn-clothing-s.herokuapp.com/",
      active: true,
      color: "#000"
    },
    {
      id: 1,
      image: natours,
      name: "Natours",
      description:
        "Natours - is a Traveling Experience company, which selling unforgettable trips all over the world.",
      techStack:
        "Fully fletched Express API, data is stored in NoSQL MongoDB with help elegant object modeling provided by Mongoose. App uses server-side rendering by hand of PUG template engine.",
      date: new Date("2019-8-11"),
      url: "https://natours-live-s.herokuapp.com/",
      active: true,
      color: "#55C57A"
    },
    {
      id: 2,
      image: clarify,
      name: "Clarify",
      description:
        "Clarify - is an email service, that helps you to collect feedback from people in order to improve their experience.",
      techStack:
        "Front-end of the app covered by React alongside with Redux and Redux-Sagas. Back-end handled with Express server, data persistance achieved with MongoDB and Mongoose",
      date: new Date("2020-1-11"),
      url: "https://clarify-s.herokuapp.com/",
      active: true,
      color: "#DD4F4F"
    },
    {
      id: 3,
      image: crownclothing,
      name: "Crown Clothing",
      description:
        "E-commerce platform. Comprehensive online-shop with graceful, sophisticated design.",
      techStack:
        "Front-end purely created with React and Redux as a state managemnet lib. Therefore back-end handled by firebase back-end as a service. Node server is running in order to handle Stripe payments.",
      date: new Date("2019-10-18"),
      url: "https://crwn-clothing-s.herokuapp.com/",
      active: true,
      color: "#000"
    }
  ]
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT_FIRST:
      return { ...state, currentProject: state.allProjects[0] };
    case SET_CURRENT_PROJECT_SECOND:
      return { ...state, currentProject: state.allProjects[1] };
    case SET_CURRENT_PROJECT_THIRD:
      return { ...state, currentProject: state.allProjects[2] };
    case SET_CURRENT_PROJECT_FOURTH:
      return { ...state, currentProject: state.allProjects[3] };
    case SET_CURRENT_PROJECT_NEXT:
      if (state.currentProject.id === 3) {
        return { ...state, currentProject: state.allProjects[0] };
      }
      return {
        ...state,
        currentProject: state.allProjects[state.currentProject.id + 1]
      };
    case SET_CURRENT_PROJECT_PREV:
      if (state.currentProject.id === 0) {
        return { ...state, currentProject: state.allProjects[3] };
      }
      return {
        ...state,
        currentProject: state.allProjects[state.currentProject.id - 1]
      };
    default:
      return state;
  }
};

export default projectsReducer;
