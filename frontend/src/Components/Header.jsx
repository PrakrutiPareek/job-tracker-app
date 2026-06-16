import {Link, NavLink} from "react-router-dom";

const Header = () => {
  //NavLinks array
  const navLinks = [
    {path: "/", label: "Home"},
    {path: "/profile", label: "Profile"},
    {path: "/profile/dashboard", label: "Dashboard"},
    {path: "/profile/applications", label: "Applications"},
    {path: "/login", label: "Login"},
    {path: "/signup", label: "Signup"},
  ];

  return (
    <header className="flex gap-4" aria-label="Main navigation">
      <nav className="flex gap-2" aria-label="Primary navigation">
        <Link
          to="/"
          aria-label="JobEase Home"
          className="text-center text-(--yellow) text-4xl font-bold"
        >
          JobEase
        </Link>
        {navLinks.map(({path, label}) => (
          <NavLink
            key={path}
            to={path}
            className={({isActive}) => (isActive ? "active-link" : null)}
            aria-current={({isActive}) => (isActive ? "page" : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
