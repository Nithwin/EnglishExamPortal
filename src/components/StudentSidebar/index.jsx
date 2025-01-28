import { RxCross2 } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { BiTask } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { StudentDashboardNavigationList } from "../../data/data";

const StudentSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef(null);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  return (
    <>
    <div
     ref={sidebarRef}
    className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex fixed top-0 left-0 bottom-0 bg-sideblue w-2/3 px-1 py-3 flex-col transform transition-transform duration-200 lg:hidden z-50`}>
      <div className="flex items-center">
        <div className="bg-secondary w-fit px-2 rounded-r-full">
          <RxCross2 className="size-8 text-primary"
          onClick={() => setSidebarOpen(false)}
          />
        </div>
        <img src="/assets/logo.png"
        className="size-10 ms-2 lg:size-13 z-50"
        alt="logo" height={28} width={28} />
      </div>
      <div>
      {
          StudentDashboardNavigationList.map((item, index) =>(
            <Link key={index} to={item.to} className="flex gap-3 items-center px-[1rem] py-[1.5rem]">
              {<item.icon className="text-secondary size-10" />}
            <p className=" text-2xl text-secondary font-semibold">{item.name}</p>
          </Link>
          ))
        }
      </div>
      <div  className="mt-auto mb-[5rem] mx-auto">
        <Link to={"/"} className="bg-secondary text-primary px-[2.5rem] py-[1rem] rounded-full text-xl font-bold flex items-center gap-2">
        Logout
        <TbLogout2 className="size-7" />
        </Link>
      </div>
    </div>

    <div className="hidden bg-primary fixed top-0 left-0 bottom-0 lg:flex flex-col px-2 z-50">
    <div className="w-full pt-2 pb-[2rem]">
      <img
            src="/assets/logo.png"
            className="size-13 z-50 mx-auto"
            alt="logo"
            height={28}
            width={28}
          />
    </div>
    <div className="space-y-7">
        {
          StudentDashboardNavigationList.map((item, index) =>(
            <Link key={index} to={item.to} className="flex gap-3 items-center flex-col cursor-pointer">
              {<item.icon className="text-secondary size-6" />}
            <p className=" text-secondary font-semibold text-[1rem]">{item.name}</p>
          </Link>
          ))
        }
      </div>
      <div  className="mt-auto mb-[2rem] mx-auto">
        <Link  to={"/"} className="bg-secondary text-primary px-[0.5rem] py-[0.7rem] rounded-2xl text-[1rem] font-bold flex items-center gap-2">
        <TbLogout2 className="size-7" />
        </Link>
      </div>
    </div>
    </>
  )
}

export default StudentSidebar
