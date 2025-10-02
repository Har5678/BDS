import React from "react";
import assets from "../assets/Assets";

const RgBanner = () => {
  const courses = ["BA LLB", "LLB", "LLM", "Cyberlaw"];
  const currentYear = new Date().getFullYear();
  const session = `${currentYear}-${currentYear + 1}`;

  return (
    <div className="relative w-full max-w-[2000px] min-h-[480px] flex items-center justify-center 
                    bg-gradient-to-b from-[#6e091b] via-[#920C24] to-[#b71c2f] px-6 py-10">

      {/* Left Side - Content */}
      <div className="w-1/2 flex flex-col items-start justify-center text-left text-white gap-4 px-8">
        <div className="flex items-center gap-4 mb-2">
          <img src={assets.Logo1} alt="BDS School Logo" className="w-16 h-16 rounded-full shadow-lg" />
          <h2 className="text-2xl font-bold">BDS School of Law</h2>
        </div>

        <h1 className="text-3xl font-semibold max-w-lg leading-snug drop-shadow-lg">
          Legacy of 23+ years in practice & professional legal education
        </h1>

        <div className="flex flex-wrap gap-3 mt-2 mb-2">
          {courses.map((course) => (
            <span
              key={course}
              className="px-4 py-2 bg-white/20 rounded-full text-base font-semibold 
                         hover:bg-white hover:text-[#920C24] transition cursor-pointer shadow-md"
            >
              {course}
            </span>
          ))}
        </div>

        <p className="text-sm drop-shadow-md">Session: {session}</p>

        <div className="mt-2 px-4 py-2 border-2 border-[#FFD700] rounded-xl inline-block shadow-lg">
          <p className="text-base font-semibold italic">
            “Join us to earn a Career, not just a degree!”
          </p>
        </div>
      </div>

      {/* Right Side - Glass Form */}
      <div className="w-1/3 flex flex-col items-center justify-center px-10 py-10 
                      bg-white/10 backdrop-blur-xl rounded-2xl 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-white/20">
        
        <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-md">Registration Form</h1>

        <div className="w-full flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input 
            type="text" 
            placeholder="Father's Name" 
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <textarea 
            placeholder="Address" 
            rows="3"
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md outline-none focus:ring-2 focus:ring-[#FFD700] resize-none"
          />
        </div>

        <button className="mt-6 px-10 py-3 bg-[#FFD700] text-[#920C24] font-bold rounded-xl 
                           shadow-lg hover:shadow-2xl hover:bg-white hover:text-[#920C24] transition uppercase">
          Register
        </button>
      </div>
    </div>
  );
};

export default RgBanner;
