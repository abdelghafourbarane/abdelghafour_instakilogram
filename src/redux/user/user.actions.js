import { CURRENT_USER as userData } from "./user.data";
import userTypes from "./user.types";

export const getCurrentUser = () => ({
  type: userTypes.GET_CURRENT_USER,
  payload: userData,
});
