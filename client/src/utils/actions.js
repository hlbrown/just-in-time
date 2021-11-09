import ActionTypes from "constants/ActionTypes";

export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: ActionTypes.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: ActionTypes.HIDE_MODAL
    })
}