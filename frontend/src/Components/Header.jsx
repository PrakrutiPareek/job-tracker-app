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
    <header className="flex gap-4">
      <Link to="/">JobEase</Link>

      <nav className="flex gap-2">
        {navLinks.map(({path, label}) => (
          <NavLink
            key={path}
            to={path}
            style={({isActive}) => (isActive ? styles : null)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
