import React from "react";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

// Reference motion to satisfy linters/static checks that might flag JSX-only usage as unused.
void motion;

const stats = [
  {
    number: "5000+",
    label: "Alumni",
    color: "bg-[#2E3192]",
    hoverBorder: "hover:border-[#F5A623]",
    icon: <GraduationCap size={48} />
  },
  {
    number: "35+",
    label: "Faculty & Industry Experts",
    color: "bg-[#142850]",
    hoverBorder: "hover:border-[#1CA6A6]",
    icon: <BookOpen size={48} />
  },
  {
    number: "22+",
    label: "Years of Academic Excellence",
    color: "bg-[#F5A623]",
    hoverBorder: "hover:border-[#2E3192]",
    icon: <Users size={48} />
  }
];

const CircleStats = () => {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative w-64 h-64 rounded-full ${item.color} text-white 
                        shadow-2xl flex flex-col items-center justify-center 
                        border-4 border-white ${item.hoverBorder} cursor-pointer`}
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15, y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 15, delay: idx * 0.2 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-3xl font-extrabold text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {item.number}
              </motion.h3>
              <motion.p
                className="text-lg text-center px-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {item.label}
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

export default CircleStats;
