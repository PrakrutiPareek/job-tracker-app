import {NavLink} from "react-router-dom";
import CallToAction from "./CallToAction";

/*
 * Footer Component
 *
 * Displays:
 * - Footer navigation
 * - Copyright information
 */

const footerLinks = [
  {path: "/about", label: "About"},
  {path: "/contact", label: "Contact"},
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-700 bg-black">
      <CallToAction />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8">
        {/* Navigation */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-4"
        >
          {footerLinks.map(({path, label}) => (
            <NavLink
              key={label}
              to={path}
              className={({isActive}) =>
                `font-main font-semibold ${isActive ? "active-link" : null}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center font-main text-xs text-gray-400">
          © {new Date().getFullYear()} JobEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
