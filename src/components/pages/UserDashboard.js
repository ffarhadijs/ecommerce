import React from "react";
import TextButton from "../common/Buttons/Text/TextButton";
import LayoutWrapper from "../HOC/LayoutWrapper";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";


const UserDashboard = () => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <TextButton text={"log out"} clickHandler={clickHandler} />
    </div>
  );
};

export default LayoutWrapper(UserDashboard);
