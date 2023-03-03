import { createContext, useState } from "react";

import PRODUCTS from "../data/shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
