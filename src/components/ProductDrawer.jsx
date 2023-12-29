import React, { useContext } from "react";
import ProductGroup from "./ProductGroup";
import ProductCreateForm from "./ProductCreateForm";
import { context } from "../context/GeneralContext";

const ProductDrawer = () => {
  const { drawer, toggleDrawer, products } = useContext(context);
  return (
    <div
      id="productDrawer"
      className={`h-screen w-96 bg-white fixed right-0 shadow-lg overflow-scroll duration-200 ${
        drawer && "translate-x-full"
      }`}
    >
      <div className="p-3 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">Your Product</h1>
          <h4 className="text-xl text-gray-500">Manage Product</h4>
        </div>
        <button
          onClick={toggleDrawer}
          id="closeDrawer"
          className="p-3 bg-blue-100 text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {!products.length && (
        <h1 className="px-6 py-4 text-center dark:text-gray-700 font-semibold">
          There is no selection. Add Product First.
        </h1>
      )}
      <ProductGroup />
      <ProductCreateForm />
    </div>
  );
};

export default ProductDrawer;
