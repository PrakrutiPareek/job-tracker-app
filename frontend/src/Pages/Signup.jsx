import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import {House} from "lucide-react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    // Minimal validation
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
      console.log(error.code, error.message);

      if (error.code === "auth/email-already-in-use") {
        setFirebaseError("This email is already registered");
      } else {
        setFirebaseError("Error creating account");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--black) text-(--yellow) px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
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

        <div className="mb-4">
          <label htmlFor="signup-email" className="block mb-1">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            className="w-full p-3 rounded bg-(--gray) text-2xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="signup-password" className="block mb-1">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            className="w-full p-2 rounded bg-(--gray) text-2xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 rounded font-bold bg-(--yellow) text-black mt-4"
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
