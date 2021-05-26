import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import photoReducer from "./photos/photos.reducer";
import suggestionsReducer from "./suggestions/suggestions.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  photos: photoReducer,
  suggestions: suggestionsReducer,
});

export default rootReducer;
