import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../public/assets/logo.svg";
import { Link } from "react-router-dom";
import {
  footerAccountItems,
  footerLinkItems,
} from "../../data/dummyData/dummyData";

const Footer = () => {
  return (
    <div className="bg-slate-900 pt-10 pb-2 text-gray-400 w-full">
      <div className="flex flex-wrap flex-row justify-between items-start">
        <div className="flex flex-col w-3/4 sm:w-1/3 px-6 items-start">
          <div className="mx-auto">
            <div className="p-4 ">
              <img
                src={logo}
                alt="site logo"
                className=" w-40 h-auto pb-4 text-center"
              />
            </div>
            <div className="flex flex-row justify-start items-center p-4">
              <div className="pr-4 text-xl">
                <MdOutlineLocationOn />
              </div>
              <p>Street No. 12, Newyork 12, USA</p>
            </div>
            <div className="flex flex-row justify-start items-center p-4">
              <div className="pr-4 text-xl">
                <FiPhone />
              </div>
              <div className="flex flex-col">
                <p className="pb-2">1.800.123.456789</p>
                <p>1.800.123.456789</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center p-4">
              <div className="pr-4 text-xl">
                <MdOutlineMail />
              </div>
              <div className="flex flex-col">
                <p className="pb-2">info@BoShop.com</p>
                <p>contact@BoShop.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 sm:w-1/3 items-center">
          <div className=" pt-4 pb-12">
            <span className=" text-xl font-semibold text-white">Links</span>
          </div>
          <div className="flex flex-col ">
            {footerLinkItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="py-2 hover:text-white hover:scale-105 transition-all duration-500"
              >
                {item.item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 sm:w-1/3 items-center">
          <div className=" pt-4 pb-12">
            <span className=" text-xl font-semibold text-white">
              Account Info
            </span>
          </div>
          <div className="flex flex-col ">
            {footerAccountItems.map((item) => (
              <button
                key={item.id}
                className="py-2 hover:text-white hover:scale-105 transition-all duration-500"
              >
                {item.item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto text-center py-1 px-2 text-sm" style={{borderTop:"1px solid rgb(71 85 105)"}}>
        <span>
          ?? 2022 BoShop. All rights reserved - Developed with ??? by Farhad
          Farhadi
        </span>
      </div>
    </div>
  );
};

export default Footer;
