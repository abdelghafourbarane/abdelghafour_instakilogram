import suggestionsTypes from "./suggestions.types";

const INITIAL_STATE = {
  suggestions: [],
};

const suggestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case suggestionsTypes.FETCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};

export default suggestionsReducer;
