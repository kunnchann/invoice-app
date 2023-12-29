import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";
import { context } from "../context/GeneralContext";

const RecordGroup = () => {
  const { showProducts } = useContext(context);
  return (
    <>
      {showProducts?.length > 0 ? (
        showProducts.map((product, idx) => (
          <Record key={idx} {...product} idx={idx} />
        ))
      ) : (
        <EmptyStage />
      )}
    </>
  );
};

export default RecordGroup;
