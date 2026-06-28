import {LogOut} from "lucide-react";

const LogoutBtn = () => {
  return (
    <div className="flex border-t-2 border-(--navy-blue) p-6">
      <button
        className="ml-4 flex cursor-pointer items-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Logout button"
        onClick={() => {
          localStorage.removeItem("user"); // clear auth
          window.location.href = "/login"; // redirect
        }}
      >
        <LogOut size={25} />
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
