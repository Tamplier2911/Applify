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
  SET_CURRENT_PROJECT_PREV,
  SET_CURRENT_IMAGE_NEXT,
  SET_CURRENT_IMAGE_PREV
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
  currentImage: {
    id: 100,
    image: "https://bit.ly/32bmiES"
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
      date: new Date("2019-8-12"),
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
      date: new Date("2019-5-21"),
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
      date: new Date("2019-4-4"),
      url: "https://crwn-clothing-s.herokuapp.com/",
      active: true,
      color: "#000"
    }
  ],
  allImages: [
    {
      id: 100,
      image: "https://bit.ly/32bmiES"
    },
    {
      id: 101,
      image: "https://bit.ly/2HBs0Gu"
    },
    {
      id: 102,
      image: "https://bit.ly/3bT1kPA"
    },
    {
      id: 103,
      image: "https://bit.ly/2uae7fg"
    },
    {
      id: 104,
      image: "https://bit.ly/324uKpl"
    },
    {
      id: 105,
      image: "https://bit.ly/37E3NtB"
    },
    {
      id: 106,
      image: "https://bit.ly/327qViZ"
    },
    {
      id: 107,
      image: "https://bit.ly/39Dy4KC"
    },
    {
      id: 108,
      image: "https://bit.ly/39JEl7n"
    },
    {
      id: 109,
      image: "https://bit.ly/2P5qr7E"
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
    case SET_CURRENT_IMAGE_NEXT:
      if (state.currentImage.id === 109) {
        return { ...state, currentImage: state.allImages[0] };
      }
      console.log(state.currentImage);
      return {
        ...state,
        currentImage: state.allImages[state.currentImage.id - 100 + 1]
      };
    case SET_CURRENT_IMAGE_PREV:
      if (state.currentImage.id === 100) {
        return { ...state, currentImage: state.allImages[9] };
      }
      console.log(state.currentImage);
      return {
        ...state,
        currentImage: state.allImages[state.currentImage.id - 100 - 1]
      };
    default:
      return state;
  }
};

export default projectsReducer;
