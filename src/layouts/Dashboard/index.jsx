import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import profileApi from "../../api/profileApi";
import eidtProfileIcon from "../../assets/images/Edit_profile.svg";
import notifIcon from "../../assets/images/Notification.svg";
import signOutIcon from "../../assets/images/Sign_out_squre.svg";
import CustomAlert from "../../components/CustomAlert";
import CustomModal from "../../components/CustomModal";
import DashboardSidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    path: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/signin");

    document.title = "Back Store";

    authApi.setHeader();

    profileApi
      .getProfile()
      .then((result) => {
        if (result.status !== 200) return;

        setProfile({
          ...profile,
          name: result.data?.name,
          email: result.data?.email,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    authApi
      .logout()
      .then((result) => {
        if (result.status !== 204) return;

        setIsOpenAlert(true);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen w-full bg-[#F5F5F5] flex relative font-poppins">
      <CustomAlert
        isOpen={isOpenAlert}
        textColor={"text-green-800"}
        bgColor={"bg-green-50"}
        title={"log out successfully"}
      />
      {isOpenLogout && (
        <CustomModal
          title={"Are you sure want to log out from dashboard?"}
          setIsOpenLogout={setIsOpenLogout}
          action={handleLogout}
        />
      )}

      <DashboardSidebar isOpenSidebar={isOpenSidebar} />
      <div className="w-full h-full lg:w-[82%] xl:w-[86%]">
        <header className="fixed lg:relative z-10 w-full bg-white drop-shadow lg:drop-shadow-none px-12 py-9 md:py-6 lg:py-2">
          <div className="w-full h-full relative flex items-center justify-between">
            <div className="absolute md:relative -left-8 space-y-1 md:left-0 md:top-0">
              <div className="flex items-center space-x-5 lg:space-x-0">
                <button onClick={() => setIsOpenSidebar((prev) => !prev)}>
                  <RxHamburgerMenu className="text-4xl mt-1 lg:hidden" />
                </button>
                <h1 className="hidden md:block text-lg md:text-2xl lg:text-xl 2xl:text-2xl font-semibold font-varela">
                  Welcome {profile.name}
                  <span className="text-3xl lg:text-2xl 2xl:text-3xl">
                    &#x270B;
                  </span>
                </h1>
              </div>
              <p className="hidden lg:block text-base lg:text-sm 2xl:text-base font-poppins text-[#595959">
                Here's what's hapening in your workpace
              </p>
            </div>
            <div className="absolute -right-7 flex items-center space-x-1 md:space-x-5 md:right-0 md:relative">
              <button>
                <img
                  src={notifIcon}
                  alt="notif icon"
                  className="w-7 md:w-8 lg:w-5 2xl:w-6 h-7 md:h-8 lg:h-5 2xl:h-6"
                />
              </button>
              <button className="group p-1">
                <img
                  src={eidtProfileIcon}
                  alt="edit-profile icon"
                  className="hidden md:block w-6 md:w-8 lg:w-5 2xl:w-6 h-6 md:h-8 lg:h-5 2xl:h-6"
                />
                <div className="bg-white text-indigo-500 drop-shadow rounded-md px-5 py-2 absolute -bottom-9 right-20 hidden group-hover:block">
                  Edit profile
                </div>
              </button>
              <button className="group p-1">
                <img
                  src={signOutIcon}
                  alt="signout icon"
                  className="hidden md:block w-6 md:w-8 lg:w-5 2xl:w-6 h-6 md:h-8 lg:h-5 2xl:h-6"
                />
                <div
                  onClick={() => setIsOpenLogout((prev) => !prev)}
                  className="bg-white hover:bg-slate-50 text-indigo-500 drop-shadow rounded-md px-5 py-2 absolute -bottom-9 right-9 hidden group-hover:block"
                >
                  Log out
                </div>
              </button>
              <button className="pl-0 md:pl-4">
                <img
                  className="rounded-full w-8 md:w-12 lg:w-10 2xl:w-[40px] h-8 md:h-12 lg:h-10 2xl:h-[40px]"
                  src="https://source.unsplash.com/360x360?people"
                  alt="people"
                />
              </button>
            </div>
          </div>
        </header>
        <main className="w-full bg-[#F5F5F5] mt-20 md:mt-28 lg:mt-0 px-5 md:px-12 lg:px-8 py-5 lg:py-4 2xl:py-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
