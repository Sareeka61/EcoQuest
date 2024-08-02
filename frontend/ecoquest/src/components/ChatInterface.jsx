// src/components/ChatInterface.js
import React from 'react';
import noPlasticImage from '../assets/noplastic.jpeg';

const ChatInterface = ({ onBack }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white shadow-lg p-8 z-50">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={onBack}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex-1 overflow-y-auto">
        {/* Chat Messages */}
        <div className="space-y-4">
          {/* Example message */}
          <div className="flex items-start space-x-4">
            <img
              src={noPlasticImage}
              alt="User image"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="bg-gray-200 p-4 rounded-md">
              <p className="text-gray-700">User's message or image</p>
              <button className="text-blue-500 mt-2">Like</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="file"
          id="chatImage"
          name="chatImage"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-md font-bold ml-4 hover:bg-primary-dark"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
