import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {auth} from "../firebase";
import AuthInput from "../Components/UI/AuthInput";
import {House} from "lucide-react";

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

  const handleForgotPassword = async () => {
    if (!email) {
      setFirebaseError("Please enter your email first");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setFirebaseError("Password reset email sent. Check your inbox.");
    } catch {
      setFirebaseError("Error sending reset email");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--black) text-(--yellow) px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-(--navy-blue) p-8 rounded-xl w-[90vw] max-w-md sm:max-w-lg md:max-w-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Log in to your account
        </h1>

        {firebaseError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {firebaseError}
          </p>
        )}

        <AuthInput
          id="login-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          id="login-password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full p-2 rounded font-bold bg-(--yellow) text-(--white) mt-4"
        >
          Log In
        </button>

        <button
          type="button"
          onClick={handleForgotPassword}
          className="block text-sm text-right mt-2 hover:underline"
        >
          Forgot Password?
        </button>

        <p className="text-center mt-8">
          No account yet?
          <Link to="/signup" className="ml-2 underline">
            Sign Up
          </Link>
        </p>

        <Link to="/" className="flex justify-center mt-3">
          <House size={20} />
        </Link>
      </form>
    </div>
  );
}

export default Login;
