import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Modal from './Modal'; // Import the Modal component

const Header = ({ openModal }) => {
  const [dropdown, setDropdown] = useState('');

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown('');
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href='#'><img src={logo} alt="Glassdoor Logo" className="h-20 w-auto mr-4" /></a>
        </div>
        <nav className="flex space-x-6">
          <div
            onMouseEnter={() => handleMouseEnter('Community')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-gray-700 hover:text-primary text-lg font-semibold mr-3">Community</button>
            {dropdown === 'Community' ? (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-4 border rounded z-20">
                <p className="mb-2 font-semibold">Your work people are here</p>
                <p className="mb-2">Connect anonymously with professionals about work, pay, life and more.</p>
                <button className="bg-primary text-white py-1 px-3 rounded">Start using Glassdoor</button>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('Companies')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-gray-700 hover:text-primary text-lg font-semibold mr-3">Companies</button>
            {dropdown === 'Companies' ? (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-4 border rounded z-20">
                <p className="mb-2 font-semibold">Read millions of reviews</p>
                <p className="mb-2">Read anonymous reviews on over 600,000 companies worldwide from the people that work there.</p>
                <button className="bg-primary text-white py-1 px-3 rounded">Start using Glassdoor</button>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('Jobs')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-gray-700 hover:text-primary text-lg font-semibold mr-3">Jobs</button>
            {dropdown === 'Jobs' ? (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-4 border rounded z-20">
                <p className="mb-2 font-semibold">Find the right job</p>
                <p className="mb-2">Millions of jobs. Search by what matters to you and find the one that's right for you.</p>
                <button className="bg-primary text-white py-1 px-3 rounded">Start using Glassdoor</button>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('Salaries')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-gray-700 hover:text-primary text-lg font-semibold mr-3">Salaries</button>
            {dropdown === 'Salaries' ? (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-4 border rounded z-20">
                <p className="mb-2 font-semibold">Compare salaries</p>
                <p className="mb-2">Are you paid fairly? Get a free, personalized salary estimate and compare with millions of salaries.</p>
                <button className="bg-primary text-white py-1 px-3 rounded">Start using Glassdoor</button>
              </div>
            ) : null}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('For Employers')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-gray-700 hover:text-primary text-lg font-semibold mr-3">For Employers</button>
            {dropdown === 'For Employers' ? (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg p-4 border rounded z-20">
                <p className="mb-2 font-semibold">Unlock free employer profile</p>
                <p className="mb-2">Find out how employers everywhere are using Glassdoor to attract the right talent.</p>
                <button className="bg-primary text-white py-1 px-3 rounded">Explore For Employers</button>
              </div>
            ) : null}
          </div>
        </nav>
        <button
          onClick={openModal}
          className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-primary text-lg"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
