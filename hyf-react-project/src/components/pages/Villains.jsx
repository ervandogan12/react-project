import React from "react";
import { Short } from "./Short";
import { useDataSet } from "../../context/DataContext";
import { Villain } from "./Villain";

export const Villains = () => {
  const { dataSet } = useDataSet();

  return (
    <ul className="products">
      {dataSet.map((data) => {
        return <Villain key={data.id} data={data} />;
      })}
    </ul>
  );
};

export default Villains;
