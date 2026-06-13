import {Link, NavLink} from "react-router-dom";
import {SquareUser, LibraryBig, LayoutDashboard} from "lucide-react";

const Sidebar = () => {
  const navLinks = [
    {path: "/profile", label: "Profile", end: true, icon: SquareUser},
    {path: "/profile/applications", label: "Applications", icon: LibraryBig},
    {path: "/profile/dashboard", label: "Dashboard", icon: LayoutDashboard},
  ];

  return (
    <aside className="w-[256px] border-r h-full">
      <nav className="flex flex-col ml-6.5 gap-7">
        <Link
          to="/"
          aria-label="JobEase Home"
          className="mt-10 mb-20 text-center text-(--yellow) text-4xl font-bold"
        >
          JobEase
        </Link>
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.end}
              aria-current={({isActive}) => (isActive ? "page" : undefined)}
              className={({isActive}) =>
                `flex items-center gap-3 ${isActive ? "user-link" : null}`
              }
            >
              <Icon size={20} />
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
