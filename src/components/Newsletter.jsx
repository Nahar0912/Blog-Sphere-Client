import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Thank you for subscribing to our newsletter!");
    setEmail(""); 
  };

  return (
    <section className="bg-gray-200 py-16 px-4 text-center">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
      <p className="mt-2 text-gray-600">Get the latest blog updates directly to your inbox!</p>
      <form className="mt-4" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-400 rounded-md w-full md:w-1/3"
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
