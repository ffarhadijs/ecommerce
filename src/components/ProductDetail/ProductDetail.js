import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import LikeButton from "../common/Buttons/Like/LikeButton";
import TextButton from "../common/Buttons/Text/TextButton";
import { AddToList } from "../../redux/features/wishList/wishSlice";
import { CSSTransition } from "react-transition-group";
import AlertBox from "../common/AlertBox/AlertBox";

const ProductDetail = () => {
  const [isAlertBoxOpen, setIsAlertBoxOpen] = useState(false);
  const user = useSelector((state) => state.auth.value);
  const alertBoxOpen = () => {
    setIsAlertBoxOpen(true);
  };
  const dispatch = useDispatch();

  const id = useParams().id;
  const [product,setProduct]=useState({})
  const getProducts=async ()=>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data= await response.json()
    return data
  }

  useEffect(()=>{
    const getApi=async()=>{
      return setProduct(await getProducts())
    }
    getApi()
  },[])

  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <Link to="/shop" className=" text-gray-600 ">
          shop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Product</span>
      </div>

      <div className="flex flex-col md:flex-row p-6 justify-center items-start">
        
          <div className=" w-full md:w-1/2 py-6 flex flex-row justify-center items-center">
            <div className=" w-3/4 h-96 ">
              <img src={product.image} className=" w-auto h-full mx-auto" />
            </div>
          </div>
        
        <div className=" w-full md:w-1/2 py-6 flex flex-col justify-between items-center">
          <div>
            <p className=" py-4 text-2xl font-semibold text-black ">
              {product.title}
            </p>
            <Stack
              spacing={1}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating
                key={product.id}
                name="half-rating-read"
                defaultValue={product.rating&&product.rating.rate}
                precision={0.1}
                size="small"
                readOnly
              />
            </Stack>
            
              <div className="py-3">
                <span className=" text-gray-600 font-semibold">Category: </span>
                <span className="font-semibold text-black">
                  {product.category}
                </span>
              </div>
            
            <p className="font-bold text-slate-900 text-xl pb-3">
              <sup>$</sup>
              {product.price}
            </p>
            <p>{product.description}</p>
          </div>

          <div className="flex flex-row justify-center items-center pt-10">
            <TextButton
              text={"Add To Cart"}
              clickHandler={() => dispatch(AddToCart(product))}
            />
            <LikeButton
              item={product}
              clickHandler={
                user ? () => dispatch(AddToList(product)) : alertBoxOpen
              }
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={isAlertBoxOpen}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <AlertBox setIsAlertBoxOpen={setIsAlertBoxOpen} />
      </CSSTransition>
    </div>
  );
};

export default ProductDetail;
