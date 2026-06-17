import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const validate = () => {
    const newErrors = {};

    // ✅ .trim() on all text fields
    if (!firstName.trim()) newErrors.firstName = "First name is required!";
    if (!lastName.trim()) newErrors.lastName = "Last name is required!";

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

    return newErrors;
  };

  const handleSignup = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Signup successful");
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
          handleSignup();
        }}
        className="w-[500px] p-12 rounded-xl"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#f5a623", fontFamily: "Georgia, serif" }}
        >
          Sign up for a free account
        </h1>

        {/* First and Last name row */}
        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block mb-2 font-semibold"
              style={{ color: "#f5a623" }}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full rounded-lg p-3 text-black"
              style={{ backgroundColor: "#e8e8e8" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="First Name"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block mb-2 font-semibold"
              style={{ color: "#f5a623" }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full rounded-lg p-3 text-black"
              style={{ backgroundColor: "#e8e8e8" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold"
            style={{ color: "#f5a623" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full rounded-lg p-3 text-black"
            style={{ backgroundColor: "#e8e8e8" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 font-semibold"
            style={{ color: "#f5a623" }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-lg p-3 text-black"
            style={{ backgroundColor: "#e8e8e8" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <p className="text-xs mt-1" style={{ color: "#aaaaaa" }}>
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="w-full p-3 rounded-lg font-bold text-black"
          style={{ backgroundColor: "#f5a623" }}
        >
          Register
        </button>

        {/* Divider */}
        <hr className="my-5 border-gray-600" />

        {/* Sign in link */}
        <p className="text-center text-sm">
          <Link to="/login" style={{ color: "#f5a623" }}>
            Already have an account? Sign In
          </Link>
        </p>

        {/* Back to home */}
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

export default Signup;
