import { useState } from "react";
import "../App.css";
import Modal from "../usecases/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <button
        style={{ zIndex: isOpen ? 1 : -1 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Modal" : "Show Modal"}
      </button>
      {isOpen && <Modal isOpen={isOpen} closeModal={closeHandler} />}
    </div>
  );
}

export default App;
