import React, { useState } from "react";
import TextButton from "../common/Buttons/Text/TextButton";
import LayoutWrapper from "../HOC/LayoutWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const ForgetPass = () => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async () => {
      try {
        setError('')
        await sendPasswordResetEmail(auth, formik.values.email);
        setAlert(true);
        formik.setValues = { email: "" };
      } catch (e) {
        setError(
          e.message == "Firebase: Error (auth/user-not-found)."
            ? "User not found"
            : e.message == "Firebase: Error (auth/too-many-requests)."
            ? "Too many request, Please wait."
            : "Error!"
        );
        console.log(e.message);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required"),
    }),
  });


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-50">
      <div className=" mb-10 h-auto -mt-28">
        <h1 className="text-slate-800 font-semibold text-2xl mb-10 ">
          Input your email address for reset password
        </h1>
        {alert && (
          <div className=" bg-green-400 p-4 rounded-md">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-max">
                <AiOutlineCheckCircle className="text-white text-2xl font-semibold" />
                <span className="font-semibold text-green-50 px-4">
                  Check yout inbox!
                </span>
              </div>
              <button
                className="text-white text-2xl font-semibold hover:bg-white hover:bg-opacity-30 rounded-full p-0.5"
                onClick={() => setAlert(false)}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className=" bg-red-400 p-4  rounded-md">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-max">
                <AiOutlineCheckCircle className="text-white text-2xl font-semibold" />
                <span className="font-semibold text-red-50 px-4">
                  {error}
                </span>
              </div>
              <button
                className="text-white text-2xl font-semibold hover:bg-white hover:bg-opacity-30 rounded-full p-0.5"
                onClick={() => setError('')}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          </div>
        )}

        <form className="w-96 mx-auto" onSubmit={formik.handleSubmit}>
          <div className="my-6 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              type={"text"}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Address"
              id="email"
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <TextButton type={"submit"} text={"reset"} className="mx-0" />
        </form>
      </div>
    </div>
  );
};

export default LayoutWrapper(ForgetPass);
