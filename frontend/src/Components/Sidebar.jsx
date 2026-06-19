import {Link, NavLink} from "react-router-dom";
import {SquareUser, SearchCheck, SaveIcon, LogOut} from "lucide-react";

const Sidebar = () => {
  const navLinks = [
    {path: "/profile", label: "Profile", end: true, icon: SquareUser},
    {
      path: "/profile/applicationTracker",
      label: "Application Tracker",
      icon: SaveIcon,
    },
    {path: "/profile/jobsearch", label: "Job Search", icon: SearchCheck},
  ];

  return (
    <aside
      className="w-[256px] border-r rounded-3xl h-screen flex flex-col sticky top-0"
      aria-label="Secondary navigation"
    >
      <Link
        to="/"
        aria-label="JobEase Home"
        className="text-center mt-10 mb-10 text-(--yellow) text-4xl font-bold"
      >
        JobEase
      </Link>
      <nav
        className="flex flex-col mx-6.5 gap-7"
        aria-label="Sidebar navigation"
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.end}
              aria-current={({isActive}) => (isActive ? "page" : undefined)}
              className={({isActive}) =>
                `flex items-center gap-3 py-3 px-2 ${isActive ? "user-link" : null}`
              }
            >
              <Icon size={20} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/" aria-label="Logout button" className="mt-auto mb-20 ml-8">
        <button className="flex items-center gap-3">
          <LogOut size={15} />
          Logout
        </button>
      </Link>
    </aside>
  );
};

export default Sidebar;
