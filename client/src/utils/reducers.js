import ActionTypes from "constants/ActionTypes";

// Creating an initial State object
const initialState = {
  modalType: null,
  modalProps: {
    open: false
  }
}

// Add the initial state to the reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case ActionTypes.HIDE_MODAL:
      return initialState

    default:
      return state;
  }
};

export default reducer;