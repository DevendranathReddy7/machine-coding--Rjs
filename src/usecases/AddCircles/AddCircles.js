import React, { useState } from "react";
import "./AddCircles.css";
const AddCircles = (props) => {
  const [circlesCount, setCirclesCount] = useState(0);
  const [buttonClick, setButtonClick] = useState();
  const [grayColorCircles, setGrayColorCircles] = useState([]);

  const createCircle = () => {
    setCirclesCount(circlesCount + 1);
  };

  const handleColorCircles = (index) => {
    setGrayColorCircles((prev) => [...prev, index]);

    if (grayColorCircles.includes(index)) {
      setGrayColorCircles(grayColorCircles.filter((x) => x !== index));
      document.getElementById("circle_" + index).style.backgroundColor = "grey";
    } else {
      document.getElementById("circle_" + index).style.backgroundColor = "red";
    }
  };

  const getCircels = (index) => {
    return (
      <button
        id={`circle_${index}`}
        className="circle"
        onClick={() => handleColorCircles(index)}
      ></button>
    );
  };
  return (
    <div>
      <button id="addCircle" onClick={createCircle}>
        Add Circle
      </button>
      <p>gray color circles :{grayColorCircles.length}</p>
      {Array.from({ length: circlesCount }, (_, index) => getCircels(index))}
    </div>
  );
};
export default AddCircles;
