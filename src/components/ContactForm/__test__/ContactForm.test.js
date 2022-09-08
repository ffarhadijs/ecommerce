import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "../ContactForm";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const MockContactForm = () => {
  return (
    <BrowserRouter>
      <ContactForm />
    </BrowserRouter>
  );
};

describe("ContactForm", () => {


it("should render input form with value", ()=>{
    render(<MockContactForm/>)
    const fName=screen.getByLabelText("Full Name:*")
    const email=screen.getByLabelText("Email address:*")
    const phone=screen.getByLabelText("Phone:*")
    const subject=screen.getByLabelText("Subject:")
    const Message=screen.getByLabelText("Message:*")

    fireEvent.change(fName, {target:{value:"test"}} )
    fireEvent.change(email, {target:{value:"test"}} )
    fireEvent.change(phone, {target:{value:"123"}} )
    fireEvent.change(subject, {target:{value:"test"}} )
    fireEvent.change(Message, {target:{value:"test"}} )
    
    expect(fName.value).toBe("test")
    expect(email.value).toBe("test")
    expect(phone.value).toBe("123")
    expect(subject.value).toBe("test")
    expect(Message.value).toBe("test")
    
})

it("should render input form with empty value after submit", ()=>{
    render(<MockContactForm/>)
    const fName=screen.getByLabelText("Full Name:*")
    const email=screen.getByLabelText("Email address:*")
    const phone=screen.getByLabelText("Phone:*")
    const subject=screen.getByLabelText("Subject:")
    const Message=screen.getByLabelText("Message:*")
    const submit=screen.getByRole("button")
    
    fireEvent.click(submit)
    
    expect(fName.value).toBe("")
    expect(email.value).toBe("")
    expect(phone.value).toBe("")
    expect(subject.value).toBe("")
    expect(Message.value).toBe("")
    
})

});
