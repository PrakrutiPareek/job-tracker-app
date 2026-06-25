import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
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
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen">
      <button
        type="button"
        aria-label="Open sidebar navigation"
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-navigation"
        className="fixed left-4 top-4 z-50 rounded-lg bg-black p-2 text-white md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={28} />
      </button>

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar navigation"
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 pt-16 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
