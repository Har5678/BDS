import React, { useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/Assets";

const approvals = [
  {
    title: "Bar Council of India (BCI)",
    desc: "Bar Council of India has approved our integrated BA.LL.B., LL.B. programmes with an intake of 320 in streams, after verifying the various requirements necessary for the award of degree.",
    color: "bg-[#1CA6A6]",
    logo: assets.Council
  },
  {
    title: "Chaudhary Charan Singh University, Meerut",
    desc: "CCS University, Meerut, U.P. (state university established in 1965), and approved by the Bar Council of India (Statutory body for professional legal education in India).",
    color: "bg-[#142850]",
    logo: assets.Cc
  }
];

const Approvals = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (idx) => {
    // Toggle on mobile
    if (window.innerWidth < 640) {
      setActiveCard(activeCard === idx ? null : idx);
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#920C24] mb-8 md:mb-12">
        Regulatory Approvals/Recognitions
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {approvals.map((item, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => window.innerWidth >= 640 && setActiveCard(idx)}
            onMouseLeave={() => window.innerWidth >= 640 && setActiveCard(null)}
            onClick={() => handleClick(idx)}
            className={`relative ${item.color} text-white rounded-xl shadow-lg flex flex-col items-center justify-start text-center border-4 border-white cursor-pointer p-6 overflow-hidden transition-all duration-300`}
            style={{
              height: activeCard === idx ? 390 : 280
            }}
          >
            {/* Glow for desktop */}
            {window.innerWidth >= 640 && (
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  opacity: activeCard === idx ? 0.2 : 0,
                  background: activeCard === idx
                    ? "linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,255,255,0.1))"
                    : "transparent",
                  boxShadow: activeCard === idx ? "0 0 25px rgba(255,215,0,0.5)" : "none"
                }}
              />
            )}

            {/* Logo */}
            <img
              src={item.logo}
              alt={item.title}
              className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 object-contain mb-4 relative z-10 mix-blend-multiply"
            />

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 relative z-10 px-2">
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`mt-2 relative z-10 px-2 text-sm md:text-base transition-all duration-300 ${
                activeCard === idx || window.innerWidth >= 640 ? "opacity-100" : "opacity-0 max-h-0"
              }`}
              style={{
                overflow: "hidden",
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approvals;
