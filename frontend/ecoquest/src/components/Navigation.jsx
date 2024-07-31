import React from 'react';
import defaultProfile from '../assets/default-profile-image.png';

const Navigation = () => {
  const username = "User";

  const handleLogout = () => {
    // Logic for logging out
    console.log("Logged out");
  };

  return (
    <div className="w-1/4 bg-primary h-screen fixed text-white p-4 flex flex-col items-center">
      <div className="flex flex-col items-center bg-gray-700 bg-opacity-50 p-[100px] rounded-lg mb-4 flex-grow">
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
        <ul className="flex flex-col space-y-4 text-xl text-center w-full">
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-[180px]'>Profile</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>Points</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>Badges</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>Activities</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>Marketplace</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>Community</li>
          <li className='bg-gray-700 bg-opacity-70 p-2 rounded-md w-full'>About</li>
        </ul>
      <button 
        onClick={handleLogout}
        className="bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-[50px]"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Navigation;
