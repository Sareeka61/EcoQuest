import React from 'react';
import defaultProfile from '../assets/default-profile-image.jpg';
import badge1 from '../assets/badges/badge6.png';
import badge2 from '../assets/badges/badge2.png';
import badge3 from '../assets/badges/badge3.png';
import badge4 from '../assets/badges/badge4.png';   
import badge5 from '../assets/badges/badge5.png';
import Carousel from './Carousel';
import ContributionCalendar from './ContributionCalendar';
import Badge from './Badge';
import Points from './Points';

const Profile = () => {
  // Badge data
  const badges = [
    { src: badge1, alt: 'Badge 6' },
    { src: badge2, alt: 'Badge 2' },
    { src: badge3, alt: 'Badge 3' },
    { src: badge4, alt: 'Badge 4' }, 
    { src: badge5, alt: 'Badge 5' },
  ];

  const userPoints = 1200; // Replace this with the actual points

  return (
    <div className="w-full m-[120px] lg:w-3/5 mx-auto mt-16 p-8 bg-gray-100 h-screen overflow-y-auto no-scrollbar">
      <div className="flex flex-col space-y-8">
        {/* Profile section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={defaultProfile}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">Username</h1>
        </div>

        {/* Badges section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl mb-2 font-semibold">Badges</h2>
          <div className="relative">
            <Carousel badges={badges} />
          </div>
        </div>

        {/* Contributions section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl mb-2 font-semibold">Contributions</h2>
          <div className="relative">
            <ContributionCalendar />
          </div>
        </div>

        {/* Activities section */}
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl font-semibold">See Activities</h3>
          <textarea
            className="w-full mt-2 p-3 border rounded-md shadow-sm"
            placeholder="See your activities..."
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Profile;
