import blogsTypes from "./blogs.types";

const {
  SET_CURRENT_SET_NEXT,
  SET_CURRENT_SET_PREV,
  SET_CURRENT_SET_BY_SLOT,

  LOAD_ALL_BLOGPOSTS_START,
  LOAD_ALL_BLOGPOSTS_SUCCESS,
  LOAD_ALL_BLOGPOSTS_FAILURE,

  CREATE_ONE_BLOGPOST_FAILURE,
  UPDATE_ONE_BLOGPOST_FAILURE,
  DELETE_ONE_BLOGPOST_FAILURE,
  LIKE_ONE_BLOGPOST_FAILURE,
  DISLIKE_ONE_BLOGPOST_FAILURE
} = blogsTypes;

const INITIAL_STATE = {
  allBlogposts: [],
  allSets: {},
  currentSet: [],
  currentSlot: 0,
  allSlots: 0,
  isLoading: false,
  errorMessage: null
};

const blogsReducer = (state = INITIAL_STATE, action) => {
  const { currentSlot, allSlots, allSets } = state;
  switch (action.type) {
    case LOAD_ALL_BLOGPOSTS_START:
      return { ...state, isLoading: true };
    case LOAD_ALL_BLOGPOSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        allBlogposts: action.payload.allBlogposts,
        allSets: action.payload.allSets,
        currentSet: action.payload.currentSet,
        currentSlot: action.payload.currentSlot,
        allSlots: action.payload.allSlots
      };
    case SET_CURRENT_SET_NEXT:
      if (currentSlot === allSlots) {
        return state;
      }
      return {
        ...state,
        currentSlot: currentSlot + 1,
        currentSet: allSets[currentSlot + 1]
      };
    case SET_CURRENT_SET_PREV:
      if (currentSlot === 1) {
        return state;
      }
      return {
        ...state,
        currentSlot: currentSlot - 1,
        currentSet: allSets[currentSlot - 1]
      };
    case SET_CURRENT_SET_BY_SLOT:
      return {
        ...state,
        currentSet: allSets[action.payload],
        currentSlot: action.payload
      };
    case LOAD_ALL_BLOGPOSTS_FAILURE:
    case CREATE_ONE_BLOGPOST_FAILURE:
    case UPDATE_ONE_BLOGPOST_FAILURE:
    case DELETE_ONE_BLOGPOST_FAILURE:
    case LIKE_ONE_BLOGPOST_FAILURE:
    case DISLIKE_ONE_BLOGPOST_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default blogsReducer;
