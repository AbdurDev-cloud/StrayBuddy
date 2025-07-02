import React from 'react';

const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Login</button>
        </form>
      </div>

      <div className="max-w-md mx-auto bg-white mt-10 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
