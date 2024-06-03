import React, { useState, useEffect } from 'react';
import nextLogo from '../../assets/logo/next.png';
import prevLogo from '../../assets/logo/prev.png';
import Card from '../Card/Card';

const AutoCarousel = ({ cardsData, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [cardsData.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-96 overflow-hidden rounded-lg drop-shadow-sm">
      <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cardsData.map(({title, description, imageUrl, index, cardColor1, cardColor2}) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Card imageLink={imageUrl} title={title} description={description}/>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {cardsData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-400' : 'bg-white'}`}
          />
        ))}
      </div>
      <button
        className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none"
        onClick={goToPrevious}
      >
        <div className='w-8 md:w-16'><img alt='prev' src={prevLogo} /></div>
      </button>
      <button
        className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full focus:outline-none"
        onClick={goToNext}
      >
        <div className='w-8 md:w-16'><img alt='next' src={nextLogo} /></div>
      </button>
    </div>
  );
};

export default AutoCarousel;
