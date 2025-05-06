import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full space-y-6 bg-black/50 px-4">
        <h4 className="text-4xl md:text-5xl font-bold font-Lora">Make Your Wish Possible</h4>
        <p className="text-xl md:text-2xl max-w-2xl font-Lora">
          Crafting unforgettable moments with elegance and perfection.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Contact Us
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Content;


