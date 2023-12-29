import React, { useContext } from "react";
import RecordGroup from "./RecordGroup";
import { context } from "../context/GeneralContext";

const RecordTable = () => {
  const { showProducts } = useContext(context);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-4">
            #
          </th>
          <th scope="col" className="px-6 py-4">
            Product name
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Price
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Quantity
          </th>
          <th scope="col" className="px-6 py-4 text-end">
            Cost
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
        <RecordGroup />
      </tbody>
      {showProducts.length > 0 && (
        <tfoot>
          <tr className="border-b">
            <td
              className="px-6 py-4 text-black font-semibold text-center"
              colSpan={4}
            >
              Total
            </td>
            <td
              className="px-6 py-4 text-black font-semibold text-end"
              id="recordTotal"
            >
              {showProducts
                .reduce((pv, cv) => parseInt(pv) + parseInt(cv.cost), 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default RecordTable;
