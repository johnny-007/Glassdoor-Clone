import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding, FaDollarSign } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <div className="text-center p-4">
      <h3 className="text-3xl font-semibold mb-4">Get ahead with Glassdoor
      </h3>
      <p className="text-sm mb-8">We are serving up trusted insights and anonymous conversations. So <br /> you'll have the goods you need to succeed.</p>
      <div className="grid grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-3xl mb-2" />
          <span>Join our work community</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPhone className="text-3xl rounded-full border-2 border-gray-300 p-2 mb-2" />
          <span>Find and apply to jobs</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBuilding className="text-3xl mb-2" />
          <span>Search company reviews</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDollarSign className="text-3xl mb-2" />
          <span>Company salaries</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
