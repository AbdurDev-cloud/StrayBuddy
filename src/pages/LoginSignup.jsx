import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // Update this path as per your project
import backgroundImage from "../assets/login-bg.png"; // Make sure path is correct

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSwitch = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: add email/password login here
      setTimeout(() => {
        setLoading(false);
        navigate("/GuestProfile.jsx");
      }, 1000);
    } catch (error) {
      console.error("Login error", error);
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: add email/password signup here
      setTimeout(() => {
        setLoading(false);
        navigate("/guest");
      }, 1000);
    } catch (error) {
      console.error("Signup error", error);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/guest");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/guest");
    } catch (error) {
      console.error("Facebook login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image Side */}
      <div
        className="w-1/2 hidden md:flex bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
      />

      {/* Right Form Side */}
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border p-2 rounded pr-10"
                required
              />
              <span
                className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {isLogin && (
              <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot Password?
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleGoogleLogin}
              className="w-full border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100"
            >
              <FcGoogle className="text-xl" /> Continue with Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="w-full border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100"
            >
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
