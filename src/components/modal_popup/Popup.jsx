import { useState } from "react";
import Modal from "./Modal";
const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>show popup</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          body={<div>Customized body</div>}
          footer={<h1>Customized Footer</h1>}
          onClose={setShowModal}
        />
      )}
    </div>
  );
};

export default Popup;
