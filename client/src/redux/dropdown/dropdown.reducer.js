import dropdownActionsTypes from "./dropdown.types";

const INITIAL_STATE = {
  hiddenDropDownProfile: true,
};

const dropDownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropdownActionsTypes.TOGGLE_DROP_DOWN_PROFILE:
      return {
        ...state,
        hiddenDropDownProfile: !state.hiddenDropDownProfile,
      };

    default:
      return state;
  }
};

export default dropDownReducer;
