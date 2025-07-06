import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import backgroundImage from "../assets/login-bg.png";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          name: user.displayName || "Guest",
          phone: user.phoneNumber || "",
          role: "guest",
        });
      }
      navigate("/GuestProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        phone: user.phoneNumber || "",
        role: "guest",
      });
      navigate("/GuestProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        phone: user.phoneNumber || "",
        role: "guest",
      });
      navigate("/GuestProfile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* LEFT SIDE - Image Background */}
      <div
        className="md:w-1/2 hidden md:flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* You already have text/logo inside the image */}
      </div>

      {/* RIGHT SIDE - Login/Signup Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isLogin ? "Welcome Back!" : "Join StrayBuddy"}
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}

          <form onSubmit={handleAuth}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {isLogin && (
              <div className="text-right mb-4">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="my-4 text-center text-gray-500">OR</div>
<div className="flex flex-col space-y-2">
  {/* Google Login */}
  <button
    className="w-full flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition text-black"
    onClick={handleGoogleLogin}
  >
    <div className="flex items-center space-x-2">
      <svg
        className="w-5 h-5"
        viewBox="0 0 533.5 544.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.3H272v95.2h146.9c-6.3 34.1-25 62.8-53.2 82.1l85.9 66.5c50.2-46.3 81.9-114.7 81.9-193.5z"
          fill="#4285F4"
        />
        <path
          d="M272 544.3c72.6 0 133.6-24.1 178.1-65.5l-85.9-66.5c-23.8 16.1-54.3 25.7-92.2 25.7-70.8 0-130.8-47.9-152.3-112.2H28.1v70.5C72.7 486 164.7 544.3 272 544.3z"
          fill="#34A853"
        />
        <path
          d="M119.7 325.8c-10.2-30.1-10.2-62.6 0-92.7V162.6H28.1c-30.5 60.6-30.5 132.6 0 193.2l91.6-70z"
          fill="#FBBC05"
        />
        <path
          d="M272 107.3c39.5 0 75.1 13.6 103 40.4l77.4-77.4C405.6 24.1 344.6 0 272 0 164.7 0 72.7 58.3 28.1 162.6l91.6 70.5c21.5-64.3 81.5-112.2 152.3-112.2z"
          fill="#EA4335"
        />
      </svg>
      <span>Continue with Google</span>
    </div>
  </button>

  {/* Facebook Login */}
  <button
    className="w-full flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition text-black"
    onClick={handleFacebookLogin}
  >
    <div className="flex items-center space-x-2">
      <FaFacebook className="w-5 h-5 text-[#1877F2]" />
      <span>Continue with Facebook</span>
    </div>
  </button>
</div>


          <div className="text-center mt-4 text-sm">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
