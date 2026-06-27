import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthInput from "../Components/AuthInput";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password.length < 6) {
      setFirebaseError("Password must be at least 6 characters");
      return;
    }

    try {
      setFirebaseError("");

      await createUserWithEmailAndPassword(auth, email, password);

      localStorage.setItem("user", "true");
      navigate("/profile");

    } catch (error) {
      setFirebaseError(
        error.code === "auth/email-already-in-use"
          ? "This email is already registered"
          : "Error creating account"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2e] via-[#1a1f4e] to-[#0a0f2e]">
      <form
        onSubmit={handleSubmit}
        className="w-[420px] p-8 rounded-xl bg-white/5"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">
          Create an account
        </h1>

        {firebaseError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {firebaseError}
          </p>
        )}

        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full p-2 rounded font-bold bg-yellow-500 text-black"
        >
          Register
        </button>

        <p className="text-center mt-4">
          <Link to="/login" className="text-yellow-500">
            Already have an account? Log In
          </Link>
        </p>

        <Link to="/" className="block text-center mt-3 text-white text-xl">
          ←
        </Link>
      </form>
    </div>
  );
}

export default Signup;