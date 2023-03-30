import React, { useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import authApi from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { validate } from "../../utils/validation";
import CustomAlert from "../../components/CustomAlert";
import { motion } from "framer-motion";

const AdminLogin = () => {
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

  const navigate = useNavigate(null);

  useEffect(() => {
    document.title = "Admin";
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-screen flex justify-center items-center bg-stone-50 font-poppins"
      >
        <div className="flex flex-col max-w-sm items-center gap-7">
          <span className="text-5xl text-stone-700">
            <RiAdminFill />
          </span>
          <h1 className="text-2xl font-bold text-stone-700">Sign in</h1>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-5"
          >
            <label className="block">
              <input
                className="w-80 px-4 py-2 text-sm text-stone-700 bg-stone-100 rounded-lg placeholder-stone-400 shadow-sm focus:outline-none focus:ring-stone-300 focus:ring-1"
                placeholder="Email address"
                type="text"
                onChange={(e) =>
                  setFieldsLogin({ ...fieldsLogin, email: e.target.value })
                }
              />
              {errorMessage.email && (
                <span className="text-sm text-red-600 pl-2 pt-1 block">
                  {errorMessage.email}
                </span>
              )}
            </label>
            <label className="block relative">
              <span className="text-stone-400 absolute right-4 top-3.5 z-10">
                <AiFillEye />
              </span>
              <input
                className="w-80 px-4 py-2 text-sm text-stone-700 bg-stone-100 rounded-lg placeholder-stone-400 shadow-sm focus:outline-none focus:ring-stone-300 focus:ring-1"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setFieldsLogin({ ...fieldsLogin, password: e.target.value })
                }
              />
              {errorMessage.password && (
                <span className="text-sm text-red-600 pl-2 pt-1 block">
                  {errorMessage.password}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="w-80 py-2.5 bg-indigo-800 bg-opacity-70 text-white rounded-lg"
            >
              Sign in
            </button>
          </form>
          <p className="text-gray-400 text-sm mb-10">Forgot your password?</p>
        </div>
      </motion.div>
    </>
  );
};

export default AdminLogin;
