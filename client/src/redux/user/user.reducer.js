import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  currentUserDB: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.GET_CURRENT_USER_FROM_DB_SUCCED:
      return {
        ...state,
        currentUserDB: action.payload,
      };
    case userTypes.GET_CURRENT_USER_FROM_DB_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case userTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUserDB: action.payload,
      };

    case userTypes.LOGOUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
