import React from "react";
import { Link } from "react-router-dom";
import villainImg from "../../../assets/villains.png";

export const Villain = ({ data }) => {
  return (
    <li className="villain-list">
      <Link to={`/api/villains/${data.id}`}>
        <div className="villain">
         <p>{data.name}</p>
        </div>
      </Link>
    </li>
  );
};

export default Villain;