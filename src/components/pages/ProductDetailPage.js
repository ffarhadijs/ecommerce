import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import LayoutWrapper from "../HOC/LayoutWrapper";
import Popular from "../Popular/Popular";
import Shipment from "../Shipment/Shipment";

const ProductDetailPage = () => {

  return (
    <div>
      <ProductDetail/>
      <Popular/>
      <Shipment/>
    </div>
  );
};

export default LayoutWrapper(ProductDetailPage);
