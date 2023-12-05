// Carousel.js
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"; // Make sure these icons are properly imported

const Carousel = ({ slides, updateCurrentSlide, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  // Function to go to the previous slide
  const prev = () => {
    const newIndex = curr === 0 ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
    updateCurrentSlide(newIndex);
  };

  // Function to go to the next slide
  const next = () => {
    const newIndex = curr === slides.length - 1 ? 0 : curr + 1;
    setCurr(newIndex);
    updateCurrentSlide(newIndex);
  };

  // Effect for auto-sliding
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="w-full object-contain block rounded-img" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>
      {/* Dots representing each slide */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer w-3 h-3 bg-white rounded-full transition-all ${
              curr === index ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={() => updateCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
