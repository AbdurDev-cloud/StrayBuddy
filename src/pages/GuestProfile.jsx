import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const GuestProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/Login.jsx");
        return;
      }

      const docRef = doc(db, "users", user.uid);
      
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }

    });

    return () => unsubscribe();
  }, [navigate]);

  if (!userData) return <div className="text-center py-20 text-gray-600">Loading Profile...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-purple-100 via-white to-blue-200 px-4 py-12">

  <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-300">
    <div className="flex flex-col items-center space-y-4">
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl ring-4 ring-blue-200">
        <img
          src={userData?.photoURL || "https://www.gravatar.com/avatar?d=mp"}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
        Welcome, {userData?.name?.toUpperCase() || "User"}
      </h2>

      {/* User Details */}
      <div className="text-center text-gray-700 space-y-1">
        <p><strong>Email:</strong> {userData?.email || "N/A"}</p>
        <p><strong>Phone:</strong> {userData?.phone || "Not Provided"}</p>
        <p><strong>Role:</strong> <span className="capitalize">{userData?.role || "Guest"}</span></p>
      </div>

      {/* Volunteer Button */}
      <button className="mt-4 px-6 py-2.5 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition duration-300">

        Apply to Become Volunteer
      </button>
    </div>
  </div>
</div>

  );
};

export default GuestProfile;
