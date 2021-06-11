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
