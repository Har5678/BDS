import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import assets from "../assets/Assets";

const CyberLaw = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const courses = [
    { id: "ballb", label: "B.A. LL.B. (Hons.)", path: "/ballb" },
    { id: "llb", label: "LL.B. (Hons.)", path: "/llb" },
    { id: "llm", label: "LL.M.", path: "/llm" },
    { id: "cyberlaw", label: "Diploma in Cyber Law", path: "/cyberlaw" },
  ];

  return (
    <>
      <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.CyberLaw})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Diploma in Cyber Law
        </h1>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-12 py-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/5">
          {/* Desktop Sidebar */}
          <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-bold px-6 py-4 text-[#920C24] border-b border-gray-200">
              Explore Courses
            </h3>
            <ul className="divide-y divide-gray-200">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={course.path}
                    className={`flex items-center px-6 py-3 font-medium transition-all duration-300 relative ${
                      location.pathname === course.path
                        ? "text-[#920C24] bg-[#920C24]/5 border-l-4 border-[#920C24]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Sidebar */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-md"
            >
              <MoreVertical className="w-5 h-5 text-[#920C24]" />
              <span className="font-medium text-gray-700">Courses</span>
            </button>
            {menuOpen && (
              <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                <ul className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <li key={course.id}>
                      <Link
                        to={course.path}
                        className={`block px-4 py-3 font-medium ${
                          location.pathname === course.path
                            ? "text-[#920C24] bg-[#920C24]/5"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {course.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 md:w-4/5 bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6 text-gray-700 leading-relaxed text-justify">
          <h2 className="text-2xl font-semibold text-[#920C24]">
            About the Program
          </h2>
          <p>
            In today’s digital era, the demand for professionals who understand
            the legal aspects of technology has never been greater. The Diploma
            in Cyber Law at BDS School of Law is a one-year specialized program
            blending law with technology. It provides expertise in areas like
            data protection, cyber security, digital forensics, e-commerce, and
            intellectual property rights in the digital space.
          </p>
          <p>
            This program is ideal for students, IT professionals, and working
            executives aiming to develop niche skills that are critical in a
            fast-changing digital economy.
          </p>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Eligibility & Course Duration
          </h2>
          <p>
            <strong>Eligibility:</strong> Graduation in any stream from a
            recognized university.
          </p>
          <p>
            <strong>Course Duration:</strong> 1-year program divided into 2
            semesters.
          </p>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Why Pursue Cyber Law at BDS?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              High industry relevance—learn laws shaping data privacy,
              cybercrime, and digital contracts.
            </li>
            <li>
              Hands-on learning through real-world case studies and exposure to
              the latest cyber law challenges.
            </li>
            <li>
              Immediate career value for both law graduates and IT
              professionals.
            </li>
            <li>
              Access to workshops on cyber forensics, blockchain regulations,
              and AI ethics.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Life Beyond Classrooms
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Tech-driven seminars and expert talks on evolving digital
              policies.
            </li>
            <li>
              Workshops on digital forensics, hacking ethics, and cyber
              investigation.
            </li>
            <li>Student-led research in cyber policy and IT law.</li>
            <li>
              Collaborative activities with IT firms and legal tech startups.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Career Pathways
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cyber Law Consultant:</strong> Guide organizations on IT
              regulations and compliance.
            </li>
            <li>
              <strong>Data Privacy Officer:</strong> Ensure compliance with
              global and national data protection laws.
            </li>
            <li>
              <strong>Cybercrime Investigator:</strong> Assist law enforcement
              or corporates in investigating online crimes.
            </li>
            <li>
              <strong>Legal Advisor:</strong> Counsel IT companies and startups
              on digital contracts and policies.
            </li>
            <li>
              <strong>Policy & Governance Roles:</strong> Work with governments
              or NGOs shaping cyber regulations.
            </li>
          </ul>

          <div className="mt-6">
            <Link
              to="/register"
              className="inline-block px-6 py-3 bg-[#920C24] text-white rounded-lg shadow-md hover:bg-[#7a0a1d] transition-all duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
            </div>

            <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');

        * {
          font-family: 'EB Garamond', serif !important;
        }

        h1, h2, h3, h4, h5, h6, li, p, a {
          font-family: 'Bookman Old Style', serif !important;
        }
          `}
            </style>
      </div>  
      </>
        );
      };

      export default CyberLaw;
