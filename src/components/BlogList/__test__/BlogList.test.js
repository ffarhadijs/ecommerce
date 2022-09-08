import { fireEvent, render, screen } from "@testing-library/react";
import BlogList from "../BlogList";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const MockBlogList = () => {
  return (
    <BrowserRouter>
      <BlogList />
    </BrowserRouter>
  );
};

describe("BlogList", () => {
  it("should render input element", () => {
    render(<MockBlogList />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<MockBlogList />);
    const inputElement = screen.getByPlaceholderText(/Search.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  it("should render tags radio button", () => {
    render(<MockBlogList />);
    const radioButton = screen.getAllByTestId(/tags/i);
    expect(radioButton).not.toBeNull()
  });
  
  it("shoud be able to change tags radio button value",()=>{
    render(<MockBlogList/>)
    const radioButton=screen.getByLabelText(/Furniture/i)
    fireEvent.change(radioButton, {target:{value:"test"}})
    expect(radioButton.value).toBe("test")
  })

  it("should render year radio button", () => {
    render(<MockBlogList />);
    const radioButton = screen.getAllByTestId(/year/i);
    expect(radioButton).not.toBeNull()
  });
  
  it("shoud be able to change year radio button value",()=>{
    render(<MockBlogList/>)
    const radioButton=screen.getByLabelText(/2022/i)
    fireEvent.change(radioButton, {target:{value:"test"}})
    expect(radioButton.value).toBe("test")
  })

  it("should render reset filter button",()=>{
    render(<MockBlogList/>)
    const resetFilterButton=screen.getByText(/Reset Filters/i)
    expect(resetFilterButton).toBeInTheDocument()
  })

});
