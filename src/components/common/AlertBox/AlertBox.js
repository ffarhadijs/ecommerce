import React from "react";
import { Link } from "react-router-dom";
import TextButton from "../Buttons/Text/TextButton";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const AlertBox = (props) => {
  const closeModal = (e) => {
    props.setIsAlertBoxOpen(false);
    e.stopPropagation();
  };
  return (
    <div>
      <div
        role={"button"}
        onClick={closeModal}
        className="flex justify-center items-center fixed inset-0 bg-gray-700 bg-opacity-60 z-50"
        style={{ cursor: "context-menu" }}
      >
        <div
          role={"button"}
          style={{ cursor: "context-menu" }}
          className="modalContent flex flex-col items-start bg-white w-[450px] h-auto py-5 text-black z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row justify-start w-full items-center px-5 border-b-2 mb-5 pb-2">
            <BsFillExclamationTriangleFill className="text-5xl text-red-500" />
            <span className="text-red-500 font-semibold text-xl px-5">
              Notice!
            </span>
          </div>
          <span className="font-semibold mb-7 px-5">Please login at first</span>
          <div className="flex flex-row w-full justify-end">
            <TextButton
              text={"cancel"}
              clickHandler={() => props.setIsAlertBoxOpen(false)}
            />
            <Link to="/login">
              <TextButton text={"login"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
