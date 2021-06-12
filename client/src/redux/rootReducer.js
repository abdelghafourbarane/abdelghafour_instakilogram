import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import photoReducer from "./photos/photos.reducer";
import suggestionsReducer from "./suggestions/suggestions.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  photos: photoReducer,
  suggestions: suggestionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
