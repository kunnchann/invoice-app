import React, { createContext, useEffect, useRef, useState } from "react";

export const context = createContext();

const GeneralContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_id: 1,
      name: "Apple",
      price: 100,
    },
    {
      id: 2,
      product_id: 2,
      name: "Banana",
      price: 200,
    },
    {
      id: 3,
      product_id: 3,
      name: "Orange",
      price: 300,
    },
  ]);

  const [showProducts, setShowProduct] = useState([]);

  const [drawer, setDrawer] = useState(true);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <context.Provider
      value={{
        products,
        setProducts,
        showProducts,
        setShowProduct,
        drawer,
        toggleDrawer,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GeneralContextProvider;
