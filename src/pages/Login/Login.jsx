import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc"; 
import AuthContext from './../../contexts/AuthContext';

const Login = () => {
  const { singInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await singInUser(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Invalid email or password!");
      toast.error(err.message || "Login failed!");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
        <p className="mt-4 text-center">
          Dont have an account?{" "}
          <Link to="/auth/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <div className="mt-6 flex">
        <button
          onClick={handleGoogleLogin}
          className="w-full rounded-md text-4xl"
        >
          <FcGoogle/>
        </button>
      </div>
    </div>
  );
};

export default Login;
