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
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">👤 Welcome, {userData.name}</h1>

      <div className="space-y-2 text-gray-700">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Role:</strong> <span className="text-blue-600 font-medium capitalize">{userData.role}</span></p>
      </div>

      <div className="mt-8">
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition shadow-md"
          onClick={() => navigate("/apply-volunteer")}
        >
          Apply to Become Volunteer
        </button>
      </div>
    </div>
  );
};

export default GuestProfile;
