import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
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
            <div className="bg-[#2B2E4A] text-white flex justify-center items-center px-6 py-2 text-sm gap-12 flex-wrap hidden md:flex">
                <span>People@BDS</span>
                <span>Students</span>
                <span>myBDS</span>
                <span>Alumni</span>
                <span>Media Queries</span>
                <span>NIRF</span>
                <span>Mental Health</span>
                <button className="border px-4 py-1 rounded-md hover:bg-white hover:text-[#2B2E4A] transition">
                    Subscribe to our newsletter
                </button>
            </div>

            {/* Main Header */}
            <div className="bg-[#920C24] text-white flex justify-between items-center gap-6 py-4 px-4 md:justify-center md:py-3">
                <img
                    src={assets.Logo1}
                    alt="School Logo"
                    className="w-18 h-18 md:w-25 md:h-25 object-contain"
                />
                <div className="flex flex-col items-center flex-1 md:flex-none">
                    <h1 className="text-2xl md:text-6xl font-bold tracking-wide text-center">
                        BDS SCHOOL OF LAW
                    </h1>
                </div>

                {/* Hamburger - mobile & tablet */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-wrap justify-center gap-12 py-4 text-[#920C24] font-semibold text-base">
                <li className="hover:text-[#2B2E4A] cursor-pointer relative group"><Link to="/">ABOUT US</Link></li>

                {/* Courses Dropdown */}
                <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
                    COURSES
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Ballb">BALLB</Link></li>
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Llb">LLB</Link></li>
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Llm">LLM</Link></li>
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/CyberLaw">Diploma in Cyber Law</Link></li>
                    </ul>
                </li>

                {/* Registration Dropdown */}
                <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
                    REGISTRATION
                    <ul className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Registration">BDS School of Law Registration</Link></li>
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">University Registration</li>
                    </ul>
                </li>

                <li className="hover:text-[#2B2E4A] cursor-pointer"><Link to="/CampusLife">CAMPUS</Link></li>
                <li className="hover:text-[#2B2E4A] cursor-pointer"><Link to="/LawyeringSkills">LAWYERING SKILLS</Link></li>
                <li className="hover:text-[#2B2E4A] cursor-pointer"><Link to="/TopFaculty">TOP FACULTY</Link></li>
                <li className="hover:text-[#2B2E4A] cursor-pointer"><Link to="/news-events">NEWS & EVENTS</Link></li>

                {/* Research Dropdown */}
                <li className="hover:text-[#2B2E4A] cursor-pointer relative group">
                    RESEARCH
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Publication">Publications</Link></li>
                        <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer"><Link to="/Publication">Journals</Link></li>
                    </ul>
                </li>
                <li className="hover:text-[#2B2E4A] cursor-pointer relative group"><Link to="/Contact-us">CONTACT US</Link></li>
            </ul>

            {/* Mobile / Tablet Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-white shadow-lg flex flex-col gap-1 py-4 text-[#920C24] font-semibold text-lg px-4">
                    <li className="py-2 border-b cursor-pointer">ABOUT US</li>

                    {/* Courses */}
                    <li className="py-2 border-b cursor-pointer">
                        <div onClick={() => toggleDropdown("courses")} className="flex justify-between items-center">
                            COURSES
                            <span>{dropdowns.courses ? "▲" : "▼"}</span>
                        </div>
                        {dropdowns.courses && (
                            <ul className="pl-4 mt-1 flex flex-col gap-1">
                                <li>BALLB</li>
                                <li>LLB</li>
                                <li>LLM</li>
                                <li>Diploma in Cyber Law</li>
                            </ul>
                        )}
                    </li>

                    {/* Registration */}
                    <li className="py-2 border-b cursor-pointer">
                        <div onClick={() => toggleDropdown("registration")} className="flex justify-between items-center">
                            REGISTRATION
                            <span>{dropdowns.registration ? "▲" : "▼"}</span>
                        </div>
                        {dropdowns.registration && (
                            <ul className="pl-4 mt-1 flex flex-col gap-1">
                                <li>BDS School of Law Registration</li>
                                <li>University Registration</li>
                            </ul>
                        )}
                    </li>

                    <li className="py-2 border-b cursor-pointer">CAMPUS</li>
                    <li className="py-2 border-b cursor-pointer">LOWERING SKILLS</li>
                    <li className="py-2 border-b cursor-pointer">TOP FACULTY</li>
                    <li className="py-2 border-b cursor-pointer">NEWS & EVENTS</li>

                    {/* Research */}
                    <li className="py-2 border-b cursor-pointer">
                        <div onClick={() => toggleDropdown("research")} className="flex justify-between items-center">
                            RESEARCH
                            <span>{dropdowns.research ? "▲" : "▼"}</span>
                        </div>
                        {dropdowns.research && (
                            <ul className="pl-4 mt-1 flex flex-col gap-1">
                                <li>Publications</li>
                                <li>Journals</li>
                                <li>Centres</li>
                            </ul>
                        )}
                    </li>
                    <li className="py-2 border-b cursor-pointer"><Link to="/contact-us">CONTACT US</Link></li>
                </ul>
            )}
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
