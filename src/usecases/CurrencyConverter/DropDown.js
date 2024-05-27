import React from "react";
import "./CurrencyConverter.css";
const DropDown = ({
  curList,
  curType,
  selectedCur,
  defaultCurrency,
  favHandler,
  favCurrencies,
}) => {
  const dropdownHandler = (e) => {
    selectedCur(e.target.value, curType);
  };

  return (
    <div className="dropdown__container">
      <select
        className="dropdown"
        onChange={dropdownHandler}
        value={defaultCurrency}
      >
        {favCurrencies?.map((cur) => {
          return (
            <option key={cur} className="fav__option">
              {cur}
            </option>
          );
        })}
        <hr />
        {curList?.map((cur) => {
          if (!favCurrencies.includes(cur))
            return (
              <option key={cur} className="option">
                {cur}
              </option>
            );
        })}
      </select>
      <button onClick={() => favHandler(curType)} className="favButton">
        💛
      </button>
    </div>
  );
};
export default DropDown;
