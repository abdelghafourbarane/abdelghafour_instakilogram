import { CURRENT_USER as userData } from "./user.data";
import userTypes from "./user.types";

export const getCurrentUser = () => ({
  type: userTypes.GET_CURRENT_USER,
  payload: userData,
});

export const getCurrentUserFromDBStart = () => ({
  type: userTypes.GET_CURRENT_USER_FROM_DB_START,
});

export const getCurrentUserDBSucced = (user) => ({
  type: userTypes.GET_CURRENT_USER_FROM_DB_SUCCED,
  payload: user,
});

export const getCurrentUserDBFailure = (error) => ({
  type: userTypes.GET_CURRENT_USER_FROM_DB_FAILURE,
  payload: error,
});

export const logoutStart = () => ({
  type: userTypes.LOGOUT_START,
});

export const logoutFailure = (error) => ({
  type: userTypes.LOGOUT_FAILURE,
  payload: error,
});

export const logoutSuccess = (user) => ({
  type: userTypes.LOGOUT_SUCCESS,
  payload: user,
});
