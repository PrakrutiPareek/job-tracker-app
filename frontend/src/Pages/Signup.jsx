import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);

    return hasMinLength && hasLetter && hasNumber && hasSymbol;
  };

  const validate = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required!";
    if (!lastName) newErrors.lastName = "Last name is required!";

    if (!email) {
      newErrors.email = "Email is required!";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters with letters, numbers and symbols!";
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
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Sign up for a free account</h1>

        <div style={{ display: "flex", gap: "16px" }}>
          <div className="input-group" style={{ flex: 1 }}>
            <label htmlFor="firstName">First Name</label>

            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? "error" : ""}
            />

            {errors.firstName && (
              <p className="error-message">{errors.firstName}</p>
            )}
          </div>

          <div className="input-group" style={{ flex: 1 }}>
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? "error" : ""}
            />

            {errors.lastName && (
              <p className="error-message">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />

          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error" : ""}
          />

          <small className="hint-text">
            Minimum 8 characters with letters, numbers and symbols.
          </small>

          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <button className="primary-btn" onClick={handleSignup}>
          Register
        </button>

        <p className="divider">Or sign up with:</p>

        <p className="bottom-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
