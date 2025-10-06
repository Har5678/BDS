import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import assets from "../assets/Assets";

const testimonials = [
  {
    name: "Amit Singh Bansiwala",
    title: "LLB(2023-2025)",
    photo: assets.Amit,
    review:
      "My three-year LL.B. journey at B.D.S. was transformative. Grateful to the faculty, management, and Principal Sir for shaping my legal knowledge, skills, and values — forever thankful.",
  },
  {
    name: "Chiranjeev",
    title: "LLB 5th Sem",
    photo: assets.Chiranjeev,
    review: "My LL.B. journey at B.D.S. was transformative. Thanks to the faculty and Principal Sir for shaping my knowledge and skills.",
  },
  {
    name: "Himanshi Shishodia",
    title: "BALLB 7th Sem",
    photo: assets.Himanshi,
    review: "The faculty's passion and expertise inspire me daily. With supportive peers, excellent resources, and countless opportunities, this college shapes me into a skilled lawyer and a changemaker.",
  },
  {
    name: "Rishank",
    title: "BALLB 3rd Sem",
    photo: assets.Rishank,
    review: "BDS School of Law stands out for its supportive faculty, motivating environment, and modern infrastructure. With a balance of academics, co-curricular activities, and strong student–teacher bonds, it ensures holistic development.",
  },
  {
    name:"Roshni Chauhan",
    title:"BALLB 9th Sem",
    photo:assets.Roshini,
    review:"My law college offers practical guidance and hands-on experience through professors, internships, moot courts, and legal projects, building confidence and professional skills."
  },
  {
    name:"Shivani Louhan",
    title:"BALLB 9th Sem",
    photo:assets.Shivani,
    review:"BDS School of Law isn’t just a place to study—it’s where I found my voice and purpose. The calm, focused environment and guiding faculty have shaped my journey as a legal scholar."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 sm:px-6 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        What Our Students Say
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-5xl flex items-center justify-center overflow-hidden">
        {/* Cards */}
        <div className="relative w-full h-[360px] flex items-center justify-center">
          {testimonials.map((t, index) => {
            let position;
            if (isMobile) {
              position = index === current ? 0 : 1;
            } else {
              position = index - current;
              if (position < 0) position += testimonials.length;
            }

            let styles = "absolute transition-all duration-500 ease-in-out";

            if (isMobile) {
              styles +=
                position === 0
                  ? " z-20 w-11/12 h-[320px] opacity-100 scale-100 translate-x-0"
                  : " opacity-0 scale-90";
            } else {
              if (position === 0) {
                styles +=
                  " z-20 w-[50%] h-[360px] opacity-100 scale-100 translate-x-0";
              } else if (position === 1) {
                styles +=
                  " z-10 w-[38%] h-[310px] opacity-80 scale-95 translate-x-[60%]";
              } else if (position === testimonials.length - 1) {
                styles +=
                  " z-10 w-[38%] h-[310px] opacity-80 scale-95 -translate-x-[60%]";
              } else {
                styles += " opacity-0 scale-80";
              }
            }

            return (
              <div
                key={index}
                className={`${styles} bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center`}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-24 h-24 md:w-30 md:h-30 rounded-full mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{t.name}</h3>
                <p className="text-sm md:text-base text-gray-500 mb-2">{t.title}</p>
                <p className="text-base md:text-lg italic text-gray-700">{t.review}</p>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        {!isMobile && (
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-30"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )}

        {/* Right Arrow */}
        {!isMobile && (
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-30"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex space-x-3 mt-6">
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        * { font-family: 'EB Garamond', serif !important; }
        h1,h2,h3,h4,h5,h6,li,p,a { font-family: 'Bookman Old Style', serif !important; }
      `}</style>
    </div>
  );
};

export default Testimonials;
