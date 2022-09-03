import React from "react";
import LayoutWrapper from "../HOC/LayoutWrapper";
import Store from "../Store/Store";

const Shop = () => {
  return (
    <div>
      <Store />
    </div>
  );
};

export default LayoutWrapper(Shop);
