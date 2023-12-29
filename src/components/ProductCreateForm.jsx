import React, { useContext, useRef } from "react";
import { context } from "../context/GeneralContext";

const ProductCreateFrom = () => {
  const { setProducts, products } = useContext(context);
  const formRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const name = form.get("new_product_name").toLowerCase();
    const price = parseInt(form.get("new_product_price"));

    const existingProduct = products.find(
      (product) => product.name.toLowerCase() === name
    );

    const newProduct = {
      id: products.length + 1,
      product_id: products.length + 1,
      name,
      price,
    };

    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.name.toLowerCase() === name ? { ...product, price } : product
      );
      return existingProduct ? updatedProducts : [...prevProducts, newProduct];
    });

    if (
      existingProduct &&
      confirm("That product already exists. Do you want to change the price?")
    ) {
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.map((product) =>
          product.name.toLowerCase() === name ? { ...product, price } : product
        );
        return updatedProducts;
      });
    }

    formRef.current.reset();
  };

  return (
    <div className="border-t-2 p-3">
      <form onSubmit={submitForm} ref={formRef} id="newProductForm">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3">
            <label
              htmlFor="newProductName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Product Name
            </label>
            <input
              placeholder="product name"
              type="text"
              id="newProductName"
              name="new_product_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="newProductPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              placeholder="price"
              type="number"
              id="newProductPrice"
              name="new_product_price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1 h-fit self-end">
            <button
              type="submit"
              className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateFrom;
