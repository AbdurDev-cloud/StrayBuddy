import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSwitch = () => setIsLogin(!isLogin);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add Firebase login logic here
    setTimeout(() => {
      setLoading(false);
      navigate("/guest");
    }, 1000);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add Firebase signup logic here
    setTimeout(() => {
      setLoading(false);
      navigate("/guest");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-black text-white flex-col">
        <h1 className="text-4xl font-bold mb-4">🐾 StrayBuddy</h1>
        <p className="text-lg text-center px-8">Helping paws, changing lives.</p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>

          <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
            {!isLogin && (
              <>
                <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
                <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" required />
              </>
            )}
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
            <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition">
              {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100">
              <FcGoogle className="text-xl" /> Continue with Google
            </button>
            <button className="w-full border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100">
              <FaFacebookF className="text-blue-600 text-xl" /> Continue with Facebook
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span onClick={handleSwitch} className="text-blue-600 hover:underline cursor-pointer">
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;