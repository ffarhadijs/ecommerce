import React, { useState, useEffect } from "react";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { shorten, textShorten, titleShorten } from "../helpers/shorten";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/features/cart/cartSlice";
import QuickView from "../QuickView/QuickView";
import { CSSTransition } from "react-transition-group";
import Tooltip from "../common/Tooltip/Tooltip";
import { fetchProducts } from "../../servives/api/products/productsSlice";
import { categoryData, rateData } from "../../data/dummyData/dummyData";
import { categoryNumber, rateNumber } from "../helpers/filterNumber";
import { Box, Slider, Rating } from "@mui/material";
import TextButton from "../common/Buttons/Text/TextButton";


const Store = () => {
  const [filter, setFilter] = useState({
    category: "",
    price: [0, 1000],
    rate: "All",
    sort: "",
  });
  const [list, setList] = useState(false);

  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilter({ category: "", price: [1, 1000], rate: "All", sort: "" });
  };

  const listShow = () => {
    setList(true);
  };

  const gridShow = () => {
    setList(false);
  };

  const products = useSelector((state) => state.products.productsList);
  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = (item) => {
    setItem(item);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop{" "}
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Shop</span>
      </div>
      <div className="flex flex-col sm:flex-row items-start bg-gray-50">
        <div className="flex flex-col w-full sm:w-80 lg:w-96 p-5 bg-gray-50">
          <div className="flex flex-col bg-gray-50 pt-10">
            <span className=" text-2xl font-medium pb-5">Filter Panel</span>
            <div className="w-full">
              <span className=" text-xl font-medium ">Category</span>
              <div className="w-full my-4 p-2">
                {categoryData.map((item) => (
                  <div className="border " key={item.id}>
                    <input
                      type="radio"
                      name="category"
                      value={item.value}
                      id={item.name}
                      onChange={changeHandler}
                      checked={filter.category === item.value}
                      className="hidden"
                    />
                    <label
                      htmlFor={item.name}
                      className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
                    >
                      <span>{item.name}</span>
                      <span>{categoryNumber(item.value)}</span>
                    </label>
                  </div>
                ))}
              </div>{" "}
            </div>
            <div className="w-full">
              <span className="text-xl font-medium ">Filter By Price</span>
              <div>
                <Box className="mt-6 mb-10">
                  <Slider
                    name="price"
                    value={filter.price}
                    onChange={changeHandler}
                    valueLabelDisplay="auto"
                    step={50}
                    min={0}
                    max={1000}
                  />
                </Box>
              </div>{" "}
            </div>
            <div className="w-full">
              <span className="text-xl font-medium">Filter By Rate</span>
              <div className="w-full my-4 p-2">
                <div className="border">
                  <input
                    type="radio"
                    name="rate"
                    value="All"
                    id="all"
                    onChange={changeHandler}
                    checked={filter.rate === "All"}
                    className="hidden"
                  />
                  <label
                    htmlFor="all"
                    className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
                  >
                    <span>All</span>
                    <span>{rateNumber("All")}</span>
                  </label>
                </div>
                {rateData.map((item) => (
                  <div className="border" key={item.id}>
                    <input
                      type="radio"
                      name="rate"
                      value={Number(item.number)}
                      id={item.string}
                      onChange={changeHandler}
                      checked={filter.rate === item.number}
                      className="hidden"
                    />
                    <label
                      htmlFor={item.string}
                      className="flex flex-row justify-between items-center w-full cursor-pointer p-2 "
                    >
                      <div>
                        <Rating value={Number(item.number)} readOnly />
                      </div>
                      <span>{rateNumber(item.number)}</span>
                    </label>
                  </div>
                ))}
              </div>{" "}
            </div>
            <div>
              <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
            </div>
          </div>
        </div>

        <div className=" flex flex-col w-full justify-start items-start p-5">
          <div className="pb-2 flex flx-row items-center justify-between w-full">
            <div>
              <div>
                <label htmlFor="sort" id="sort">
                  Sort:
                </label>
                <select
                  className="outline-none"
                  name="sort"
                  id="sort"
                  value={filter.sort}
                  onChange={changeHandler}
                >
                  <option value="">None</option>
                  <option value={"lthp"}>Price:Low-High</option>
                  <option value={"htlp"}>Price:High-Low</option>
                  <option value={"lthr"}>Rate:Low-High</option>
                  <option value={"htlr"}>Rate:High-Low</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-24">
              <button
                className="text-xl font-semibold text-slate-800 border border-slate-900 p-2"
                onClick={listShow}
              >
                <FaList />
              </button>
              <button
                className="text-xl font-semibold text-slate-800 border border-slate-900 p-2"
                onClick={gridShow}
              >
                <BsFillGrid3X3GapFill />
              </button>
            </div>
          </div>
          <div
            className={`${
              list
                ? "w-full"
                : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 xl:gap-x-8"
            } grid grid-cols-1 gap-y-10 `}
          >
            {products.map((item) => (
              <div
                className={`${
                  list ? "h-52 lg:h-72 flex-row" : "h-[400px] flex-col"
                } flex product bg-gray-100 border `}
                key={item.id}
              >
                <div
                  className={`${
                    list ? "w-1/2 md:w-1/3 h-52 lg:h-72" : "w-full h-72"
                  } box relative bg-white flex flex-col justify-center items-center`}
                >
                  <img
                    src={item.image}
                    className=" w-3/4 max-h-full py-3 "
                    alt={item.title}
                  />
                  <div className=" tools w-full h-full absolute flex flex-row justify-center items-center">
                    <Tooltip title="Quick View">
                      <button
                        onClick={() => clickHandler(item)}
                        className="  bg-slate-800 w-16 h-16 rounded-full -my-6 mx-auto flex flex-col justify-center items-center text-white font-medium text-xl cursor-pointer hover:text-slate-900 hover:bg-slate-50 duration-500"
                      >
                        <IoEyeOutline />
                      </button>
                    </Tooltip>
                    <button
                      onClick={() => dispatch(AddToCart(item))}
                      className=" flex flex-row items-center justify-center bg-slate-800 w-full h-10 absolute bottom-0 left-0 text-gray-50 text-center hover:text-slate-900 hover:bg-slate-50 transition-colors duration-500"
                    >
                      <AiOutlineShoppingCart className="inline mx-2" />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
                <section
                  className={`${
                    list ? "h-auto p-3 md:py-3 md:px-6 w-1/2 md:w-2/3" : "p-2"
                  } `}
                >
                  <Link to={`${item.id}`}>
                    <div
                      className={`flex flex-col lg:justify-start justify-between items-start h-full`}
                    >
                      <div>
                        <span
                          className={`${
                            list ? "text-lg md:text-xl pb-3" : "pb-2"
                          } block font-semibold`}
                        >
                          {list
                            ? titleShorten(item.title)
                            : shorten(item.title)}
                        </span>
                        <div className="flex flex-row items-center pb-2">
                          <Rating
                            key={item.id}
                            name="half-rating-read"
                            defaultValue={item.rating.rate}
                            precision={0.1}
                            size="small"
                            readOnly
                          />
                        </div>
                      </div>
                      <span
                        className={`${
                          list ? "py-3" : "py-2"
                        } font-semibold block`}
                      >
                        $ {item.price}
                      </span>
                      <p className={`${list ? "hidden lg:block" : "hidden"}`}>
                        {textShorten(item.description, 150)}
                      </p>
                    </div>
                  </Link>
                </section>
              </div>
            ))}
            <CSSTransition
              in={isModalOpen}
              timeout={500}
              classNames="modal"
              unmountOnExit
            >
              <QuickView setIsModalOpen={setIsModalOpen} item={item} />
            </CSSTransition>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Store;
