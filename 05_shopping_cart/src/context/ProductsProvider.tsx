import { ReactElement, createContext, useContext, useState, useEffect } from "react";
import {
  ProductType,
  UseProductsContextType,
  ChildrenType,
} from "../types";

const initState: ProductType[] = [];
// const initState: ProductType[] = [
//   {
//     sku: "item0001",
//     name: "Widget",
//     price: 9.99,
//   },
//   {
//     sku: "item0002",
//     name: "Premium Widget",
//     price: 19.99,
//   },
//   {
//     sku: "item0003",
//     name: "Deluxe Widget",
//     price: 29.99,
//   },
// ];

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('htttp://localhost:3500/products')
        .then(res => res.json())
        .catch(err => {
          if (err instanceof Error) {
            console.log(err.message)
          }
        })
      return data;
    }
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, initState, useProductsContext };