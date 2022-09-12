import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  CART_RESET,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const CartReducer = (state = { CartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existed = state.CartItems.find((product) => product.id === item.id);
      if (existed) {
        return {
          ...state,
          CartItems: state.CartItems.map((data) =>
            data.product === existed.product ? item : data
          ),
        };
      } else {
        return { ...state, CartItems: [...state.CartItems, item] };
      }
    case ADD_TO_CART_ERROR:
    case REMOVE_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    case CART_RESET:
    default:
      return state;
  }
};
