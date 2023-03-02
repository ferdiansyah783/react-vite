import clsx from "clsx";
import React from "react";
import { RiSettingsLine } from "react-icons/ri";

const OptionsMenu = ({
  setIsOpen,
  visibleOption,
  setVisibleOption,
  setIsOpenLogout,
}) => {
  const menuClick = (value) => {
    switch (value) {
      case "Change photo profile":
        console.log("profile");
        break;
      case "Change password":
        console.log("password");
        break;
      case "Log out":
        setVisibleOption((prev) => !prev);
        setIsOpen((prev) => !prev);
        setIsOpenLogout((prev) => !prev);
        break;
      default:
        setVisibleOption((prev) => !prev);
        setTimeout(() => {
          setIsOpen((prev) => !prev);
        }, 300);
    }
  };

  return (
    <div className="w-full h-screen font-poppins fixed z-50 bg-black bg-opacity-20">
      <div className="w-full h-full relative">
        <div
          className={clsx(
            "w-48 md:w-56 h-auto flex flex-col items-center px-3 py-5 space-y-1 absolute right-5 bg-white rounded-xl transition-all duration-200 ease-in-out",
            visibleOption === true
              ? "opacity-100 scale-100 top-20"
              : "opacity-0 scale-y-105 top-16"
          )}
        >
          <div className="text-xl md:text-2xl text-gray-600 pb-2">
            <RiSettingsLine />
          </div>
          {["Change photo profile", "Change password", "Log out", "Cancel"].map(
            (value, index) => (
              <button
                key={index}
                className={clsx(
                  "w-full text-sm md:text-base py-1 md:py-2 hover:bg-indigo-500 hover:text-white rounded-lg",
                  value === "Cancel" &&
                    "text-red-600 hover:bg-red-600 hover:text-white"
                )}
                onClick={() => menuClick(value)}
              >
                {value}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionsMenu;
