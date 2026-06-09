import {Link, NavLink} from "react-router-dom";

const Header = () => {
  const styles = {
    fontweight: "bold",
    textDecoration: "underline",
    color: "var(--accent)",
  };
  return (
    <header className="flex gap-4">
      <Link to="/">JobEase</Link>

      <nav className="flex gap-2">
        <NavLink to="/" style={({isActive}) => (isActive ? styles : null)}>
          Home
        </NavLink>
        <NavLink to="/about" style={({isActive}) => (isActive ? styles : null)}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({isActive}) => (isActive ? styles : null)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/dashboard"
          style={({isActive}) => (isActive ? styles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/applications"
          style={({isActive}) => (isActive ? styles : null)}
        >
          Applications
        </NavLink>
        <NavLink to="/login" style={({isActive}) => (isActive ? styles : null)}>
          Login
        </NavLink>
        <NavLink
          to="/signup"
          style={({isActive}) => (isActive ? styles : null)}
        >
          Signup
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
