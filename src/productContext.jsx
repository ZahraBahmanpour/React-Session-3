import { createContext, useState } from "react";
import data from "../data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const createNew = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, createNew, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
