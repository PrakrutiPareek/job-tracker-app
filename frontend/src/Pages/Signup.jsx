import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ matches Login email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ matches Login password validation with uppercase/lowercase
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

    if (!firstName) newErrors.firstName = "First name is required!";
    if (!lastName) newErrors.lastName = "Last name is required!";

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
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
        className="w-[420px] bg-white p-12 rounded-xl"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Sign up for a free account
        </h1>

        {/* First and Last name row */}
        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <label htmlFor="firstName" className="block mb-2 text-black">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className={`w-full border rounded-lg p-3 bg-gray-100 text-black ${errors.firstName ? "border-red-500" : ""}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-label="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="flex-1">
            <label htmlFor="lastName" className="block mb-2 text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className={`w-full border rounded-lg p-3 bg-gray-100 text-black ${errors.lastName ? "border-red-500" : ""}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-label="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full border rounded-lg p-3 bg-gray-100 text-black ${errors.email ? "border-red-500" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`w-full border rounded-lg p-3 bg-gray-100 text-black ${errors.password ? "border-red-500" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <p className="text-xs text-gray-500 mt-1">
            Minimum 8 characters with uppercase, lowercase, number and symbol.
          </p>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Register button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>

        {/* Sign in link */}
        <p className="text-center text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Sign In
          </Link>
        </p>

        {/* Back to home */}
        <Link to="/" className="block text-center mt-5 text-blue-600">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
}

export default Signup;
