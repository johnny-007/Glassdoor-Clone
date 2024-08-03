import React from 'react';
import peopleLeftPng from '../assets/people-left.png';  
import peopleRightPng from '../assets/people-right.png';   
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

const BodySection = () => {
  return (
    <div className="relative flex flex-col items-center p-4 z-10">
      <h1 className="text-primary text-5xl font-bold mb-8 mt-8 text-center">Your work people are here</h1>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4">
        <img src={peopleLeftPng} alt="People Left" className="h-[350px] w-[100%]" />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4">
        <img src={peopleRightPng} alt="People Right" className="h-[350px] w-auto" />
      </div>
      <div className="bg-white p-8 mb-16 rounded w-full max-w-md text-center relative z-0">
        <h2 className="text-xl font-bold mb-4">Create an account or sign in</h2>
        <p className="text-sm mb-6">
          By continuing, you agree to our <a href="#" className="text-primary underline">Terms of Use</a> and <a href="#" className="text-primary underline">Privacy Policy</a>.
        </p>
        <button className="flex items-center justify-center w-full mb-2 py-1 px-2 border text-lg bg-white border-black">
          <FaGoogle className="mr-2 text-yellow-500" /> Continue with Google
        </button>
        <button className="flex items-center justify-center w-full mb-2 py-1 px-2 border text-lg bg-white border-black">
          <FaFacebook className="mr-2 text-blue-600" /> Continue with Facebook
        </button>
        <button className="flex items-center justify-center w-full mb-2 py-1 px-2 border text-lg bg-white border-black">
          <FaApple className="mr-2 text-black" /> Continue with Apple
        </button>
        <div className="text-sm mb-4">or</div>
        <input type="email" placeholder="Enter email" className="w-full mb-2 py-1 px-2 border text-lg border-black" />
        <button className="w-full py-2 px-2 border border-black text-black rounded hover:border-none text-lg hover:bg-primary hover:text-white">Continue with Email</button>
      </div>
      <hr className='bg-black w-full' />
    </div>
  );
};

export default BodySection;
