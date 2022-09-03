import React from "react";
import Slider from "../Banner/Slider";
import History from "../History/History";
import Popular from "../Popular/Popular";
import Shipment from "../Shipment/Shipment";
import Quotes from "../Quotes/Quotes";
import LayoutWrapper from "../HOC/LayoutWrapper";
import BlogShare from "../BlogShare/BlogShare";

const Home = () => {
  return (
    <div >
      <Slider />
      <History />
      <Popular />
      <Shipment />
      <BlogShare/>
      <Quotes />
    </div>
  );
};

export default LayoutWrapper(Home);
