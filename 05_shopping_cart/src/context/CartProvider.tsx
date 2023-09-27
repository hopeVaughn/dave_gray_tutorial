import { createContext, useContext, useMemo, useReducer } from 'react';
import {
  CartStateType,
  ChildrenType,
  UseCartContextType
} from '../types'
import { REDUCER_ACTION_TYPE } from './actions';

import { reducer } from './reducer';

const initCartState: CartStateType = {
  cart: []
}

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: []
}
const CartContext = createContext(initCartContextState);

const CartProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, []);

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity
  }, 0);

  const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(state.cart
      .reduce((previousValue, cartItem) => {
        return previousValue + cartItem.quantity * cartItem.price
      }, 0));

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4))
    const itemB = Number(b.sku.slice(-4))
    return itemA - itemB;
  });

  const values: UseCartContextType = {
    ...state,
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    totalPrice,
    cart,
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = (): UseCartContextType => {
  return useContext(CartContext);
}

export { CartProvider, initCartContextState, useCartContext }

