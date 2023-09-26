import { ReactElement } from "react"
import { REDUCER_ACTION_TYPE } from "../context/actions"

export type ProductType = {
  sku: string,
  name: string,
  price: number,
}

export type UseProductsContextType = {
  products: ProductType[]
}

export type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export type CartItemType = {
  sku: string,
  name: string,
  price: number,
  quantity: number
}

export type CartStateType = {
  cart: CartItemType[]
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType
}

export type UseCartContextType = {
  dispatch: (action: ReducerAction) => void;
  REDUCER_ACTIONS: ReducerActionType;
  totalItems: number;
  totalPrice: string;
  cart: CartItemType[];
};
