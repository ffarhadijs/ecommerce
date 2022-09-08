import React, { useState, useEffect } from "react";
import TextButton from "../common/Buttons/Text/TextButton";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../redux/features/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validation = Yup.object({
    email: Yup.string()
      .email("Invalid Email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "at least 6 characters must be")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

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
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          setError("");
          try {
            setError("");
            await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            navigate("/dashboard");
          } catch (e) {
            setError("Failed to create an account");
            console.log(e.message);
          }
        }}
        validationSchema={validation}
      >
        <Form>
          <div className="my-8 h-20">
            <label htmlFor="email" className="block font-semibold">
              Email:*
            </label>
            <Field
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="email"
              type="text"
              name="email"
            />
            <span className="text-red-500 text-sm font-semibold">
              <ErrorMessage name={"email"} />
            </span>
          </div>
          <div className="my-8 h-20">
            <label htmlFor="password" className="block font-semibold ">
              Password:*
            </label>
            <Field
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="password"
              type="password"
              name="password"
            />
            <span className="text-red-500 text-sm font-semibold">
              <ErrorMessage name={"password"} />
            </span>
          </div>
          <div className="my-8 h-20">
            <label htmlFor="confirm-password" className="block font-semibold">
              Confirm Password:*
            </label>
            <Field
              className="py-2 px-4 outline-none border border-slate-400 rounded-md mt-1 w-full"
              id="confirm-password"
              type="password"
              name="confirmPassword"
            />
            <span className="text-red-500 text-sm font-semibold">
              <ErrorMessage name={"confirmPassword"} />
            </span>
          </div>
          <TextButton
            disabled={user}
            text={"Sign Up"}
            type={"submit"}
            className="mx-0 disabled:bg-opacity-50 disabled:hover:bg-slate-800 disabled:hover:bg-opacity-50 disabled:hover:text-white"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
