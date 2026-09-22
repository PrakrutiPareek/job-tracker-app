import {useState} from "react";
import {Link} from "react-router-dom";
import Button from "./Button";
import MobileMenuButton from "./MobileMenuButton";
import NavLinks from "./NavLinks";
import logo from "../../assets/images/logo-icon.png";

/*
 * Header Component
 *
 * Displays:
 * - Logo
 * - Navigation
 * - Auth actions
 */

const navLinks = [
  {path: "/", label: "HOME"},
  {path: "/profile", label: "PROFILE"},
  {path: "/profile/applications", label: "APPLICATIONS"},
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-gray-700 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5 md:grid md:grid-cols-3">
        <Link
          to="/"
          aria-label="Go to Home Page"
          className="flex items-center justify-self-start font-headings text-3xl font-bold text-(--yellow)"
          onClick={closeMenu}
        >
          Job<span className="text-(--white)">Ease</span>
        </Link>

        <div className="hidden justify-center md:flex">
          <NavLinks
            links={navLinks}
            onClick={closeMenu}
            className="flex gap-8"
          />
        </div>

        <div className="hidden justify-self-end gap-3 md:flex">
          <Link to="/login">
            <Button variant="secondary">LOG IN</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">SIGN UP</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            controls="primary-navigation"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="primary-navigation"
          className="border-t border-gray-700 md:hidden"
        >
          <NavLinks
            links={navLinks}
            onClick={closeMenu}
            className="flex flex-col items-center gap-5 py-6"
          />
          <div className="flex flex-col gap-3 px-6 pb-6">
            <Link to="/login" onClick={closeMenu}>
              <Button variant="secondary">LOG IN</Button>
            </Link>
            <Link to="/signup" onClick={closeMenu}>
              <Button variant="primary">SIGN UP</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
