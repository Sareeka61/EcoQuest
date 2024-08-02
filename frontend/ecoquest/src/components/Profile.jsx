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
  const badges = [
    { src: badge1, alt: 'Badge 6' },
    { src: badge2, alt: 'Badge 2' },
    { src: badge3, alt: 'Badge 3' },
    { src: badge4, alt: 'Badge 4' }, 
    { src: badge5, alt: 'Badge 5' },
  ];

  const userPoints = 1200; // Replace this with the actual points

  return (
    <div className="w-3/4 ml-auto flex-1 p-8">
      <div className="flex flex-col items-center mb-8">
        <img src={defaultProfile} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl">Username</h1>
        <Points points={userPoints} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Badges</h2>
        <div className="relative">
          <Carousel badges={badges} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Contributions</h2>
        <div className="relative">
          <ContributionCalendar />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">See Activities</h3>
        <textarea
          className="w-full mt-2 p-3 border rounded-md"
          placeholder="See your activities..."
        ></textarea>
      </div>
    </div>
  );
};

export default Profile;
