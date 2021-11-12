

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
   

    default:
      return state;
  }
};

export default reducer;