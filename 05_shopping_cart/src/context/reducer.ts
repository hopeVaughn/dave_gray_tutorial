import { CartItemType, CartStateType, ReducerAction } from "../types";
import { REDUCER_ACTION_TYPE } from "./actions";
// import { initCartState } from "./CartProvider";

export const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    // add item to cart
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("Missing in ADD action")
      }

      const { sku, name, price } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(
        item => item.sku !== sku
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        item => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.quantity + 1 : 1;

      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity: qty }]
      }
    }

    // remove item from cart
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("Missing in REMOVE action")
      }
      const { sku } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(
        item => item.sku !== sku
      );

      return {
        ...state,
        cart: [...filteredCart]
      }
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("Missing in QUANTITY action")
      }
      const { sku, quantity } = action.payload

      const itemExists: CartItemType | undefined = state.cart.find(
        item => item.sku === sku);

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity')
      }

      const updatedItem: CartItemType = { ...itemExists, quantity: quantity }

      const filteredCart: CartItemType[] = state.cart.filter(
        item => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return {
        ...state,
        cart: [],
      }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}