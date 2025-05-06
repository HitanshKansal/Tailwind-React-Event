import React from 'react';
import { FaPuzzlePiece, FaLightbulb, FaUsers, FaClock, FaPaintBrush, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaPuzzlePiece size={30} />,
    title: 'All-in-One Solutions',
    description: 'From weddings to corporate and private events, we plan everything under one roof with precision.'
  },
  {
    icon: <FaLightbulb size={30} />,
    title: 'Creative & Custom Concepts',
    description: 'We tailor each event to your unique vision, theme, and budget with innovative ideas.'
  },
  {
    icon: <FaUsers size={30} />,
    title: 'Experienced Team',
    description: 'Our team of planners ensures seamless execution and on-ground support for a stress-free event.'
  },
  {
    icon: <FaClock size={30} />,
    title: 'Punctual & Professional',
    description: 'Timely service, trustworthy vendors, and meticulous planning you can count on.'
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: 'Stylish Designs & Décor',
    description: 'Create a lasting impression with stunning backdrops, lighting, and décor elements.'
  },
  {
    icon: <FaHandshake size={30} />,
    title: 'End-to-End Support',
    description: 'We handle every detail from start to finish to ensure a hassle-free and enjoyable experience.'
  }
];

const WhyUs = () => {
  return (
    <section className="bg-white pt-14" id="why-us">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4 font-Tagesschrift ">Why Choose Vighnaharta Events?</h2>
        <p className="text-gray-500 mb-12 text-lg font-poppins">Delivering Perfection, Passion, and Personalized Experiences</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-indigo-100 transition-all rounded-xl p-6 text-left shadow-md hover:shadow-xl"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
