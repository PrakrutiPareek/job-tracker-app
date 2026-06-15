import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
      hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSymbol
    );
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!validateEmail(email)) {
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

    setErrors({});
    console.log("Login successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-[420px] bg-white p-12 rounded-xl"
      >
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Log in to your account
        </h1>

        <div className="mb-5">
          <label className="block mb-2 text-black">Email Address</label>

          <input
            type="email"
            className="w-full border rounded-lg p-3 bg-gray-100 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-black">Password</label>

          <input
            type="password"
            className="w-full border rounded-lg p-3 bg-gray-100 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-xs text-gray-500 mt-1">
            Minimum 8 characters with uppercase, lowercase, number and symbol.
          </p>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Log In
        </button>

        <p className="text-center text-gray-500 mt-5">
          No account yet?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>

        <Link to="/" className="block text-center mt-5 text-blue-600">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
}

export default Login;
