import React from "react";
import "./ProgressionBar.css";
const ProgressionBar = ({ steps = [], currentStep }) => {
  return (
    <div className="steps__wrapper">
      {steps.map((val, ind) => {
        return (
          <div className="steps__container">
            <div
              className={
                currentStep === ind + 1
                  ? "steps__number__progress"
                  : currentStep > ind + 1
                  ? "steps__number__completed"
                  : "steps__number"
              }
            >
              <span>{currentStep > ind + 1 ? "✔️" : ind + 1}</span>
            </div>
            <div className="steps__name"> {val.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressionBar;
