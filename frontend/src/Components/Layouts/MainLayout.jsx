import Header from "../Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";

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
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
