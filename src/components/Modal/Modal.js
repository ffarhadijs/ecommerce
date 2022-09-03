import React from "react";

const Modal = ({ setIsModalOpen, item }) => {
  return (
    <div>
      <div
        role={"button"}
        onClick={() => setIsModalOpen(false)}
        className="flex justify-center items-center fixed inset-0 bg-gray-700 bg-opacity-60 z-50"
        style={{ cursor: "context-menu" }}
      >
        <div
          className="modalContent flex items-center justify-center flex-col bg-white h-a text-black z-50 sm:w-auto w-3/4 max-w-[400px]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            alt="product img"
            src={item.image}
            style={{ maxHeight: "calc(100vh - 50px)" }}
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
