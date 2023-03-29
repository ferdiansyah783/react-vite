import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import CustomAlert from "../../components/CustomAlert";
import { validate } from "../../utils/validation";
import AuthLayout from "../../layouts/Auth";

const Login = () => {
  const [fieldsLogin, setFieldsLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });
  const [isOpenAlert, setIsOpenAlert] = useState({
    success: false,
    failure: false,
  });

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const navigate = useNavigate(null);

  useEffect(() => {
    document.title = "Sign in";
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const rules = {
      email: ["isRequired", "isEmail"],
      password: ["isRequired", "isAlpha", "minChar"],
    };

    const validateData = validate(fieldsLogin, rules);

    if (Object.keys(validateData).length) {
      return setErrorMessage(validateData);
    }

    authApi
      .admin(fieldsLogin)
      .then((result) => {
        if (result.status !== 200) return;

        const { access_token } = result?.data;
        localStorage.setItem("token", access_token);
        setIsOpenAlert({ ...isOpenAlert, success: true });
        setTimeout(() => {
          navigate("/backstore");
        }, 2000);
      })
      .catch((error) => {
        if (error.response.status !== 400) return console.log(error);

        setIsOpenAlert({ ...isOpenAlert, failure: true });
        setTimeout(() => {
          setIsOpenAlert({ ...isOpenAlert, failure: false });
        }, 4000);
      });
  };

  const inputClick = (value) => {
    inputRefs[value].current.style.top = "-12px";
    inputRefs[value].current.style.color = "#6366f1";
  };

  return (
    <>
      <CustomAlert
        isOpen={isOpenAlert.failure}
        textColor={"text-red-800"}
        bgColor={"bg-red-50"}
        title={"account not found"}
      />
      <CustomAlert
        isOpen={isOpenAlert.success}
        textColor={"text-green-800"}
        bgColor={"bg-green-50"}
        title={"login successfully"}
      />
      <AuthLayout
        title={"Login"}
        subtitle={
          <span>
            Hey, Enter your details to get sign in <br /> to your account
          </span>
        }
        footer={"don't have an account? "}
        action={"Sign up"}
        link={"/signup"}
      >
        <form onSubmit={onSubmit} className="w-full space-y-3">
          <div
            className="w-full relative group pb-2"
            onClick={() => inputClick("email")}
          >
            <label
              ref={inputRefs.email}
              htmlFor="email"
              className={clsx(
                "absolute top-3 left-3 bg-white group-hover:text-indigo-500 text-gray-600 text-sm font-medium px-1 transition-all duration-300 ease-in-out"
              )}
            >
              email address
            </label>
            <input
              id="email"
              type="text"
              className="bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 group-hover:border-indigo-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) =>
                setFieldsLogin({ ...fieldsLogin, email: e.target.value })
              }
            />
            {errorMessage.email && (
              <span className="text-sm text-red-600 pl-1">
                {errorMessage.email}
              </span>
            )}
          </div>
          <div
            className="w-full relative group"
            onClick={() => inputClick("password")}
          >
            <label
              ref={inputRefs.password}
              htmlFor="password"
              className={clsx(
                "absolute top-3 left-3 bg-white group-hover:text-indigo-500 text-gray-600 text-sm font-medium px-1 transition-all duration-300 ease-in-out"
              )}
            >
              password
            </label>
            <span className="absolute right-3 top-3 text-lg text-gray-600">
              <AiFillEye />
            </span>
            <input
              id="password"
              type="password"
              className="bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 group-hover:border-indigo-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) =>
                setFieldsLogin({ ...fieldsLogin, password: e.target.value })
              }
            />
            {errorMessage.password && (
              <span className="text-sm text-red-600 pl-1">
                {errorMessage.password}
              </span>
            )}
          </div>
          <div className="w-full flex justify-between text-indigo-500 text-sm pb-10">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                className="w-4 h-4 accent-indigo-500"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-gray-500 text-sm font-medium"
              >
                Remember me
              </label>
            </div>
            <p>Forgot password?</p>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
