// src/components/Modal.jsx
import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center text-gray-600 bg-transparent"
          style={{ fontSize: '2rem', borderRadius: '50%' }}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Create an account or sign in</h2>
        <p className="text-sm mb-6 text-center">
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
        <div className="text-sm mb-4 text-center">or</div>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full mb-2 py-1 px-2 border text-lg border-black"
        />
        <button className="w-full py-2 px-2 border border-black text-black rounded text-lg hover:border-none hover:bg-primary hover:text-white">
          Continue with Email
        </button>
      </div>
    </div>
  );
};

export default Modal;
