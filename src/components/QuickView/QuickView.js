import Tooltip from "../common/Tooltip/Tooltip";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/features/cart/cartSlice";
import LikeButton from "../common/Buttons/Like/LikeButton";
import TextButton from "../common/Buttons/Text/TextButton";
import { AddToList } from "../../redux/features/wishList/wishSlice";
import { CSSTransition } from "react-transition-group";
import AlertBox from "../common/AlertBox/AlertBox";
import { textShorten, titleShorten } from "../helpers/shorten";

const QuickView = ({ item, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);
  const [isAlertBoxOpen, setIsAlertBoxOpen] = useState(false);
  const alertBoxOpen = () => {
    setIsAlertBoxOpen(true);
  };
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="flex justify-center items-center fixed inset-0 bg-gray-700 bg-opacity-60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ height: "500px" }}
        className="modalContent relative flex items-center justify-center flex-col md:flex-row text-black z-50 w-3/4 md:w-2/3 border rounded-md bg-gray-200 py-5 px-4"
      >
        <div className="lg:w-1/2 md:w-2/5 w-full h-1/2 sm:h-2/5 md:h-full bg-white flex flex-row justify-center items-center p-2">
          <img src={item.image} className=" w-auto max-h-full" alt="item img" />
        </div>
        <div className="flex flex-col justify-between md:w-3/5 lg:w-1/2 w-full h-1/2 sm:h-3/5 md:h-full py-5 px-6 bg-white">
          <div>
            <span className=" font-medium text-xl md:text-xl sm:text-base block">
              {titleShorten(item.title)}
            </span>
            <span className=" block font-medium text-gray-700 py-4 sm:py-1 md:py-4">
              {item.category}
            </span>
            <span className=" sm:block hidden sm:text-sm md:text-base">
              {textShorten(item.description, 250)}
            </span>
          </div>
          <div className="flex flex-row py-4 items-center justify-center mx-auto">
            <TextButton
              text={"Add To Cart"}
              clickHandler={() => dispatch(AddToCart(item))}
            />
            <LikeButton
              item={item}
              clickHandler={
                user ? () => dispatch(AddToList(item)) : alertBoxOpen
              }
            />
          </div>
        </div>
        <div className="absolute top-0.5 right-0.5">
          <Tooltip title="Close">
            <button
              onClick={() => setIsModalOpen(false)}
              className=" text-2xl text-gray-500 hover:text-black transition-colors duration-500 "
            >
              <AiOutlineCloseCircle />
            </button>
          </Tooltip>
        </div>
      </div>
      <CSSTransition
        in={isAlertBoxOpen}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <AlertBox setIsAlertBoxOpen={setIsAlertBoxOpen} isAlertBoxOpen={isAlertBoxOpen} />
      </CSSTransition>
    </div>
  );
};

export default QuickView;
