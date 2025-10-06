import React from "react";
import assets from "../assets/Assets"; // ensure image path is correct

const TextBanner = () => {
  return (
    <div className="w-[100vw] h-[40vh] sm:h-[50vh] md:h-[70vh] overflow-hidden relative">
      <img
        src={assets.AboutNew} // your banner image
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        * {
          font-family: 'EB Garamond', serif !important;
        }
        html, body {
          overflow-x: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default TextBanner;
