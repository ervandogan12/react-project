import React from "react";
import { Short } from "./Short";
import { useDataSet } from "../../context/DataContext";

export const Shorts = () => {
  const { dataSet } = useDataSet();

  return (
    <ul className="products">
      {dataSet.map((data) => {
        return <Short key={data.id} data={data} />;
      })}
    </ul>
  );
};

export default Shorts;
