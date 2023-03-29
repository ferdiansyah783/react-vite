import React from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, title, subtitle, footer, action, link }) => {
  const navigate = useNavigate(null)

  return (
    <main className="max-w-full h-screen flex justify-center items-center font-poppins bg-white md:bg-[#fafafa]">
      <div className="w-[500px] h-[600px] flex flex-col items-center space-y-5 bg-white md:drop-shadow-md px-7 py-7 md:px-16 md:py-12 rounded-3xl">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-center text-sm md:text-base text-gray-800 tracking-wide pb-5">
          {subtitle}
        </p>
        {children}
        <p className="text-sm pt-10">
          {footer}
          <span onClick={() => navigate(link)} className="text-indigo-500 hover:text-indigo-600 cursor-pointer">{action}</span>
        </p>
      </div>
    </main>
  );
};

export default AuthLayout;
