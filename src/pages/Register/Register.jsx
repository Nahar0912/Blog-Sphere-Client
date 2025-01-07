import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthContext from "./../../contexts/AuthContext";

const Register = () => {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must include at least one uppercase letter.");
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must include at least one lowercase letter.");
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      setError("Password must include at least one numeric character.");
      toast.error("Password must include at least one numeric character.");
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password must include at least one special character.");
      toast.error("Password must include at least one special character.");
      return;
    }

    try {
      await createNewUser(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Registration failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
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
          <label className="block text-gray-700 mb-2">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="w-full px-3 py-2 border rounded-md"
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
        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
};

export default Register;
