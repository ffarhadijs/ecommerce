import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const MockLoginForm = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <LoginForm />
    </Provider>
    </BrowserRouter>
  );
};

describe("MockLoginForm", () => {
  it("render input elements", () => {
    render(<MockLoginForm />);
    const email = screen.getByTestId(/email/i);
    const password = screen.getByTestId(/email/i);
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("should input elements accept value",()=>{
    render(<MockLoginForm/>)
    const email= screen.getByTestId(/email/i)
    const password = screen.getByTestId(/email/i);
    fireEvent.click(email)
    fireEvent.change(email,{target:{value:"test"}})
    fireEvent.click(password)
    fireEvent.change(password,{target:{value:"test"}})

    expect(email.value).toBe("test")
    expect(password.value).toBe("test")
  })

});
