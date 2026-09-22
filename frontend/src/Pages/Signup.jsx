import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import AuthInput from "../Components/UI/AuthInput";
import {House} from "lucide-react";

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
          : "Error creating account",
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--black) text-(--yellow) px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-(--navy-blue) p-8 rounded-xl w-[90vw] max-w-md sm:max-w-lg md:max-w-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
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
          className="w-full p-2 rounded font-bold bg-(--yellow) text-(--white) mt-4"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login" className="ml-2 underline">
            Log In
          </Link>
        </p>

        <Link to="/" className="flex justify-center mt-3">
          <House size={20} />
        </Link>
      </form>
    </div>
  );
}

export default Signup;
