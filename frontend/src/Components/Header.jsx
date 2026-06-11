import {Link, NavLink} from "react-router-dom";

const Header = () => {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "var(--accent)",
  };

  //NavLinks array
  const navLinks = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/contact", label: "Contact"},
    {path: "/dashboard", label: "Dashboard"},
    {path: "/applications", label: "Applications"},
    {path: "/login", label: "Login"},
    {path: "/signup", label: "Signup"},
  ];

  return (
    <header className="flex gap-4" aria-label="Main navigation">
      <Link to="/" aria-label="JobEase Home">
        JobEase
      </Link>

      <nav className="flex gap-2" aria-label="Primary navigation">
        {navLinks.map(({path, label}) => (
          <NavLink
            key={path}
            to={path}
            style={({isActive}) => (isActive ? styles : null)}
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
