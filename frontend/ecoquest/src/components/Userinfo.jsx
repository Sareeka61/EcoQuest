import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  // Array of milestone values and labels
  const milestones = [200, 300, 400, 500, 600];

  // Initial states
  const [activities, setActivities] = useState([]);
  const [completedActivities, setCompletedActivities] = useState(new Set());
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomTask();
  }, []);

  const fetchRandomTask = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/tasks/random');
      if (response.data) {
        setActivities([response.data]);
      } else {
        setActivities([]);
      }
    } catch (error) {
      console.error('Error fetching task:', error);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsDone = async (id, points) => {
    try {
      await axios.post('http://localhost:5000/api/tasks/complete', { id });
      setActivities((prev) => prev.filter((activity) => activity._id !== id));
      setCompletedActivities((prev) => new Set(prev).add(id));
      setTotalPoints((prev) => prev + points);
      fetchRandomTask();
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  const handleSkip = async (id) => {
    try {
      await axios.post('http://localhost:5000/api/tasks/skip', { id });
      setActivities((prev) => prev.filter((activity) => activity._id !== id));
      fetchRandomTask();
    } catch (error) {
      console.error('Error skipping task:', error);
    }
  };

  const progressWidth = Math.min((totalPoints / milestones[milestones.length - 1]) * 100, 100);

  return (
    <div className="w-80% ml-[360px] mt-16 p-8 bg-gray-100 h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Card for Points */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Points Achieved</h2>
          <div className="relative bg-gray-200 h-6 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full" style={{ width: `${progressWidth}%` }}></div>
          </div>
          {/* Labels below the progress bar */}
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            {milestones.map((milestone, index) => (
              <span key={index} className="flex flex-col items-center">
                <span>{milestone}</span>
                <span className="text-xs">Label {index + 1}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Activities Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-2/3 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Activities</h2>
          {loading ? (
            <p>Loading...</p>
          ) : activities.length > 0 ? (
            <div className="space-y-4">
              {activities.map((activity) => (
                activity && (
                  <div
                    key={activity._id}
                    className={`bg-gray-50 p-4 rounded-lg shadow-md ${completedActivities.has(activity._id) ? 'border-green-500 border-2' : ''}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">{activity.name}</span>
                      <span className="text-sm text-gray-500">({activity.environmentalImpact} pts)</span>
                      <div className="flex space-x-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                          onClick={() => handleMarkAsDone(activity._id, activity.environmentalImpact)} // Assuming 'environmentalImpact' is points
                          disabled={completedActivities.has(activity._id)}
                        >
                          Done
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                          onClick={() => handleSkip(activity._id)}
                        >
                          Skip
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
