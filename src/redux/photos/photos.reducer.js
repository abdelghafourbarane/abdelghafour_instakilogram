import photoTypes from "./photos.types";

const INITIAL_STATE = {
  photos: [],
};

const photoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case photoTypes.FETCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
