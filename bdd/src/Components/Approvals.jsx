import React, { useState } from "react";
import { motion } from "framer-motion";

// reference motion to satisfy linters that might flag it as unused in some static checks
void motion;
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
    logo: "/ccs-logo.png"
  }
];

const Approvals = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#920C24] mb-8 md:mb-12">
          Regulatory Approvals/Recognitions
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {approvals.map((item, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ height: 260 }}
              animate={{
                height: hoveredCard === idx ? 350 : 280,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`relative ${item.color} text-white rounded-xl shadow-lg flex flex-col items-center justify-start text-center border-4 border-white cursor-pointer p-6 overflow-hidden`}
            >
              {/* Glow on hover only for desktop */}
              <motion.div
                className="absolute inset-0 rounded-xl hidden sm:block"
                animate={{
                  opacity: hoveredCard === idx ? 0.2 : 0,
                  background: hoveredCard === idx
                    ? "linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,255,255,0.1))"
                    : "transparent",
                  boxShadow: hoveredCard === idx
                    ? "0 0 25px rgba(255,215,0,0.5)"
                    : "none"
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Logo Image */}
              <img
                src={item.logo}
                alt={item.title}
                className="w-35 h-35 sm:w-50 sm:h-50 object-contain mb-4 relative z-10 mix-blend-multiply"
                style={{ background: "transparent" }}
              />

              <h3 className="text-xl md:text-4xl font-bold mb-2 relative z-10">{item.title}</h3>

              {/* Description always visible on mobile, hover on desktop */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  hoveredCard === idx || window.innerWidth < 640
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, ease: "easeOut", delay: hoveredCard === idx ? 0.1 : 0 }}
                className="text-3xl md:text-base mt-2 relative z-15 px-2"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

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

export default Approvals;
