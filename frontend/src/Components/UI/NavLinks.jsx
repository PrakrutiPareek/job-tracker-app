import { NavLink } from "react-router-dom";

/*
 * Navigation Links
 *
 * Displays:
 * - Shared navigation link list
 */

const NavLinks = ({ links, onClick, className = "" }) => {
  return (
    <nav className={className} aria-label="Primary Navigation">
      {links.map(({ path, label }) => (
        <NavLink
          key={label}
          to={path}
          onClick={onClick}
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
  );
};

export default NavLinks;
