import React, { useState, useEffect } from "react";
import { blogs } from "../../data/blogs/blogs";
import { AiOutlineUser, AiOutlineTag } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextButton from "../common/Buttons/Text/TextButton";
import { blogsYear } from "../../data/dummyData/dummyData";
import { yearNumber } from "../helpers/filterNumber";
import { blogsCategory } from "../../data/dummyData/dummyData";
import { tagsNumber } from "../helpers/filterNumber";

const BlogList = () => {
  const [FilteredBlogs, setFilteredBlogs] = useState(blogs);
  const [filter, setFilter] = useState({
    search: "",
    tags: "All Tags",
    year: "All",
  });
  const applyFilter = () => {
    let filtered = blogs;

    if (filter.search !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    if (filter.tags === "All Tags") {
      filtered = filtered.filter(
        (blog) =>
          blog.tags === "Furniture" ||
          blog.tags === "Fashion" ||
          blog.tags === "Wood" ||
          blog.tags === "Curtains" ||
          blog.tags === "Personal"
      );
    } else {
      filtered = filtered.filter((blog) => blog.tags === filter.tags);
    }
    if (filter.year === "All") {
      filtered = filtered.filter(
        (blog) =>
          blog.year === "2022" || blog.year === "2021" || blog.year === "2020"
      );
    } else {
      filtered = filtered.filter((blog) => blog.year === filter.year);
    }

    setFilteredBlogs(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const resetFilters = () => {
    setFilter({ search: "", tags: "All Tags", year: "All" });
  };
  return (
    <div className="bg-gray-50 px-8">
      <div className="flex flex-col sm:flex-row items-start justify-center mx-auto">
        <div className=" w-full sm:w-96 flex flex-col justify-start items-start py-10 mr-2">
          <div className="flex flex-col bg-gray-50 pt-10 sm:pr-8 w-full">
            <span className=" text-2xl font-medium pb-5">Filter Panel</span>
            <div className="w-full ">
              <span className=" text-xl font-medium ">Search</span>
              <input
                placeholder="Search..."
                type="text"
                onChange={changeHandler}
                name="search"
                value={filter.search}
                className="w-full p-2 border outline-none mb-10 mt-5"
              />
            </div>
            <div className="w-full mb-10">
              <span className=" text-xl font-medium ">Tags</span>
              <div className="w-full my-4 p-2">
                {blogsCategory.map((item) => (
                  <div className="border " key={item.id}>
                    <input
                      type="radio"
                      name="tags"
                      value={item.name}
                      id={item.name}
                      onChange={changeHandler}
                      checked={filter.tags === item.name}
                      className="hidden"
                      data-testid="tags"
                    />
                    <label
                      htmlFor={item.name}
                      className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
                    >
                      <span>{item.name}</span>
                      <span>{tagsNumber(item.name)}</span>
                    </label>
                  </div>
                ))}
              </div>{" "}
            </div>
            <div className="w-full mb-10">
              <span className="text-xl font-medium">Filter By Year</span>
              <div className="w-full my-4 p-2">
                {blogsYear.map((item) => (
                  <div className="border" key={item.id}>
                    <input
                      type="radio"
                      name="year"
                      value={item.year}
                      id={item.year}
                      onChange={changeHandler}
                      checked={filter.year === item.year}
                      className="hidden"
                      data-testid="year"
                    />
                    <label
                      htmlFor={item.year}
                      className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
                    >
                      <span>{item.year}</span>
                      <span>{yearNumber(item.year)}</span>
                    </label>
                  </div>
                ))}
              </div>{" "}
            </div>
            <div>
              <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center py-10">
          <div>
            {FilteredBlogs.map((blog) => (
              <div
                className="flex flex-col justify-center items-start py-10 border-b-2"
                key={blog.id}
              >
                <img
                  src={blog.image}
                  alt="blog img"
                  className="w-full h-auto mx-auto"
                />
                <Link
                  to={`${blog.id}`}
                  data-testid="title"
                  className="text-2xl font-semibold text-slate-800 hover:text-yellow-400 transition-colors duration-300 pb-5 pt-8"
                >
                  {blog.title}
                </Link>
                <div className="flex flex-row w-96 justify-between items-center">
                  <div className="flex flex-row justify-start items-center">
                    <AiOutlineUser className="mx-2" />
                    <span className="text-sm text-gray-700">
                      by {blog.user.name}
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <BsCalendar3 className="mx-2" />
                    <span className="text-sm text-gray-700">
                      {blog.createdAt}
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <FaRegComment className="mx-2" />
                    <span className="text-sm text-gray-700">
                      {blog.comment}
                    </span>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <AiOutlineTag className="mx-2" />
                    <span className="text-sm text-gray-700">{blog.tags}</span>
                  </div>
                </div>
                <p className="py-4 px-2 text-gray-600 leading-8">
                  {blog.dsecription}
                </p>
                <Link to={`${blog.id}`}>
                  <TextButton text={"Read More"} />
                </Link>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
