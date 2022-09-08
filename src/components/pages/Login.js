import React from "react";
import LayoutWrapper from "../HOC/LayoutWrapper";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";


const Login = () => {
  
  return (
    <div className="w-full min-h-screen flex justify-center bg-slate-50 p-10">
      <div className=" w-96 h-auto my-10">
        <div className="mb-14 text-center">
          <span className="text-4xl sm:text-5xl font-semibold text-slate-800 text-center">
            Login
          </span>
          <span className="text-4xl sm:text-5xl font-semibold text-slate-300 text-center mx-4">
            /
          </span>
          <Link
            to="/signup"
            className="text-4xl sm:text-5xl font-semibold text-slate-300 text-center"
          >
            Sign Up
          </Link>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LayoutWrapper(Login);
