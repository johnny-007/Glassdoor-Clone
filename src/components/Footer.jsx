import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const FooterLinks = [
  {
    title: "About/Press",
    link: "/#",
  },
  {
    title: "Awards",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
  {
    title: "Research",
    link: "/#",
  },
  {
    title: "Guides",
    link: "/#",
  },
];

const FooterLinks2 = [
  {
    title: "Community",
    link: "/#",
  },
  {
    title: "Companies",
    link: "/#",
  },
  {
    title: "Jobs",
    link: "/#",
  },
  {
    title: "Salaries",
    link: "/#",
  },
  {
    title: "For Employers",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className='text-black bg-white'>
      <div className='min-h-[300px] flex items-center'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 pt-5">
          {/* Widget 1 */}
          <div className='flex flex-col items-center md:items-start'>
            <a href='#'><img src={logo} alt="Glassdoor Logo" className="h-40 w-auto mr-4" /></a>
            <button className='mt-6 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 ml-4  text-white  '>
              Search Job
            </button>
          </div>
          {/* Widget 2 */}
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold mb-3'>Glassdoor</h1>
            <ul className='space-y-3'>
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block hover:scale-105 duration-200 text-md text-center'>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Widget 3 */}
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold  mb-3'>Quick Links</h1>
            <ul className='space-y-3'>
              {FooterLinks2.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className='inline-block hover:scale-105 duration-200 text-md text-center'>
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Widget 4 */}
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold mb-3'>For More</h1>
            <div className='space-x-3'>
              <a href="#" className='text-3xl inline-block hover:scale-105 duration-200'>
                <FaFacebook className='text-gray-400 hover:text-blue-600 transition-colors duration-200' />
              </a>
              <a href="#" className='text-3xl inline-block hover:scale-105 duration-200'>
                <FaInstagram className='text-gray-400 hover:text-pink-600 transition-colors duration-200' />
              </a>
              <a href="#" className='text-3xl inline-block hover:scale-105 duration-200'>
                <FaGoogle className='text-gray-400 hover:text-yellow-600 transition-colors duration-200' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;