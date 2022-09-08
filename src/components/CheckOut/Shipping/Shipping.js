import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextButton from "../../common/Buttons/Text/TextButton";

const Shipping = () => {
  const validation = Yup.object({
    firstName: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    company: Yup.string().max(25, "Must be 25 characters or less"),
    address: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    city: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    country: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Required"),
    phone: Yup.string().required("Required"),
  });

  const shippingData = [
    {
      id: 0,
      name: "firstName",
      type: "text",
      label: "First Name:*",
    },
    {
      id: 1,
      name: "lastName",
      type: "text",
      label: "Last Name:*",
    },
    {
      id: 2,
      name: "company",
      type: "text",
      label: "Company Name:",
    },
    {
      id: 3,
      name: "address",
      type: "text",
      label: "Address:*",
    },
    {
      id: 4,
      name: "city",
      type: "text",
      label: "City:*",
    },
    {
      id: 5,
      name: "country",
      type: "text",
      label: "Country:*",
    },
    {
      id: 6,
      name: "email",
      type: "text",
      label: "Email Address:*",
    },
    {
      id: 7,
      name: "phone",
      type: "number",
      label: "Phone:*",
    },
  ];

  return (
    <div className="p-4 w-full">
      <h1 className="text-slate-800 text-2xl font-bold my-6">
        Shipping Information
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          company: "",
          address: "",
          city: "",
          country: "",
          email: "",
          phone: "",
        }}
        onsubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validation}
      >
        <Form className="flex flex-col sm:flex-row justify-start items-start sm:items-center flex-wrap">
          {shippingData.map((input) => (
            <div className="h-24 w-full sm:w-1/2" key={input.id}>
              <label
                htmlFor={input.name}
                className="text-gray-600 text-sm font-semibold py-1 block"
              >
                {input.label}
              </label>
              <Field
                className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
                type={input.type}
                id={input.name}
                name={input.name}
              />
              <span className="text-red-500 text-xs font-semibold block">
                <ErrorMessage name={input.name} />
              </span>
            </div>
          ))}
          <TextButton text={"Submit"} />
        </Form>
      </Formik>
    </div>
  );
};

export default Shipping;
