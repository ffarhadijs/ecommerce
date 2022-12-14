import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs/blogs";
import { AiOutlineUser, AiOutlineTag } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import team1 from "../../public/assets/team-2.jpg";
import Tooltip from "../common/Tooltip/Tooltip";

const BlogDetails = () => {
  const blogId = useParams().id;
  const blog = blogs[blogId];

  return (
    <div className="bg-gray-50 py-5 sm:py-20">
      <div className="w-full px-2 sm:p-0 sm:w-5/6 flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-start px-2">
          <img src={blog.image} className="py-10" alt="blog img" />
          <h2 className="text-2xl font-semibold py-3">{blog.title}</h2>
          <div className="flex flex-row w-full sm:w-96 justify-between items-center py-3">
            <div className="flex flex-row justify-start items-center">
              <AiOutlineUser className="mx-2" />
              <span className="text-sm text-gray-700">by {blog.user.name}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <BsCalendar3 className="mx-2" />
              <span className="text-sm text-gray-700">{blog.createdAt}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaRegComment className="mx-2" />
              <span className="text-sm text-gray-700">{blog.comment}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <AiOutlineTag className="mx-2" />
              <span className="text-sm text-gray-700">{blog.tags}</span>
            </div>
          </div>
          <p className="pt-3 pb-6 leading-6 text-gray-800">{blog.text}</p>
          <div className="flex flex-row justify-around items-center w-full sm:w-5/6 mx-auto my-8">
            <div>
              <span className="sm:text-xl text-slate-800 font-bold">Tags:</span>
              <span className="sm:text-xl font-semibold text-gray-800 px-3">
                {blog.tags}
              </span>
            </div>
            <div className="flex flex-row justify-center items-center text-slate-800 sm:text-xl">
              <span className=" font-bold">Share With:</span>
                <Tooltip title="Instagram">
              <button className="text-xl mx-2 sm:mx-4 hover:text-yellow-400 transition-colors">
                  <FiInstagram />
              </button>
                </Tooltip>
                <Tooltip title="FaceBook">
              <button className="text-xl mx-2 sm:mx-4 hover:text-yellow-400 transition-colors">
                  <FiFacebook />
              </button>
                </Tooltip>
                <Tooltip title="Twitter">
              <button className="text-xl mx-2 sm:mx-4 hover:text-yellow-400 transition-colors">
                  <FiTwitter />
              </button>
                </Tooltip>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col sm:flex-row justify-start items-center lg:w-2/3 md:w-4/5 w-full p-4 mx-auto my-8 sm:my-16">
            <div className=" w-1/3 sm:w-1/5 px-2">
              <img src={team1} className=" rounded-full" />
            </div>
            <div className=" w-full sm:w-4/5 flex flex-col justify-center items-start p-4">
              <div className="flex flex-row justify-between items-center w-full">
                <div>
                  <h3 className=" text-slate-800 font-semibold text-lg">
                    NATASHA S.
                  </h3>
                  <span className="text-gray-600 text-sm">Co-Founder</span>
                </div>
                <div className="flex flex-row justify-center items-center text-slate-800 ">
                  <Tooltip title="Instagram">
                    <button className="mx-4 hover:text-yellow-400 transition">
                      <FiInstagram />
                    </button>
                  </Tooltip>
                  <Tooltip title="FaceBook">
                    <button className="mx-4 hover:text-yellow-400 transition">
                      <FiFacebook />
                    </button>
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <button className="mx-4 hover:text-yellow-400 transition">
                      <FiTwitter />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <p className=" text-gray-800 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                NullamMorbi ac scelerisque mauris. Etiam sodales a nulla ornare
                viverra. Nunc at blandit neque, bociis natoque penatcing e
                scelerisque miscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
