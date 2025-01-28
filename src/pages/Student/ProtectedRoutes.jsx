import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import StudentSidebar from "../../components/StudentSidebar";
import StudentNavbar from "../../components/StudentNavbar";
import { useState } from "react";

const ProtectedRoutes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth(); // Get user from context
  const isAuthenticated = true // Check if authenticated

  return isAuthenticated ? (
    <section className="h-dvh pt-[5rem] lg:pt-[4rem] lg:ps-[6rem]">
      <StudentNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
    </section>
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
