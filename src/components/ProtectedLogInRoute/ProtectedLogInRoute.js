import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProtectedLogInRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.value);
  if (user) {
    return <Navigate to={-1} />;
  }
  return children;
};

export default ProtectedLogInRoute;
