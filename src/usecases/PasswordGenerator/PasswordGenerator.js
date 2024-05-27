import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = (props) => {
  const [password, setPassword] = useState({
    upper_Case: false,
    lower_Case: false,
    numbers: false,
    symbols: false,
  });
  const [length, setLength] = useState(4);
  const [genereatedPassword, setGeneratedPassword] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const lengthHandler = (e) => {
    setLength(e.target.value);
    setGeneratedPassword("");
  };

  const checkBoxHandler = (field) => {
    setError(null);
    setGeneratedPassword("");
    setCopied(false);
    switch (field) {
      case "upperCase":
        setPassword((prev) => ({ ...prev, upper_Case: !password.upper_Case }));
        break;
      case "lowerCase":
        setPassword((prev) => ({ ...prev, lower_Case: !password.lower_Case }));
        break;
      case "number":
        setPassword((prev) => ({ ...prev, numbers: !password.numbers }));
        break;
      case "symbol":
        setPassword((prev) => ({ ...prev, symbols: !password.symbols }));
        break;
    }
  };

  const generatorHandler = () => {
    setError(null);
    setCopied(false);

    let charset = "";
    let generatePswd = "";

    if (password.upper_Case) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (password.lower_Case) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (password.numbers) {
      charset += "0123456789";
    }
    if (password.symbols) {
      charset += "!@#$%^&*()_+";
    }

    if (charset.length === 0 || length === 0) {
      setError(true);
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePswd += charset[randomIndex];
    }
    setGeneratedPassword(generatePswd);
  };

  const copyHandler = () => {
    setCopied(true);
    navigator.clipboard.writeText(genereatedPassword);
  };

  return (
    <div className="container">
      <h3>Password Generator</h3>
      <div className="input__container">
        <input
          className="Input__slider"
          type="range"
          min="0"
          max="20"
          value={length}
          onChange={lengthHandler}
        />
        <div>
          <p className="length__para">{length}</p>
        </div>
      </div>

      <div className="checkBox__wrapper">
        <div className="checkBox__container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => checkBoxHandler("upperCase")}
          />
          <label className="checkbox__label">Upper case</label>
        </div>

        <div className="checkBox__container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => checkBoxHandler("lowerCase")}
          />
          <label className="checkbox__label">Lower case</label>
        </div>

        <div className="checkBox__container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => checkBoxHandler("number")}
          />
          <label className="checkbox__label">Numbers</label>
        </div>

        <div className="checkBox__container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => checkBoxHandler("symbol")}
          />
          <label className="checkbox__label">Symbols</label>
        </div>
      </div>
      {error && (
        <div>
          <p className="errorPara">
            Please select atleast one checkbox and length of password is greator
            than 0
          </p>
        </div>
      )}
      <div className="footer_container">
        <button className="generate__button" onClick={generatorHandler}>
          Generate
        </button>
        {genereatedPassword !== "" && (
          <div>
            <button className="generate__copy" onClick={copyHandler}>
              <span
                className={
                  length < 4
                    ? "red"
                    : length >= 4 && length < 8
                    ? "yellow"
                    : "green"
                }
              >
                {genereatedPassword}
              </span>{" "}
              | {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default PasswordGenerator;
