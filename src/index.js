import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  PaginationIndex,
  ModalIndex,
  ProgressionIndex,
  CurrencyConverterIndex,
  PasswordGeneratorIndex,
  AddCircleIndex,
  AutoSuggestionIndex,
  HolyGrailFlexBoxIndex,
  GridIndex,
  AppStoreIndex,
} from "./rootIndexs/rootIndex";
import HolyGrailIndex from "./rootIndexs/HolyGrailIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PaginationIndex /> */}
    {/* <ModalIndex /> */}
    {/* <ProgressionIndex /> */}
    {/* <CurrencyConverterIndex /> */}
    {/* <PasswordGeneratorIndex /> */}
    {/* <AddCircleIndex /> */}
    {/* <AutoSuggestionIndex /> */}
    {/* <HolyGrailIndex /> */}
    {/* <HolyGrailFlexBoxIndex /> */}
    {/* <GridIndex /> */}
    <AppStoreIndex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
