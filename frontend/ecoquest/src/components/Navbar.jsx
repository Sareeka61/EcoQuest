import React from 'react';
import defaultProfile from '../assets/default-profile-image.jpg';
import Link from '../components/Login';

const HorizontalNavbar = () => {
  const handleSignup = () => {
    // Logic for login
    console.log("Login clicked");
  };

  return (
    <div className="w-full bg-primary h-16 fixed top-0 left-0 flex items-center justify-between px-4 text-white shadow-lg">
      <div className="flex items-center">
        <img
          src={defaultProfile}
          alt="Logo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-2 text-2xl font-bold">Logo</span>
      </div>
      <div className="flex items-center">
      <Link to="/login">      
        <button
          onClick={handleSignup}
          className="bg-white hover:bg-slate-200 text-primary font-bold py-2 px-4 rounded mr-4 shadow-md hover:shadow-lg transition-shadow"
        >
          Signup
        </button>
        </Link>
        <img
          src={defaultProfile}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default HorizontalNavbar;
