import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Store from "../Store";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const MockStore = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Store />
      </Provider>
    </BrowserRouter>
  );
};

describe("Store", () => {
  it("should render category radio button", () => {
    render(<MockStore />);
    const radioButton = screen.getAllByTestId("category");
    expect(radioButton.length).toBe(5);
  });

  it("should render rate radio button", () => {
    render(<MockStore />);
    const radioButton = screen.getAllByTestId("rate");
    expect(radioButton.length).toBe(5);
  });

  it("should render price slider", () => {
    render(<MockStore />);
    const priceSlier = screen.getByTestId("priceSlider");
    expect(priceSlier).toBeInTheDocument();
  });

  it("should render the reset Button", () => {
    render(<MockStore />);
    const resetButton = screen.getByText("Reset Filters");
    expect(resetButton).toBeInTheDocument();
  });

  // it("should be able to change product shown style to list model",()=>{
  //   render(<MockStore/>)
  //   const productDiv= screen.getByTestId("productDiv")
  //   const listBox=screen.getByTestId("listBox")
  //   fireEvent.click(listBox)
  //   expect(productDiv.className).toContain("list")
  // })

});
