import React, { useState } from "react";
import ProgressionBar from "../usecases/ProgressionBar/ProgressionBar";

const counterValues = [
  {
    name: "Customer information",
    text: () => <div>Order details</div>,
  },
  {
    name: "Shipping address",
    text: () => <div>Enter your address</div>,
  },
  {
    name: "Payment mode",
    text: () => <div>Complete the payment for the order selected</div>,
  },
  {
    name: "Recieved",
    text: () => <div>Your Order has been recieved</div>,
  },
];

const ProgressionIndex = () => {
  const [curStep, setCurStep] = useState(1);
  const getComponent = () => {
    return counterValues[curStep - 1]?.text() || counterValues[3].text();
  };

  const calWidth = () => {
    if (curStep > counterValues.length) return 100;
    return ((curStep - 1) / (counterValues.length - 1)) * 100 + 2.1;
  };
  const progressBar = () => {
    return (
      <div className="progressBar">
        <div className="progress" style={{ width: `${calWidth()}%` }}></div>
      </div>
    );
  };
  return (
    <div>
      <h3>Progression bar</h3>
      <ProgressionBar steps={counterValues} currentStep={curStep} />
      <div className="component">{getComponent()}</div>
      {progressBar()}
      <button
        className="next"
        onClick={() => setCurStep(curStep + 1)}
        disabled={curStep > counterValues.length}
      >
        {curStep >= counterValues.length ? "Finish" : "Next"}
      </button>
    </div>
  );
};
export default ProgressionIndex;
