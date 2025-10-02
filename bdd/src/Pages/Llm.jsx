import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import assets from "../assets/Assets";

const Llm = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const courses = [
    { id: "ballb", label: "B.A. LL.B. (Hons.)", path: "/ballb" },
    { id: "llb", label: "LL.B. (Hons.)", path: "/llb" },
    { id: "llm", label: "LL.M.", path: "/llm" },
    { id: "cyberlaw", label: "Diploma in Cyber Law", path: "/cyberlaw" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.Llm})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Master of Laws (LL.M.)
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
          <h2 className="text-2xl font-semibold text-[#920C24]">About the Program</h2>
          <p>
            The Master of Laws (LL.M.) is a prestigious two-year postgraduate
            program designed for legal professionals and graduates seeking
            advanced specialization in a specific field of law. This program
            emphasizes critical analysis, advanced research, and mastery of
            chosen areas of legal scholarship.
          </p>
          <p>
            At BDS, the LL.M. is more than just a degree—it is a pathway to
            becoming a thought leader in law, equipping you for careers in
            academia, research, corporate law, or international organizations.
          </p>

          <h2 className="text-2xl font-semibold text-[#920C24]">Eligibility & Course Duration</h2>
          <p><strong>Eligibility:</strong> You must hold an LL.B. degree from a recognized university.</p>
          <p><strong>Course Duration:</strong> Full-time 2-year program spread across 4 semesters.</p>

          <h2 className="text-2xl font-semibold text-[#920C24]">Why Pursue LL.M. at BDS School of Law?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Advanced specialization in Corporate, Constitutional, or Human Rights Law.</li>
            <li>Strong emphasis on high-quality research, dissertation, and legal scholarship.</li>
            <li>Close mentorship from expert faculty with industry and academic experience.</li>
            <li>Access to international conferences, seminars, and exchange programs.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">Life Beyond Classrooms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research forums and academic workshops</li>
            <li>Mentoring opportunities for undergraduate students</li>
            <li>Participation in legal aid & social outreach programs</li>
            <li>International moot courts & debate competitions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">Career Pathways</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legal Academia: Lecturer, Professor, or Research Scholar</li>
            <li>Specialized Legal Practice in corporate, IP, or constitutional law</li>
            <li>Corporate Counsel or Senior Legal Advisor</li>
            <li>Policy and Research roles in think tanks or NGOs</li>
            <li>Opportunities in International Organizations & Diplomacy</li>
            <li>Legal-Tech startups & Entrepreneurship</li>
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
  );
};

export default Llm;
