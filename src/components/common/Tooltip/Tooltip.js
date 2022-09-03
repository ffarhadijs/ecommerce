import React, { useState } from "react";

const Tooltip = ({ children, title }) => {
  return (
    <div
      className="relative flex flex-col items-center group"
    >
      {children}
      <div
        className="bg-gray-600 z-10 rounded-md my-1 py-1 px-2 w-max absolute top-0 mt-12 text-white text-xs hidden group-hover:block"
      >
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Tooltip;
