import React, { useContext } from "react";
import { context } from "../context/GeneralContext";

const EmptyStage = () => {
  const { products } = useContext(context);
  return (
    <tr className="hidden last:table-row border-b">
      <td
        colSpan={5}
        className="px-6 py-4 text-center dark:text-gray-700 font-semibold"
      >
        There is no {!products.length ? "product for select" : "records"}.{" "}
        {!products.length ? "Add Prouct First." : "Buy Something"}
      </td>
    </tr>
  );
};

export default EmptyStage;
