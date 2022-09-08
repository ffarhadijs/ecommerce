import React from "react";
import ForgetPassForm from "../ForgetPassForm/ForgetPassForm";
import LayoutWrapper from "../HOC/LayoutWrapper";


const ForgetPass = () => {


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-50">
      <ForgetPassForm/>
    </div>
  );
};

export default LayoutWrapper(ForgetPass);
