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
        Open Model
      </button>

      {modal && (
        <div className="model">
          <div className="overlay-sec" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>Model heading</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              corrupti, ex, assumenda, ratione repudiandae eos molestiae
              blanditiis minus excepturi corporis explicabo dicta. Eaque
              eligendi sint fugit corrupti quis porro tempora vitae voluptatem
              reiciendis earum nemo libero ipsum natus dolorem suscipit, ratione
              optio nobis enim adipisci quibusdam repellat eius veniam molestiae
              pariatur.
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
