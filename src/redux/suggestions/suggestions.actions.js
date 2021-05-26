import suggestionsData from "./suggestions.data";
import suggestionsTypes from "./suggestions.types";

export const fetchSuggestions = () => ({
  type: suggestionsTypes.FETCH_SUGGESTIONS,
  payload: suggestionsData,
});
