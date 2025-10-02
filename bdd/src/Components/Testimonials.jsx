import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/Assets";

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Software Engineer",
    photo: assets.Flower1,
    review: "'This platform has transformed my learning experience. Highly recommended!'"
  },
  {
    name: "Bob Smith",
    title: "UI/UX Designer",
    photo: assets.Flower2,
    review: "'Amazing mentors and an incredible environment for growth.'"
  },
  {
    name: "Charlie Lee",
    title: "Entrepreneur",
    photo: assets.Flower3,
    review: "'The insights I gained here helped me launch my startup successfully.'"
  },
  {
    name: "Dana White",
    title: "Digital Marketer",
    photo: assets.Flower4,
    review: "'Practical knowledge and supportive faculty made all the difference.'"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-10">
      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-6xl flex items-center justify-center overflow-hidden">
        {/* Cards */}
        <div className="relative w-full h-[350px] flex items-center justify-center">
          {testimonials.map((t, index) => {
            let position = index - current;
            if (position < 0) position += testimonials.length;

            let styles = "absolute transition-all duration-500 ease-in-out";

            if (position === 0) {
              styles += " z-20 w-[45%] h-[350px] opacity-100 scale-100 translate-x-0";
            } else if (position === 1) {
              styles += " z-10 w-[35%] h-[300px] opacity-80 scale-90 translate-x-[65%]";
            } else if (position === testimonials.length - 1) {
              styles += " z-10 w-[35%] h-[300px] opacity-80 scale-90 -translate-x-[65%]";
            } else {
              styles += " opacity-0 scale-75";
            }

            return (
              <div
                key={index}
                className={`${styles} bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center`}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{t.name}</h3>
                <p className="text-sm md:text-base text-gray-500 mb-2">{t.title}</p>
                <p className="text-base md:text-lg italic text-gray-700">{t.review}</p>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-30"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-30"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-[#920C24] scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      </div>

      {/* Inserted styled-jsx block as requested. Note: styled-jsx is Next.js-specific; in Vite/CRA this will render but not provide scoping. */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6, li, p, a {
          font-family: 'Bookman Old Style', serif !important;
        }
          `}</style>
    </>
  );
};

export default Testimonials;
