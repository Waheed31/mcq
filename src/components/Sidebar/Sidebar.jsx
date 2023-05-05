import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row fixed bg-[#f7f7f7] border-black	shadow-lg	">
      <div className="">
        <div
          className={`bg-dark-white h-screen p-5 pt-8 ${
            open ? "w-58" : "w-20"
          } duration-300 relative`}
        >
          <ArrowBackIcon
            className={`text-black text-dark-purple text-3xl rounded-full absolute -right-3  top-9 border-5 border-dark-black cursor-pointer mt-16 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <AssessmentIcon
              className={`text-4xl rounded crusor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-black origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Ideassion
            </h1>
          </div>

          <ul className="pt-16">
            <li
              onClick={() => navigate("/")}
              className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4"
            >
              <span className="text-2xl block float-left text-[#908db8]">
                <HomeIcon />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                Home
              </span>
            </li>
          </ul>
          <ul className="pt-4">
            <li
              onClick={() => navigate("/assessments")}
              className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4"
            >
              <span className="text-2xl block float-left text-[#908db8]">
                <FeedIcon />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                Assesement
              </span>
            </li>
          </ul>
          <ul className="pt-4">
            <li
              onClick={() => navigate("/testpreview")}
              className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4"
            >
              <span className="text-2xl block float-left text-[#908db8]">
                <ControlPointIcon />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                New Assesement
              </span>
            </li>
          </ul>
          <ul className="pt-4">
            <li
              onClick={() => navigate("/testedit")}
              className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4"
            >
              <span className="text-2xl block float-left text-[#908db8]">
                <SettingsIcon />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                Setting
              </span>
            </li>
          </ul>
          <ul className="pt-16">
            <li
              onClick={() => navigate("/assessments")}
              className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-4"
            >
              <span className="text-2xl block float-left">
                <PowerSettingsNewIcon />
              </span>
              <span
                className={`text-base font-medium flex-1 duration-100 ${
                  !open && "hidden"
                }`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
