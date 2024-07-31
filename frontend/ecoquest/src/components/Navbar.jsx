import React from 'react';
import defaultProfile from '../assets/default-profile-image.png';

const Navbar = () => {
  const username = "User";

  return (
    <div className="w-1/4 bg-primary h-screen fixed text-white p-4 flex flex-col items-center pt-[20px]">
      <div className="flex flex-col items-center mb-8">
        <img
          src={defaultProfile}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <div className="text-center text-2xl font-bold">
          <p>Hi, {username}</p>
        </div>
      </div>
      <ul className="flex flex-col space-y-4 text-xl flex-grow ">
        <li>Profile</li>
        <li>Points</li>
        <li>Badges</li>
        <li>Activities</li>
        <li>Marketplace</li>
        <li>Community</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
