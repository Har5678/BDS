import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
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
      {/* Top Bar - desktop only */}
      <div className="bg-[#2B2E4A] text-white flex justify-center items-center px-6 py-2 text-xs md:text-sm gap-6 flex-wrap hidden md:flex">
        <span>People@BDS</span>
        <span>Students</span>
        <span>myBDS</span>
        <span>Alumni</span>
        <span>Media Queries</span>
        <span>NIRF</span>
        <span>Mental Health</span>
        <button className="border px-3 py-1 rounded-md text-xs md:text-sm hover:bg-white hover:text-[#2B2E4A] transition">
          Subscribe
        </button>
      </div>

      {/* Main Header */}
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

        {/* Hamburger - mobile & tablet */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <HiMenu size={22} /> {/* smaller icon on mobile */}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-wrap justify-center gap-8 lg:gap-12 py-4 text-[#920C24] font-semibold text-sm lg:text-base">
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/">ABOUT US</Link>
        </li>

        {/* Courses Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          COURSES
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
            <Link to="/Ballb"><li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              BALLB
            </li></Link>
            <Link to="/Llb"><li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              LLB
            </li></Link>
             <Link to="/Llm"><li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
             LLM
            </li> </Link>
            <Link to="/CyberLaw"><li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              Diploma in Cyber Law
            </li></Link>
          </ul>
        </li>

        {/* Registration Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          REGISTRATION
          <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 text-sm">
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              <Link to="/Registration">BDS School of Law Registration</Link>
            </li>
            <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
              University Registration
            </li>
          </ul>
        </li>

        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/CampusLife">CAMPUS</Link>
        </li>
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/LawyeringSkills">LAWYERING SKILLS</Link>
        </li>
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/TopFaculty">TOP FACULTY</Link>
        </li>
        <li className="hover:text-[#2B2E4A] cursor-pointer">
          <Link to="/news-events">NEWS & EVENTS</Link>
        </li>

        {/* Research Dropdown */}
        <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
          RESEARCH
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 text-sm">
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

      {/* Mobile / Tablet Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide Menu */}
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col gap-1 py-6 text-[#920C24] font-semibold text-base px-6 z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end mb-6 text-[#920C24]"
              >
                <HiX size={22} /> {/* smaller close icon */}
              </button>

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
            </motion.ul>
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
