import React from "react";
import "./HolyGrail.css";
const HolyGrail = (props) => {
  return (
    <div className="holy_container">
      <header className="header">Header</header>

      <div className="left__sidebar">Left sidebar</div>
      <main className="body__sidebar">this is main content</main>
      <div className="right__sidebar">Right sidebar</div>
      <footer className="footer">Footer</footer>
    </div>
  );
};
export default HolyGrail;
