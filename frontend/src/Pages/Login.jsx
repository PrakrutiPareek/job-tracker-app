import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthInput from "../Components/AuthInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setFirebaseError("");

      await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("user", "true");

      navigate("/profile/applications");

    } catch {
      setFirebaseError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2e] via-[#1a1f4e] to-[#0a0f2e]">
      
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="w-[420px] p-8 rounded-xl bg-white/5">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">
          Log in to your account
        </h1>

        {firebaseError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {firebaseError}
          </p>
        )}

        <AuthInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

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
  Log In
</button>

<Link
  to="#"
  className="block text-sm text-yellow-500 text-right mt-2 hover:underline"
>
  Forgot Password?
</Link>


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