import projectsTypes from './projects.types';

// projects constants
import projectsData from './projectsConstants';

const {
  SET_CURRENT_PROJECT_FIRST,
  SET_CURRENT_PROJECT_SECOND,
  SET_CURRENT_PROJECT_THIRD,
  SET_CURRENT_PROJECT_FOURTH,
  SET_CURRENT_PROJECT_FIFTH,
  SET_CURRENT_PROJECT_SIXTH,
  SET_CURRENT_PROJECT_NEXT,
  SET_CURRENT_PROJECT_PREV,
  GET_CURRENT_PROJECT,
  SET_CURRENT_IMAGE_NEXT,
  SET_CURRENT_IMAGE_PREV,
} = projectsTypes;

const INITIAL_STATE = projectsData;

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT_FIRST:
      return { ...state, currentProject: state.allProjects[action.payload][0] };
    case SET_CURRENT_PROJECT_SECOND:
      return { ...state, currentProject: state.allProjects[action.payload][1] };
    case SET_CURRENT_PROJECT_THIRD:
      return { ...state, currentProject: state.allProjects[action.payload][2] };
    case SET_CURRENT_PROJECT_FOURTH:
      return { ...state, currentProject: state.allProjects[action.payload][3] };
    case SET_CURRENT_PROJECT_FIFTH:
      return { ...state, currentProject: state.allProjects[action.payload][4] };
    case SET_CURRENT_PROJECT_SIXTH:
      return { ...state, currentProject: state.allProjects[action.payload][5] };
    case SET_CURRENT_PROJECT_NEXT:
      if (state.currentProject.id === 5) {
        return {
          ...state,
          currentProject: state.allProjects[action.payload][0],
        };
      }
      return {
        ...state,
        currentProject:
          state.allProjects[action.payload][state.currentProject.id + 1],
      };
    case SET_CURRENT_PROJECT_PREV:
      if (state.currentProject.id === 0) {
        return {
          ...state,
          currentProject: state.allProjects[action.payload][5],
        };
      }
      return {
        ...state,
        currentProject:
          state.allProjects[action.payload][state.currentProject.id - 1],
      };
    case GET_CURRENT_PROJECT:
      return { ...state, currentProject: state.allProjects[action.payload][0] };
    case SET_CURRENT_IMAGE_NEXT:
      if (state.currentImage.id === 107) {
        return { ...state, currentImage: state.allImages[action.payload][0] };
      }
      return {
        ...state,
        currentImage:
          state.allImages[action.payload][state.currentImage.id - 100 + 1],
      };
    case SET_CURRENT_IMAGE_PREV:
      if (state.currentImage.id === 100) {
        return { ...state, currentImage: state.allImages[action.payload][7] };
      }
      return {
        ...state,
        currentImage:
          state.allImages[action.payload][state.currentImage.id - 100 - 1],
      };
    default:
      return state;
  }
};

export default projectsReducer;
