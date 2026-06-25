import { Menu, X } from "lucide-react";

/*
 * Mobile Menu Button
 *
 * Displays:
 * - Hamburger icon
 * - Close icon
 */

const MobileMenuButton = ({
  isOpen,
  onClick,
  controls,
  label = "Toggle navigation menu",
}) => {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls={controls}
      className="text-white md:hidden"
      onClick={onClick}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default MobileMenuButton;
