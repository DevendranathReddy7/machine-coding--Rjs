import React from "react";
import "./HolyGrail.css";
const HolyGrail = (props) => {
  return (
    <div className="holy_container">
      <div className="header">
        <header>Header</header>
      </div>
      <div className="body__container">
        <div className="left__sidebar">Left sidebar</div>
        <div className="body__sidebar">this is main content</div>
        <div className="right__sidebar">Right sidebar</div>
      </div>
      <div className="footer">
        <footer>Footer</footer>
      </div>
    </div>
  );
};
export default HolyGrail;
