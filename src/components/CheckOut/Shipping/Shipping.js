import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextButton from "../../common/Buttons/Text/TextButton";

const Shipping = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      country: "",
      email: "",
      phone: "",
    },
    onsubmit: () => {
      formik.setValues({
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        city: "",
        country: "",
        email: "",
        phone: "",
      });
      formik.setTouched({}, false);
    },
    validationSchema: Yup.object({
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
    }),
  });

  const shippingData = [
    {
      id:0,
      name: "firstName",
      value: formik.values.firstName,
      type: "text",
      label: "First Name:*",
      touched: formik.touched.firstName,
      errors: formik.errors.firstName,
    },
    {
      id:1,
      name: "lastName",
      value: formik.values.lastName,
      type: "text",
      label: "Last Name:*",
      touched: formik.touched.lastName,
      errors: formik.errors.lastName,
    },
    {
      id:2,
      name: "company",
      value: formik.values.company,
      type: "text",
      label: "Company Name:",
      touched: formik.touched.company,
      errors: formik.errors.company,
    },
    {
      id:3,
      name: "address",
      value: formik.values.address,
      type: "text",
      label: "Address:*",
      touched: formik.touched.address,
      errors: formik.errors.address,
    },
    {
      id:4,
      name: "city",
      value: formik.values.city,
      type: "text",
      label: "City:*",
      touched: formik.touched.city,
      errors: formik.errors.city,
    },
    {
      id:5,
      name: "country",
      value: formik.values.country,
      type: "text",
      label: "Country:*",
      touched: formik.touched.country,
      errors: formik.errors.country,
    },
    {
      id:6,
      name: "email",
      value: formik.values.email,
      type: "text",
      label: "Email Address:*",
      touched: formik.touched.email,
      errors: formik.errors.email,
    },
    {
      id:7,
      name: "phone",
      value: formik.values.phone,
      type: "number",
      label: "Phone:*",
      touched: formik.touched.phone,
      errors: formik.errors.phone,
    },
  ];

  return (
    <div className="p-4 w-full">
      <h1 className="text-slate-800 text-2xl font-bold my-6">
        Shipping Information
      </h1>
      <form
        className="flex flex-col sm:flex-row justify-start items-start sm:items-center flex-wrap"
        onSubmit={formik.handleSubmit}
      >
        {shippingData.map((input) => (
          <div className="h-24 w-full sm:w-1/2" key={input.id}>
            <label
              htmlFor={input.name}
              className="text-gray-600 text-sm font-semibold py-1 block"
            >
              {input.label}
            </label>
            <input
              className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
              type={input.type}
              id={input.name}
              name={input.name}
              value={input.value}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {input.touched && input.errors ? (
              <p className="text-red-500 text-xs font-semibold">
                {input.errors}
              </p>
            ) : null}
          </div>
        ))}
        <TextButton text={"Submit"} />
      </form>
    </div>
  );
};

export default Shipping;
