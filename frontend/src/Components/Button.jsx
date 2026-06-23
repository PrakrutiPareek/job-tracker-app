/*
 * Reusable Button Component
 *
 * Purpose:
 * - Maintain consistent button styling
 * - Reused across the application
 */

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-(--yellow) text-black hover:brightness-95",

    secondary:
      "bg-white text-black hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center w-full sm:w-auto rounded-lg px-6 py-3 font-main font-bold transition-all duration-200 hover:-translate-y-0.5
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
