import React, { useState } from "react";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/Assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    courses: false,
    registration: false,
    research: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div>
      {/* 🔹 Top Bar - desktop only */}
      <div className="bg-[#2B2E4A] text-white flex justify-center items-center px-8 py-3 text-sm md:text-lg gap-10 flex-wrap hidden md:flex">
        <li className="list-none">
          <Link to="/Alumini">Alumini</Link>
        </li>
        <li className="list-none">
          <Link to="/news-events">News & Events</Link>
        </li>
        <li className="list-none">
          <Link to="/Registration">Register Now</Link>
        </li>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md">
          <HiSearch size={18} className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-gray-300 text-sm w-32 focus:w-44 transition-all duration-300"
          />
        </div>
      </div>

      {/* 🔴 Main Header */}
      <div className="bg-[#920C24] text-white flex justify-between items-center gap-4 py-3 px-4 md:justify-center md:py-3">
        <img
          src={assets.Logo1}
          alt="School Logo"
          className="w-14 h-14 md:w-20 md:h-20 object-contain"
        />
        <div className="flex flex-col items-center flex-1 md:flex-none">
          <h1 className="text-base md:text-4xl lg:text-6xl font-bold tracking-wide text-center">
            BDS SCHOOL OF LAW
          </h1>
        </div>

        {/* Hamburger - mobile only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <HiMenu size={24} />
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Menu */}
      <ul className="hidden md:flex flex-wrap justify-center gap-10 lg:gap-14 py-4 text-[#920C24] font-semibold text-sm lg:text-base">
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/">ABOUT US</Link>
        </li>

        {/* Courses Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          COURSES
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
            <Link to="/Ballb">
              <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">BALLB</li>
            </Link>
            <Link to="/Llb">
              <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">LLB</li>
            </Link>
            <Link to="/Llm">
              <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">LLM</li>
            </Link>
            <Link to="/CyberLaw">
              <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Diploma in Cyber Law</li>
            </Link>
          </ul>
        </li>

        {/* Registration Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          ADMISSION
          <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 text-sm">
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              <Link to="/Registration">BDS School of Law Registration</Link>
            </li>
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">University Registration</li>
          </ul>
        </li>

        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/CampusLife">CAMPUS</Link>
        </li>
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/LawyeringSkills">LAWYERING SKILLS</Link>
        </li>

        {/* Faculty & Research Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          FACULTY & RESEARCH
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 text-sm">
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              <Link to="/TopFaculty">Top Faculty</Link>
            </li>
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              <Link to="/Publication">Publications</Link>
            </li>
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              <Link to="/Publication">Journals</Link>
            </li>
          </ul>
        </li>

        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/Contact-us">CONTACT US</Link>
        </li>
      </ul>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 left-0 h-full w-full bg-white z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setMenuOpen(false)}>
                  <HiX size={28} />
                </button>
              </div>

              {/* 🔹 Top Blue Bar inside Hamburger */}
              <div className="bg-[#2B2E4A] text-white flex flex-col gap-2 px-6 py-4">
                <Link to="/Alumini" onClick={() => setMenuOpen(false)}>Alumini</Link>
                <Link to="/news-events" onClick={() => setMenuOpen(false)}>News & Events</Link>
                <Link to="/Registration" onClick={() => setMenuOpen(false)}>Register Now</Link>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md mt-2">
                  <HiSearch size={18} className="text-white" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-white placeholder-gray-300 text-sm w-full focus:w-full transition-all duration-300"
                  />
                </div>
              </div>

              {/* 🔸 Main Menu inside Hamburger */}
              <ul className="flex flex-col gap-1 text-[#920C24] font-semibold text-base px-6 py-6">
                <li className="py-2 border-b">
                  <Link to="/" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                </li>

                {/* Courses */}
                <li className="py-2 border-b">
                  <div onClick={() => toggleDropdown("courses")} className="flex justify-between items-center cursor-pointer">
                    COURSES <span>{dropdowns.courses ? "▲" : "▼"}</span>
                  </div>
                  {dropdowns.courses && (
                    <ul className="pl-4 mt-1 flex flex-col gap-1 text-sm">
                      <li><Link to="/Ballb" onClick={() => setMenuOpen(false)}>BALLB</Link></li>
                      <li><Link to="/Llb" onClick={() => setMenuOpen(false)}>LLB</Link></li>
                      <li><Link to="/Llm" onClick={() => setMenuOpen(false)}>LLM</Link></li>
                      <li><Link to="/CyberLaw" onClick={() => setMenuOpen(false)}>Diploma in Cyber Law</Link></li>
                    </ul>
                  )}
                </li>

                {/* Registration */}
                <li className="py-2 border-b">
                  <div onClick={() => toggleDropdown("registration")} className="flex justify-between items-center cursor-pointer">
                    REGISTRATION <span>{dropdowns.registration ? "▲" : "▼"}</span>
                  </div>
                  {dropdowns.registration && (
                    <ul className="pl-4 mt-1 flex flex-col gap-1 text-sm">
                      <li><Link to="/Registration" onClick={() => setMenuOpen(false)}>BDS School of Law Registration</Link></li>
                      <li><span>University Registration</span></li>
                    </ul>
                  )}
                </li>

                <li className="py-2 border-b"><Link to="/CampusLife" onClick={() => setMenuOpen(false)}>CAMPUS</Link></li>
                <li className="py-2 border-b"><Link to="/LawyeringSkills" onClick={() => setMenuOpen(false)}>LAWYERING SKILLS</Link></li>
                <li className="py-2 border-b"><Link to="/TopFaculty" onClick={() => setMenuOpen(false)}>TOP FACULTY</Link></li>
                <li className="py-2 border-b"><Link to="/news-events" onClick={() => setMenuOpen(false)}>NEWS & EVENTS</Link></li>

                {/* Research */}
                <li className="py-2 border-b">
                  <div onClick={() => toggleDropdown("research")} className="flex justify-between items-center cursor-pointer">
                    RESEARCH <span>{dropdowns.research ? "▲" : "▼"}</span>
                  </div>
                  {dropdowns.research && (
                    <ul className="pl-4 mt-1 flex flex-col gap-1 text-sm">
                      <li><Link to="/Publication" onClick={() => setMenuOpen(false)}>Publications</Link></li>
                      <li><Link to="/Publication" onClick={() => setMenuOpen(false)}>Journals</Link></li>
                    </ul>
                  )}
                </li>

                <li className="py-2 border-b"><Link to="/contact-us" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        * {
          font-family: 'EB Garamond', serif !important;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bookman Old Style', serif !important;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
