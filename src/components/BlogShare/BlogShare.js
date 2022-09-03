import React from "react";
import { blogs } from "../../data/blogs/blogs";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogShare = () => {
  return (
    <div className="mt-10 pt-14 pb-20 px-5 bg-slate-50 h-auto w-full">
      <h2 className="text-3xl font-bold text-slate-800 text-center">
        Knowledge Share
      </h2>
      <p className="text-center italic py-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        maximus vehicula. Sed feugiat, tellus vel tristique posuere,
      </p>
      <div className="flex flex-row justify-center md:justify-around items-start w-full flex-wrap">
        {blogs.slice(blogs.length - 3, blogs.length).map((item) => (
          <div key={item.id} className="w-full sm:w-2/3 md:w-2/5 lg:w-[350px] m-5 h-auto bg-white">
            <img src={item.image} className="w-full h-auto" />
            <div className=" px-4 py-6 ">
              <div className="flex flex-row w-full justify-between items-center pb-4">
                <div className="flex flex-row justify-start items-center">
                  <AiOutlineUser className="mx-2" />
                  <span className="text-sm text-gray-700">
                    by :{" "} 
                    <span className="text-base text-slate-800 font-bold">
                       {item.user.name}
                    </span>
                  </span>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <BsCalendar3 className="mx-2" />
                  <span className="text-base text-slate-800 font-bold">
                    {item.createdAt.slice(5, item.createdAt.length)}
                  </span>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <FaRegComment className="mx-2" />
                  <span className="text-base text-slate-800 font-bold">
                    {item.comment}
                  </span>
                </div>
              </div>
              <h2 className="text-slate-800 font-semibold text-xl pb-4">
                {item.title}
              </h2>
              <p>{item.dsecription.slice(0, 120)}</p>
              <Link to={`blog/${item.id}`} className="pt-4">
                <span className="text-slate-800 font-bold text-base">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogShare;
