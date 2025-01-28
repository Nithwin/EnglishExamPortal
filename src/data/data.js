
import { MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { MdGroups } from "react-icons/md";

export const NavigationList = [
  {
    name:"Home",
    to:"/",
    isButton:false,
  },
  {
    name:"About",
    to:"/about",
    isButton:false,
  },
  {
    name:"Contact",
    to:"/contact",
    isButton:false,
  },
  {
    name:"Admin",
    to:"/admin-login",
    isButton:true,
  }
];


export const StudentDashboardNavigationList = [
  {
    name: 'Dashboard',
    to: '/student',
    icon: MdDashboard,
  },
  {
    name: 'Tasks',
    to: '/student/tasks',
    icon: BiTask,
  },
  {
    name: 'Pathway',
    to: '/student/pathway',
    icon: GiPathDistance ,
  },
  {
    name: 'Faculty',
    to: '/student/faculty',
    icon: MdGroups,
  },
];
