import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Login() {
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

  const handleLogin = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Log in to your account</h1>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>

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

        <button className="primary-btn" onClick={handleLogin}>
          Log In
        </button>

        <p className="divider">Or log in with:</p>

        <p className="bottom-link">
          No account yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
