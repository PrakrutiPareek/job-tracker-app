import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);
    return (
      hasMinLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSymbol
    );
  };

  const handleLogin = async () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!validateEmail(email.trim())) {
      newErrors.email = "Enter a valid email address!";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and symbol.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setErrors({});
      setFirebaseError("");

      // Firebase login
     await signInWithEmailAndPassword(auth, email, password);

console.log("Login successful!");

// Redirect to dashboard
navigate("/dashboard");

      // Optional: clear form
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error.message);
      setFirebaseError(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #0a0f2e 0%, #1a1f4e 50%, #0a0f2e 100%)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-[420px] p-12 rounded-xl"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#f5a623", fontFamily: "Georgia, serif" }}
        >
          Log in to your account
        </h1>

        {/* Firebase error */}
        {firebaseError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {firebaseError}
          </p>
        )}

        <div className="mb-5">
          <label
            className="block mb-2 font-semibold"
            style={{ color: "#f5a623" }}
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg p-3 text-black"
            style={{ backgroundColor: "#e8e8e8" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 font-semibold"
            style={{ color: "#f5a623" }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg p-3 text-black"
            style={{ backgroundColor: "#e8e8e8" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs mt-1" style={{ color: "#aaaaaa" }}>
            Minimum 8 characters with uppercase, lowercase, number and symbol.
          </p>
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="flex justify-between items-center mb-5">
          <label className="flex items-center gap-2 text-white text-sm">
            <input type="checkbox" className="accent-yellow-500" />
            Remember me
          </label>
          <span
            className="text-sm cursor-pointer"
            style={{ color: "#f5a623" }}
          >
            Forgot Password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-lg font-bold text-black"
          style={{ backgroundColor: "#f5a623" }}
        >
          Log In
        </button>

        <hr className="my-5 border-gray-600" />

        <p className="text-center text-sm">
          <Link to="/signup" style={{ color: "#f5a623" }}>
            No account yet? Sign Up
          </Link>
        </p>

        <Link
          to="/"
          className="block text-center mt-4 text-2xl"
          style={{ color: "#ffffff" }}
        >
          ←
        </Link>
      </form>
    </div>
  );
}

export default Login;