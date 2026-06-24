import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setFirebaseError("");

      await signInWithEmailAndPassword(auth, email, password);

      // ✅ IMPORTANT: mark user as logged in
      localStorage.setItem("user", "true");

      navigate("/profile/applications");

    } catch (error) {
      console.log(error.code, error.message); // debug
      setFirebaseError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2e] via-[#1a1f4e] to-[#0a0f2e]">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-[420px] p-8 rounded-xl bg-white/5"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">
          Log in to your account
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
          Log In
        </button>

        <p className="text-center mt-4">
          <Link to="/signup" className="text-yellow-500">
            No account yet? Sign Up
          </Link>
        </p>

        <Link to="/" className="block text-center mt-3 text-white text-xl">
          ←
        </Link>
      </form>

    </div>
  );
}

export default Login;
