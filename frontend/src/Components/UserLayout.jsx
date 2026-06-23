import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

/*
 * ===== User Layout =====
 *
 * Purpose:
 * - Shared layout for authenticated users
 *
 * Displays:
 * - Sidebar navigation
 * - Current page content
 */
const UserLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
