import React, { useState, useEffect } from "react";
import assets from "../assets/Assets";

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="group [perspective:1000px] cursor-pointer"
      onClick={() => isMobile && setFlipped(!flipped)}
    >
      <div
        className={`relative w-full rounded-3xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] 
          ${isMobile ? "min-h-[25rem]" : "min-h-[20rem]"} 
          ${isMobile ? (flipped ? "[transform:rotateY(180deg)]" : "") : "group-hover:[transform:rotateY(180deg)]"}
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl [backface-visibility:hidden] p-6 sm:p-8">
          {front}
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 flex items-center justify-center text-center text-gray-700 text-base sm:text-lg leading-relaxed [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto scrollbar-none">
          {back}
        </div>
      </div>
    </div>
  );
};

const MVBanner = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-[#faf6f2] via-white to-[#faf6f2] py-14 px-4 sm:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-800 tracking-tight">
            Our Vision & Mission
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Shaping the next generation of ethical leaders in law.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
         {/* Vision */}
<FlipCard
  front={
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.vision})`,
                 opacity: '0.8' }}

      />

      {/* Optional overlay (remove if not needed) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white z-10">
          Vision
        </h3>
      </div>
    </div>
  }
            back={
              <p>
                To be a nationally recognized center of excellence in legal
                education, known for our innovative approach to practical training
                and our unwavering commitment to producing a new generation of
                legal professionals who are not only skilled advocates but also
                ethical leaders and agents of social transformation.
              </p>
            }
          />

          <FlipCard
  front={
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.mission})`,
                 opacity: '0.8' }}

      />

      {/* Optional overlay (remove if not needed) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white z-10">
          Mission
        </h3>
      </div>
    </div>
  }
            back={
              <p>
                Our mission is to provide a comprehensive and values-driven legal
                education that empowers every student to master the theoretical
                foundations of law while developing crucial real-world skills.
                Through a curriculum focused on critical thinking, ethical
                practice, and hands-on experience in our Moot Court and Legal Aid
                Clinic, we are dedicated to cultivating competent lawyers,
                responsible citizens, and visionary leaders who will contribute
                meaningfully to justice and society.
              </p>
            }
          />
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6, li, p {
          font-family: 'Bookman Old Style', serif !important;
        }
      `}</style>
    </>
  );
};

export default MVBanner;