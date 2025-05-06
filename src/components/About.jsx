import React from 'react';

const About = () => {
    return (
        <div className="bg-white min-h-screen pt-24 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight font-Tagesschrift">
                    Welcome to <span className="text-indigo-600">Vighnaharta Events</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-poppins">
                    At Vighnaharta Events, we don’t just plan events — we craft immersive experiences that leave lasting impressions. Whether it's a dreamy wedding, a high-energy corporate gala, or an intimate cultural celebration, we turn your vision into vibrant reality with elegance and excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 text-gray-700 text-left">
                    <div>
                        <h2 className="text-3xl font-bold font-Playfair text-indigo-600 mb-2">Who We Are</h2>
                        <p className="font-Roboto leading-relaxed text-xl ">
                        Vighnaharta Events was founded in 2022 by <b> Mr. Vansh Kansal </b>with a singular vision – to transform dreams into reality through exceptional, unforgettable events. What started as a passionate endeavor has rapidly evolved into a renowned full-service event management company. Trusted by clients for our innovative ideas, meticulous planning, and seamless execution, we pride ourselves on creating events that leave lasting impressions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-Playfair font-bold  text-indigo-600 mb-2">What Sets Us Apart</h2>
                        <ul className="list-disc list-inside space-y-2 text-xl  leading-relaxed  font-Roboto">
                            <li>Tailored event concepts that reflect your personality and purpose</li>
                            <li>A seasoned team of planners, stylists, and technical experts</li>
                            <li>Meticulous attention to detail and seamless coordination</li>
                            <li>Trusted vendor network for superior quality and service</li>
                            <li>Transparent communication and end-to-end support</li>
                        </ul>
                    </div>
                </div>




                <div >
                    <img 
                        src="https://wallpapercave.com/wp/wp7488275.jpg"
                        alt="Event Planning"
                        className="rounded-2xl shadow-2xl w-full object-cover transition-transform duration-500 hover:scale-105 h-96"
                    />

                </div>
            </div>


            {/* Our mission */}

            <div className="bg-indigo-50 mt-20 py-12 px-6 rounded-xl shadow-inner max-w-5xl mx-auto">
                <h3 className="text-4xl font-Playfair font-bold text-indigo-700 text-center mb-6">
                    Our Mission
                </h3>
                <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-6 font-poppins">
                    At Vighnaharta Events, our mission is simple yet powerful — to deliver more than just an event. We strive to craft emotionally resonant experiences that linger long after the last guest has gone.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl  font-semibold text-indigo-600 mb-2">Creativity with Purpose</h4>
                        <p className="text-gray-600 font-Roboto text-sm ">
                            We blend creativity and strategic planning to design unique experiences tailored to each client's vision.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Client-Centric Approach</h4>
                        <p className="text-gray-600 text-sm font-Roboto">
                            Your dreams and expectations are at the heart of everything we do — from the first brief to the final applause.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Memories that Matter</h4>
                        <p className="text-gray-600 text-sm font-Roboto">
                            We aim to create moments that become cherished memories — timeless, beautiful, and truly unforgettable.
                        </p>
                    </div>
                </div>
            </div>


            {/* Our Core Values */}
            <div className="bg-indigo-50 mt-20 py-12 px-6 rounded-xl shadow-inner max-w-5xl mx-auto">
                <h3 className="text-4xl font-Playfair font-bold text-indigo-700 text-center mb-6 ">
                    Our Core Values
                </h3>
                <p className="text-gray-700  text-lg text-center max-w-3xl mx-auto mb-6 font-poppins">
                    Guided by our unwavering principles, we bring every event to life with heart, vision, and dedication. These core values define who we are and how we work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Creativity</h4>
                        <p className="text-gray-600 font-Roboto text-sm">
                            We design innovative, visually striking experiences tailored to each client.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Passion</h4>
                        <p className="text-gray-600 font-Roboto text-sm">
                            We’re deeply passionate about delivering joyful, seamless events.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Integrity</h4>
                        <p className="text-gray-600  font-Roboto text-sm">
                            We build trust through transparency, professionalism, and accountability.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-all duration-300">
                        <h4 className="text-xl font-semibold text-indigo-600 mb-2">Excellence</h4>
                        <p className="text-gray-600 font-Roboto text-sm">
                            We strive for perfection in every detail, big or small.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
