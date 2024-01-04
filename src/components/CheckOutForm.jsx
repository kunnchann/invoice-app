import React, { useContext, useRef } from "react";
import { context } from "../context/GeneralContext";

const CheckOutForm = () => {
  const { products, showProducts, setShowProduct } = useContext(context);

  const productRef = useRef();
  const quantityRef = useRef();

  const addProduct = (e) => {
    e.preventDefault();

    const selectedProductId = productRef.current.value;
    const selectedProduct = products.find(
      (product) => product.product_id == selectedProductId
    );

    const quantity = Number(quantityRef.current.value);
    const cost = (selectedProduct.price * quantity).toFixed(2);

    const existingProduct = showProducts.find(
      (product) => product.product_id == selectedProduct.product_id
    );

    const updatedProducts = existingProduct
      ? showProducts.map((product) =>
          product.product_id == selectedProduct.product_id
            ? {
                ...product,
                quantity: product.quantity + quantity,
                cost: (parseInt(product.cost) + parseInt(cost)).toFixed(2),
              }
            : product
        )
      : [...showProducts, { ...selectedProduct, quantity, cost }];

    setShowProduct(updatedProducts);
    e.target.reset();
  };

  return (
    <section className="mb-10 block print:hidden">
      <form onSubmit={addProduct} id="recordForm">
        <div className="grid grid-cols-5 gap-3 items-end">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              ref={productRef}
              id="productSelect"
              className="bg-gray-50 capitalize border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              {products.map(({ id, name, product_id }) => (
                <option
                  id={id}
                  key={id}
                  product_id={id}
                  value={id}
                  className="capitalize"
                >
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              ref={quantityRef}
              type="number"
              id="quantityInput"
              placeholder="Amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              disabled={!products.length}
              className="font-heading w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Buy
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckOutForm;
