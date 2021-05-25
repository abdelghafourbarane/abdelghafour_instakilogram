import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import photoReducer from "./photos/photos.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  photos: photoReducer,
});

export default rootReducer;
