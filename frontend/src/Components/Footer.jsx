import { Link } from "react-router-dom";

/*
 * Footer Component
 *
 * Displays:
 * - Footer navigation
 * - Copyright information
 */

const footerLinks = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-700 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8">
        {/* Navigation */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-6 font-main font-semibold"
        >
          {footerLinks.map(({ path, label }) => (
            <Link
              key={label}
              to={path}
              className="text-white transition-colors hover:text-(--yellow)"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center font-main text-sm text-gray-400">
          © {new Date().getFullYear()} JobEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;