import {Link, NavLink} from "react-router-dom";
import {SquareUser, SearchCheck, SaveIcon, LogOut} from "lucide-react";
import logo from "../assets/images/logo-icon.png";

const Sidebar = () => {
  const navLinks = [
    {path: "/profile", label: "Profile", end: true, icon: SquareUser},
    {
      path: "/profile/applications",
      label: "Applications",
      icon: SaveIcon,
    },
    {path: "/profile/jobSearch", label: "Job Search", icon: SearchCheck},
  ];

  return (
    <aside
      className="w-72 border-r-2 border-(--navy-blue) min-h-screen flex flex-col sticky top-0"
      aria-label="Secondary navigation"
    >
      <Link
        to="/"
        aria-label="JobEase Home"
        className="flex items-center gap-2 p-10 text-(--yellow) text-4xl font-bold border-b-2 border-(--navy-blue)"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="JobEase Logo"
          className="
            h-10
            w-auto
            object-contain
          "
        />
        JobEase
      </Link>

      <nav className="flex-1 mx-6 mt-8" aria-label="Sidebar navigation">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.end}
              aria-current={({isActive}) => (isActive ? "page" : undefined)}
              className={({isActive}) =>
                `flex items-center gap-3 py-3 px-2 rounded-xl ${isActive ? "user-link" : null}`
              }
            >
              <Icon size={25} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex p-6  border-t-2 border-(--navy-blue)">
        <button
          className="flex items-center gap-3 ml-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          aria-label="Logout button"
        >
          <LogOut size={25} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
