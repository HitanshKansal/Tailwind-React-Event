import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 font-Tagesschrift text-indigo-600 ">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-12 font-poppins">
          Got a question or planning an event? Reach out and let's create something unforgettable!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-indigo-50 rounded-xl p-8 space-y-6 shadow-md border border-gray-200"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="8365331c-1abe-4be6-bf4c-f88807e19879"
            />

            <div>
              <label className="block text-gray-700 font-medium text-xl mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-xl mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium text-xl mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell us about your event..."
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md border border-gray-200 space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Reach Us At</h3>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-indigo-600" />
              <div className="flex flex-col">
                <span>+91 88649 08748</span>
                <span>+91 89790 93255</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-indigo-600" />
              <span>
                <a
                  href="mailto:vighnahartaeventswedding@gmail.com"
                  className="hover:text-indigo-400"
                >
                  vighnahartaeventswedding@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Bulandshahr, Uttar Pradesh, India</span>
            </div>

            {/* Stay Connected Section */}
            <div className="space-y-4 text-center mt-6">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;














