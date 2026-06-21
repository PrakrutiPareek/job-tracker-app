import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");

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

  const validate = () => {
    const newErrors = {};

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

  const handleSignup = async () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setErrors({});
      setFirebaseError("");

      // Firebase signup
      await createUserWithEmailAndPassword(auth, email, password);

      console.log("Signup successful!");

      // Optional: clear form
      setFirstName("");
      setLastName("");
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
          handleSignup();
        }}
        className="w-[500px] p-12 rounded-xl"
        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#f5a623", fontFamily: "Georgia, serif" }}
        >
          Sign up for a free account
        </h1>

        {/* Firebase error */}
        {firebaseError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {firebaseError}
          </p>
        )}

        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <label className="block mb-2 font-semibold" style={{ color: "#f5a623" }}>
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg p-3 text-black"
              style={{ backgroundColor: "#e8e8e8" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block mb-2 font-semibold" style={{ color: "#f5a623" }}>
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg p-3 text-black"
              style={{ backgroundColor: "#e8e8e8" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-semibold" style={{ color: "#f5a623" }}>
            Email
          </label>
          <input
            type="email"
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
          <label className="block mb-2 font-semibold" style={{ color: "#f5a623" }}>
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-lg p-3 text-black"
            style={{ backgroundColor: "#e8e8e8" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs mt-1" style={{ color: "#aaaaaa" }}>
            Minimum 8 characters with uppercase, lowercase, number, symbol.
          </p>
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-lg font-bold text-black"
          style={{ backgroundColor: "#f5a623" }}
        >
          Register
        </button>

        <hr className="my-5 border-gray-600" />

        <p className="text-center text-sm">
          <Link to="/login" style={{ color: "#f5a623" }}>
            Already have an account? Sign In
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

export default Signup;