import {Link, NavLink} from "react-router-dom";
import {SquareUser, SearchCheck, SaveIcon, X} from "lucide-react";
import logo from "../assets/images/logo-icon.png";
import LogoutBtn from "./LogoutBtn";

const Sidebar = ({isOpen = false, onClose = () => {}}) => {
  const navLinks = [
    {path: "/profile", label: "Profile", end: true, icon: SquareUser},
    {
      path: "/profile/applications",
      label: "Application Tracker",
      icon: SaveIcon,
    },
    {path: "/profile/jobsearch", label: "Job Search", icon: SearchCheck},
  ];

  return (
    <aside
      id="sidebar-navigation"
      aria-label="Secondary navigation"
      className={`fixed left-0 top-0 z-50 flex min-h-screen w-72 flex-col border-r-2 border-(--navy-blue) bg-black transition-transform duration-200 md:sticky md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* CLOSE BUTTON (ONLY closes sidebar) */}
      <button
        type="button"
        aria-label="Close sidebar"
        className="absolute right-4 top-4 text-white md:hidden"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <Link
        to="/"
        aria-label="JobEase Home"
        className="flex items-center gap-2 border-b-2 border-(--navy-blue) p-10 text-4xl font-bold text-(--yellow)"
        onClick={onClose}
      >
        <img
          src={logo}
          alt="JobEase Logo"
          className="h-10 w-auto object-contain"
        />
        <span className="font-headings">JobEase</span>
      </Link>

      <nav className="mx-6 mt-8 flex-1" aria-label="Sidebar navigation">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.end}
              onClick={onClose}
              aria-current={({isActive}) => (isActive ? "page" : undefined)}
              className={({isActive}) =>
                `flex items-center gap-3 rounded-xl px-2 py-3 ${
                  isActive ? "user-link" : ""
                }`
              }
            >
              <Icon size={25} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      {/*LOGOUT BUTTON  */}
      <LogoutBtn />
    </aside>
  );
};

export default Sidebar;
