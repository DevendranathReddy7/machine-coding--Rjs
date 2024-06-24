import React, { useState } from "react";
import "./GridStyles.css";
const Grid = (props) => {
  const [totalGrids, setTotoalGrids] = useState(100);
  let rows = totalGrids / 10;
  const getBox = (index) => {
    return <div className="grid__item">{index + 1}</div>;
  };

  return (
    <>
      <label htmlFor="input">Enter a number</label>
      <input id="input" onChange={(e) => setTotoalGrids(e.target.value)} />

      <div className="grid__container" style={{ "--rows": rows }}>
        {Array.from({ length: totalGrids }, (_, index) => getBox(index))}
      </div>
    </>
  );
};
export default Grid;
