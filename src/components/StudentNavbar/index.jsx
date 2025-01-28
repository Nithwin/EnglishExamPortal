import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const StudentNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full flex pe-1 py-[1rem] lg:py-[1rem] lg:px-[1rem]
                  bg-primary backdrop-blur-md lg:z-50`}
    >
      <div className="flex items-center gap-2">
        {/* Sidebar Toggle */}
        <div className="bg-secondary px-3 py-1 w-fit rounded-r-full lg:hidden">
          <TiThMenu
            className="text-primary size-7"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
        <img src="/assets/logo.png"
        className="size-10"
        alt="logo" />
      </div>
      {/* Profile Icon */}
      <div className="ms-auto my-auto">
        <CgProfile className="text-secondary size-9 lg:size-10" />
      </div>
    </div>
  );
};

export default StudentNavbar;
