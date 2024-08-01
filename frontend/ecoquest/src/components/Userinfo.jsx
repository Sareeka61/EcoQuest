import React from 'react';

const UserInfo = () => {
  const milestones = [200, 300, 400, 500, 600];

  return (
    <div className="w-80% ml-[360px] mt-16 p-8 bg-gray-100 h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Card for Points */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Points Achieved</h2>
          <div className="relative bg-gray-200 h-6 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full" style={{ width: '50%' }}></div>
            <div className="absolute inset-0 flex justify-between items-center px-2">
              {milestones.map((milestone, index) => (
                <span key={index} className="text-xs text-gray-600">
                  {milestone}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Another Task/Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-2/3">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Other Task</h2>
          {/* Content for another task */}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
