import React from "react";
import LayoutWrapper from "../HOC/LayoutWrapper";
import { Link } from "react-router-dom";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex  justify-center bg-slate-50">
      <div className=" w-96 h-auto my-10">
        <div className="mb-14 text-center">
          <Link
            to="/login"
            className="text-5xl font-semibold text-slate-300 text-center"
          >
            Login
          </Link>
          <span className="text-5xl font-semibold text-slate-300 text-center mx-4">
            /
          </span>

          <span className="text-5xl font-semibold text-slate-800 text-center">
            Sign Up
          </span>
        </div>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default LayoutWrapper(SignUp);
