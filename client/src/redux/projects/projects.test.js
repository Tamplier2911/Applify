// reducer
import projectsReducer from "./projects.reducer";

// actions
import {
  getCurrentProject,
  setCurrentImageNext,
  setCurrentImagePrev,
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectNext,
  setCurrentProjectPrev,
} from "./projects.actions";

// types
import projectsTypes from "./projects.types";

// constants
import projectsData from "./projectsConstants";

const {
  GET_CURRENT_PROJECT,
  SET_CURRENT_IMAGE_NEXT,
  SET_CURRENT_IMAGE_PREV,
  SET_CURRENT_PROJECT_FIRST,
  SET_CURRENT_PROJECT_SECOND,
  SET_CURRENT_PROJECT_THIRD,
  SET_CURRENT_PROJECT_FOURTH,
  SET_CURRENT_PROJECT_NEXT,
  SET_CURRENT_PROJECT_PREV,
} = projectsTypes;

const defaultState = projectsData;

describe("projects.actions", () => {
  it("returns an action object with expected type", () => {
    const actionObject = getCurrentProject();
    expect(actionObject.type).toEqual(GET_CURRENT_PROJECT);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentImageNext();
    expect(actionObject.type).toEqual(SET_CURRENT_IMAGE_NEXT);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentImagePrev();
    expect(actionObject.type).toEqual(SET_CURRENT_IMAGE_PREV);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectFirst();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_FIRST);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectSecond();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_SECOND);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectThird();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_THIRD);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectFourth();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_FOURTH);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectNext();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_NEXT);
  });

  it("returns an action object with expected type", () => {
    const actionObject = setCurrentProjectPrev();
    expect(actionObject.type).toEqual(SET_CURRENT_PROJECT_PREV);
  });
});

describe("projects.reducer", () => {
  let newState;
  beforeEach(() => {
    newState = defaultState;
  });

  it("returns default state if no action type matched", () => {
    const state = projectsReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, getCurrentProject("eng"));
    newState.currentProject = defaultState.allProjects.eng[0];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentImageNext("phone"));
    newState.currentImage = defaultState.allImages["phone"][1];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentImagePrev("desktop"));
    newState.currentImage = defaultState.allImages["desktop"][0];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectNext("eng"));
    newState.currentProject = defaultState.allProjects.eng[1];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectPrev("rus"));
    newState.currentProject = defaultState.allProjects.rus[0];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectFirst("ukr"));
    newState.currentProject = defaultState.allProjects.ukr[0];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectSecond("eng"));
    newState.currentProject = defaultState.allProjects.eng[1];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectThird("rus"));
    newState.currentProject = defaultState.allProjects.rus[2];
    expect(state).toEqual(newState);
  });

  it("performs changes to state depends on action type", () => {
    const state = projectsReducer(defaultState, setCurrentProjectFourth("ukr"));
    newState.currentProject = defaultState.allProjects.ukr[3];
    expect(state).toEqual(newState);
  });
});
