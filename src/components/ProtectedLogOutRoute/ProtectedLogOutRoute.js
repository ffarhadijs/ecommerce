import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProtectedLogOutRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.value);
  if (user) {
    return children ;
  }else{
    return <Navigate to={-1} />
  }

};

export default ProtectedLogOutRoute;
