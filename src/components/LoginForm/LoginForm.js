import React, { useState, useEffect } from "react";
import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { saveUser } from "../../redux/features/auth/authSlice";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import TextButton from "../common/Buttons/Text/TextButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [error, setError] = useState("");

  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid Email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "at least 6 characters must be")
      .required("Required"),
  });

  const navigate = useNavigate();

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
    <div>
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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            setError("");
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
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
        }}
        validationSchema={validation}
      >
        <Form>
          <div className="my-6 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <Field
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="email"
              type="text"
              name="email"
              data-testid="email"
            />
            <span className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="my-6 h-20">
            <label htmlFor="password" className="block font-semibold ">
              Password:*
            </label>
            <Field
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="password"
              type="password"
              name="password"
              data-testid="password"
            />
            <span className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="password" />
            </span>
          </div>
          <div className="flex flex-row justify-between items-start">
            <TextButton text={"Login"} type={"submit"} className="mx-0" />
            <Link to="/forget-password">
              <span className="text-slate-800 font-semibold">
                Forget Password
              </span>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
