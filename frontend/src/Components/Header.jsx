import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/images/logo-icon.png";

/*
 * Header Component
 *
 * Purpose:
 * - Display the JobEase logo
 * - Display the main navigation
 * - Provide access to authentication pages
*/

/* Public navigation */
const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/signup", label: "PROFILE" },
  { path: "/signup", label: "APPLICATIONS" },
];

const Header = () => {
  return (
    <header className="border-b border-gray-700 bg-black">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-6 py-5 md:flex-row md:justify-between">
        {/* Brand */}
        <Link
          to="/"
          aria-label="Go to Home Page"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="JobEase Logo"
            className="h-10 w-10 object-contain"
          />

          <span className="font-headings text-3xl font-bold text-(--yellow)">
            JobEase
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          aria-label="Primary Navigation"
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "font-main font-semibold text-(--yellow)"
                  : "font-main font-semibold text-white transition-colors duration-200 hover:text-(--yellow)"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Authentication */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/login">
            <Button variant="secondary">LOG IN</Button>
          </Link>

          <Link to="/signup">
            <Button variant="primary">SIGN UP</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;