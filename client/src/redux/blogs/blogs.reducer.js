import blogsTypes from "./blogs.types";

import {
  temporaryBlogData,
  blogsDataTransformation
} from "../../utils/ComponentBlogsCollectionConstants/componentBlogsCollectionConstants";

const {
  SET_CURRENT_SET_NEXT,
  SET_CURRENT_SET_PREV,
  SET_CURRENT_SET_BY_SLOT
} = blogsTypes;

const currentData = blogsDataTransformation(temporaryBlogData);
const totalSetsLength = Object.keys(currentData).length;

const INITIAL_STATE = {
  currentSet: currentData[1],
  allSets: currentData,
  currentSlot: 1,
  allSlots: totalSetsLength
};

const blogsReducer = (state = INITIAL_STATE, action) => {
  const { currentSlot, allSlots, allSets } = state;
  switch (action.type) {
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
    default:
      return state;
  }
};

export default blogsReducer;
