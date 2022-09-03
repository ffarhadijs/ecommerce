import { useSelector } from "react-redux";
import { blogs } from "../../data/blogs/blogs";

export const categoryNumber = (category) => {
  const products= useSelector(state=>state.products.productsList)
  if ((category === "")) {
    return products.length;
  } else {
    return products.filter((item) => item.category === category).length;
  }
};



export const rateNumber = (rate) => {
  const products= useSelector(state=>state.products.productsList)
  if ((rate === "All")) {
    return products.length;
  } else {
    return products.filter((item) => Math.floor(item.rating.rate) == rate).length;
  }
};



export const tagsNumber = (tags) => {
    if ((tags === "All Tags")) {
      return blogs.length;
    } else {
      return blogs.filter((item) => item.tags === tags).length;
    }
  };
  



export const yearNumber = (year) => {
  if ((year === "All")) {
    return blogs.length;
  } else {
    return blogs.filter((item) => item.year == year).length;
  }
};
