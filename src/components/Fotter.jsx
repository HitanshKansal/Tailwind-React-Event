import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-10 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-400">Vighnaharta Events</h2>
          <p className="text-sm text-gray-300">
            Crafting unforgettable memories through exceptional event planning for all occasions.
          </p>
          <p className="text-xs text-gray-500">© 2025 Vighnaharta Events. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 Address: Bulandshahr, Uttar Pradesh, India</li>
            <li>📞 Phone: +91-8864908748</li>
            <li>✉️ Email: <a href="mailto:info@vighnahartaevents.com" className="hover:text-indigo-400">vighnahartaeventswedding@gmail.com</a></li>
          </ul>
        </div>

       

<div className="space-y-4 text-center">
      <h3 className="text-xl font-semibold">Stay Connected</h3>
      <div className="flex justify-center space-x-4 text-xl">
        <a
          href="https://www.instagram.com/vighnahartaevents_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yourpagename"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="https://wa.me/8864908748"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.youtube.com/channel/yourchannelid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaYoutube />
        </a>
      </div>
    </div>

      </div>
    </footer>
  );
};

export default Footer;

