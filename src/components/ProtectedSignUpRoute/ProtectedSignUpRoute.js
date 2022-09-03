import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProtectedSignUpRoute = ({ children }) => {
const user=useSelector(state=>state.auth.value)
  if (user) {
    return <Navigate to={"/dashboard"} />;
  }
  return children;
};

export default ProtectedSignUpRoute;