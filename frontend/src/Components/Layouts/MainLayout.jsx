import Header from "../UI/Header";
import {Outlet} from "react-router-dom";
import Footer from "../UI/Footer";

/*
 * ===== Main Layout =====
 *
 * Purpose:
 * - Shared layout for public pages
 *
 * Displays:
 * - Header
 * - Page content
 * - Footer
 */
const MainLayout = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />

      <main className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
