import React from "react";
import { Short } from "../Shorts/Short";
import { useDataSet } from "../../../context/DataContext";
import { Villain } from "./Villain";

export const Villains = () => {
  const { villainsData } = useDataSet();

  return (
<ul className="villains">
    {villainsData ? villainsData.map((data) => (
      <Villain key={data.id} data={data} />
    )) : null}
  </ul>
  );
};

export default Villains;
