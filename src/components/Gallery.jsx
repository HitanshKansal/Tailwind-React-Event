import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeGallery = () => {
  const images = [
    '/img5.jpeg',
    '/img5.jpeg',
    '/img6.jpeg',
    '/img1.jpeg',
    '/img2.jpeg',
    '/bg.jpg',
    '/img7.jpeg',
    '/img8.jpeg',
    '/img9.jpeg',
    '/img11.jpeg',
    '/img12.jpeg',
    '/img13.jpeg',
    '/img14.jpeg',
    '/img15.jpeg',
    '/img16.jpeg',
    '/img17.jpeg',
    '/img18.jpeg',
    '/img19.jpeg',
  ];

  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="w-full pt-14 px-6 mb-8 min-h-screen">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-600 font-Tagesschrift">Our Event Gallery</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-poppins">
          Explore the most memorable moments from the events we’ve brought to life. Each picture tells a story of celebration, elegance, and unforgettable experiences.
        </p>
      </div>

      {/* Swipeable Image Carousel */}
      <div className="relative w-full max-w-4xl mx-auto mt-8  overflow-hidden rounded-xl shadow-2xl">
        <div {...handlers}>
          <img
            src={images[index]}
            alt={`Gallery ${index}`}
            className="w-full h-[400px] md:h-[500px] object-contain transition-all duration-500"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-2xl"
        >
          ❮
        </button>
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SwipeGallery;
