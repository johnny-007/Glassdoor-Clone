// src/components/SearchSection.jsx
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const SearchSection = ({ openModal }) => { // Accept openModal as a prop
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative bg-gray-100 p-4 text-center border-t border-gray-300">
      <h3 className="text-2xl font-bold my-4">Start Your Search</h3>
      <p className="text-gray-700 mb-4 font-semibold">
        Need some inspiration? See what millions of people are looking for on Glassdoor today.
      </p>
      {isExpanded && (
        <div className="bg-gray-100 p-4 rounded">
          <div className="grid grid-cols-5 gap-8 mb-4">
            <div>
              <h4 className="font-semibold mb-2 text-left">Flexible Jobs</h4>
              <ul className="list-none text-left">
                <li><a href="#" className="text-secondary no-underline hover:underline">Data Entry Work from Home Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Customer Service Work from Home Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Software Developer Remote Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Content Writer Remote Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Marketing Remote Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Data Entry Work from Home Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Customer Service Work from Home Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Software Developer Remote Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Content Writer Remote Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Marketing Remote Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-left">Popular Jobs</h4>
              <ul className="list-none text-left">
                <li><a href="#" className="text-secondary no-underline hover:underline">Truck Driver Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Registered Nurse Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Project Manager Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Sales Representative Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Administrative Assistant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Truck Driver Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Registered Nurse Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Project Manager Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Sales Representative Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Administrative Assistant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Truck Driver Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Registered Nurse Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Project Manager Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Sales Representative Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Administrative Assistant Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-left">IT Jobs</h4>
              <ul className="list-none text-left">
                <li><a href="#" className="text-secondary no-underline hover:underline">System Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Network Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Database Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">DevOps Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Cloud Engineer Jobs</a></li><li><a href="#" className="text-secondary no-underline hover:underline">System Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Network Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Database Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">DevOps Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Cloud Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">System Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Network Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Database Administrator Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">DevOps Engineer Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Cloud Engineer Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-left">Healthcare Jobs</h4>
              <ul className="list-none text-left">
                <li><a href="#" className="text-secondary no-underline hover:underline">Physician Assistant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Pharmacist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Radiologic Technologist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Occupational Therapist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Physical Therapist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Physician Assistant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Pharmacist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Radiologic Technologist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Occupational Therapist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Physical Therapist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Physician Assistant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Pharmacist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Radiologic Technologist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Occupational Therapist Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Physical Therapist Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-left">Finance Jobs</h4>
              <ul className="list-none text-left">
                <li><a href="#" className="text-secondary no-underline hover:underline">Financial Analyst Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Accountant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Auditor Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Investment Banker Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Credit Analyst Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Financial Analyst Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Accountant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Auditor Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Investment Banker Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Credit Analyst Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Financial Analyst Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Accountant Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Auditor Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Investment Banker Jobs</a></li>
                <li><a href="#" className="text-secondary no-underline hover:underline">Credit Analyst Jobs</a></li>
              </ul>
            </div>
          </div>
          <button 
            className="bg-black text-white font-semibold py-2 px-8 m-4 rounded hover:bg-primary text-lg"
            onClick={openModal} // Call openModal when button is clicked
          >
            Sign Up for Free
          </button>
          <div className="flex justify-center">
            <button onClick={handleToggle} className="text-primary text-2xl">
              <FaArrowUp />
            </button>
          </div>
        </div>
      )}
      {!isExpanded && (
        <div className="flex justify-center">
          <button onClick={handleToggle} className="text-primary text-2xl">
            <FaArrowDown />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
