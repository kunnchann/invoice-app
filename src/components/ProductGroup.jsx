import React, { useContext } from "react";
import Product from "./Product";
import { context } from "../context/GeneralContext";

const ProductGroup = () => {
  const { products } = useContext(context);
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGroup;
