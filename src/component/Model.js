import React, { useState } from "react";
import "./model.css";

const Model = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open Surprize
      </button>

      {modal && (
        <div className="model">
          <div className="overlay-sec" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2 className="wish">Happy New Year 2023</h2>
            <p>
              Happy New Year! May you find the perspective you seek in 2023. As
              a wise person once said, "Life isn't about waiting for the storm
              to pass, it's about learning to dance in the rain". This is the
              perfect time to turn over a new leaf and follow your dreams.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
