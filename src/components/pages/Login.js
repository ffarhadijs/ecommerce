import React, { useState, useEffect } from "react";
import TextButton from "../common/Buttons/Text/TextButton";
import LayoutWrapper from "../HOC/LayoutWrapper";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux/es/exports";
import { onAuthStateChanged } from "firebase/auth";
import { saveUser } from "../../redux/features/auth/authSlice";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        setError("");
        await signInWithEmailAndPassword(
          auth,
          formik.values.email,
          formik.values.password
        );
        navigate("/dashboard");
      } catch (e) {
        setError(
          e.message === "Firebase: Error (auth/wrong-password)."
            ? "Wrong password."
            : e.message === "Firebase: Error (auth/user-not-found)."
            ? "The email address is incorrect."
            : (e.message = "Firebase: Error (auth/network-request-failed)."
                ? "Network Error."
                : "Please try again later")
        );
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address")
        .required("Required"),
      password: Yup.string()
        .min(6, "at least 6 characters must be")
        .required("Required"),
    }),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);
  return (
    <div className="w-full min-h-screen flex justify-center bg-slate-50 p-10">
      <div className=" w-96 h-auto my-10">
        <div className="mb-14 text-center">
          <span className="text-4xl sm:text-5xl font-semibold text-slate-800 text-center">
            Login
          </span>
          <span className="text-4xl sm:text-5xl font-semibold text-slate-300 text-center mx-4">
            /
          </span>
          <Link
            to="/signup"
            className="text-4xl sm:text-5xl font-semibold text-slate-300 text-center"
          >
            Sign Up
          </Link>
        </div>
        {error && (
          <div className=" bg-red-400 p-4  rounded-md">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center w-max">
                <AiOutlineCheckCircle className="text-white text-2xl font-semibold" />
                <span className="font-semibold text-red-50 px-4">{error}</span>
              </div>
              <button
                className="text-white text-2xl font-semibold hover:bg-white hover:bg-opacity-30 rounded-full p-0.5"
                onClick={() => setError("")}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
          </div>
        )}

        <form onSubmit={formik.handleSubmit}>
          <div className="my-6 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div className="my-6 h-20">
            <label htmlFor="password" className="block font-semibold ">
              Password:*
            </label>
            <input
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-sm font-semibold">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="flex flex-row justify-between items-start">
            <TextButton text={"Login"} type={"submit"} className="mx-0" />
            <Link to="/forget-password">
              <span className="text-slate-800 font-semibold">
                Forget Password
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LayoutWrapper(Login);
