import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import authApi from "../../api/authApi";
import AuthLayout from "../../components/AuthLayout";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../components/CustomAlert";
import { validate } from "../../utils/validation";

const Register = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  useEffect(() => {
    document.title = "Sign up";
  }, []);

  const inputClick = (value) => {
    inputRefs[value].current.style.top = "-12px";
    inputRefs[value].current.style.color = "#6366f1";
  };

  const navigate = useNavigate(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const rules = {
      name: ["isRequired", "isAlpha", "minChar"],
      email: ["isRequired", "isEmail"],
      password: ["isRequired", "isAlpha", "minChar"],
    };

    const validateData = validate(dataUser, rules);

    if (Object.keys(validateData).length) {
      return setErrorMessage(validateData);
    }

    authApi
      .register(dataUser)
      .then((result) => {
        if (result.status !== 201) return;

        setIsOpenAlert(!isOpenAlert);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      })
      .catch((error) => {
        if (error.response.status !== 422) return console.log(error);

        setErrorMessage({ email: error.response.data.message });
      });
  };

  return (
    <>
      <CustomAlert
        isOpen={isOpenAlert}
        textColor={"text-green-800"}
        bgColor={"bg-green-50"}
        title={"create account successfully"}
      />
      <AuthLayout
        title={"Get Started"}
        subtitle={
          <span>Register to create your account and start exploring</span>
        }
        footer={"have an account? "}
        action={"Login"}
        link={"/signin"}
      >
        <form onSubmit={onSubmit} className="w-full space-y-3">
          <div
            className="w-full relative group pb-2"
            onClick={() => inputClick("name")}
          >
            <label
              ref={inputRefs.name}
              htmlFor="name"
              className={clsx(
                "absolute top-3 left-3 bg-white rounded-xl group-hover:text-indigo-500 text-gray-600 text-sm font-medium px-1 transition-all duration-300 ease-in-out"
              )}
            >
              full name
            </label>
            <input
              id="name"
              type="text"
              value={dataUser.name}
              className="bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 group-hover:border-indigo-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) =>
                setDataUser({ ...dataUser, name: e.target.value })
              }
            />
            {errorMessage.name && (
              <span className="text-sm text-red-600 pl-1">
                {errorMessage.name}
              </span>
            )}
          </div>
          <div
            className="w-full relative group pb-2"
            onClick={() => inputClick("email")}
          >
            <label
              ref={inputRefs.email}
              htmlFor="email"
              className={clsx(
                "absolute top-3 left-3 bg-white rounded-xl group-hover:text-indigo-500 text-gray-600 text-sm font-medium px-1 transition-all duration-300 ease-in-out"
              )}
            >
              email address
            </label>
            <input
              id="email"
              type="text"
              value={dataUser.email}
              className="bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 group-hover:border-indigo-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) =>
                setDataUser({ ...dataUser, email: e.target.value })
              }
            />
            {errorMessage.email && (
              <span className="text-sm text-red-600 pl-1">
                {errorMessage.email}
              </span>
            )}
          </div>
          <div
            className="w-full relative group pb-8"
            onClick={() => inputClick("password")}
          >
            <label
              ref={inputRefs.password}
              htmlFor="password"
              className={clsx(
                "absolute top-3 left-3 bg-white rounded-xl group-hover:text-indigo-500 text-gray-600 text-sm font-medium px-1 transition-all duration-300 ease-in-out"
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
              value={dataUser.password}
              className="bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 group-hover:border-indigo-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              onChange={(e) =>
                setDataUser({ ...dataUser, password: e.target.value })
              }
            />
            {errorMessage.password && (
              <span className="text-sm text-red-600 pl-1">
                {errorMessage.password}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
