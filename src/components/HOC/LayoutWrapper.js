import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LayoutWrapper = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default LayoutWrapper;
