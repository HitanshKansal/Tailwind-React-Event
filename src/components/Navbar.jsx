import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-br from-gray-900 to-gray-800  shadow-md fixed w-full z-50 top-0 left-0 h-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-full">
                {/* Logo */}

                <div className="flex items-center ">
                    <img
                        src="/logo1.png"
                        alt="Brand Logo"
                        className="w-28 h-28 md:w-32 md:h-32 object-contain pt-3 "
                    />
                    <div className="text-xl md:text-3xl font-extrabold text-white tracking-wide  font-Dancing">
                        Vighnaharta Events
                    </div>
                </div>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 font-medium font-Montserrat text-white">
                    <Link to="/" className="relative group transition hover:font-bold text-xl">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to="/about" className="relative group transition hover:font-bold text-xl">
                        About Us
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to="/service" className="relative group transition hover:font-bold text-xl">
                        Services
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link to="/contact" className="relative group transition hover:font-bold text-xl">
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)} className="focus:outline-none">
                        {open ? (
                            // Close icon (X)
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 shadow-md">
                    <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</Link>
                    <Link to="/service" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
                    <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
                </div>
            )}
        </nav>
    );
}


