import React, { useState } from "react";
import Modal from "react-modal";

import "./App.css";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      {/* onRequestClose allows you to close the modal by clicking outside the box or the escape key , you can also add shouldCloseOnOverlayClick={false} to override the overlay and only close it with the escape key */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal</h2>
        <p>Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
