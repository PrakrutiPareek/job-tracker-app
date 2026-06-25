import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setFirebaseError("");

      await createUserWithEmailAndPassword(auth, email, password);

      // mark user as logged in
      localStorage.setItem("user", "true");

      navigate("/profile");

    } catch (error) {
      console.log(error.code, error.message);
      setFirebaseError("Error creating account");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2e] via-[#1a1f4e] to-[#0a0f2e]">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
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

        <div className="mb-4">
          <label className="block mb-1 text-yellow-500">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-200 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-yellow-500">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-200 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

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