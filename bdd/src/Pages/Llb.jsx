import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import assets from "../assets/Assets";

const Llb = () => {
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
      <div className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={assets.llb}
          alt="Campus Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.log('Image failed to load:', e)}
          onLoad={() => console.log('Image loaded successfully')}
        />
        <div className="absolute inset-0 "></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 z-10">
          Bachelor of Laws (LL.B.)
        </h1>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-12 py-10">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden mb-4 flex justify-start items-center relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-md"
          >
            <MoreVertical className="w-5 h-5 text-[#920C24]" />
            <span className="font-medium text-gray-700">Courses</span>
          </button>
          {menuOpen && (
            <div className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
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

        {/* Sidebar */}
        <div className="hidden md:block md:w-1/5">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
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
        </div>

        {/* Content Area */}
        <div className="flex-1 md:w-4/5 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-justify">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#920C24]">About the Program</h2>
          <p>
            The Bachelor of Laws (LL.B.) is a three-year professional degree designed for 
            graduates from any academic discipline who aspire to build a career in law. 
            This program provides a focused and intensive study of core legal principles, 
            statutes, and jurisprudence. It is the perfect pathway for those who have already 
            completed their undergraduate studies and are now seeking a direct and comprehensive 
            route to becoming a legal professional. The curriculum is meticulously crafted to 
            prepare you for the intellectual and practical demands of the legal world, 
            transforming you into a competent and ethical advocate.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#920C24]">Eligibility & Course Duration</h2>
          <p><strong>Eligibility:</strong> To be eligible for this program, you must hold a Bachelor's degree in any discipline from a recognized university.</p>
          <p><strong>Course Duration:</strong> This is a full-time, three-year program, structured to provide an in-depth and accelerated learning experience.</p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#920C24]">Why Pursue LL.B. at BDS School of Law?</h2>
          <p>
            At BDS, we believe in a hands-on approach to legal education that goes beyond mere academic theory. 
            Our LL.B. program offers a unique and highly professional learning environment that will set you up for success.
          </p>
          <ul className="list-disc pl-6 space-y-1 md:space-y-2">
            <li><strong>Professional Foundation:</strong> A direct and robust pathway to a legal career with practical skills for courtroom, corporate settings, and civil services.</li>
            <li><strong>State-of-the-Art Facilities:</strong> Access to a fully equipped Moot Court Hall, resourceful library, and Legal Aid Clinic for real-world exposure.</li>
            <li><strong>Dedicated Mentorship & Expert Faculty:</strong> Learn from experienced practitioners and scholars who bring real-world expertise into classrooms.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#920C24]">Student Life & Extra Curricular</h2>
          <p>
            Your time at BDS is about more than just academics. We foster a competitive yet collaborative environment 
            through activities like debates, legal drafting workshops, youth parliament sessions, and moot court competitions.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#920C24]">Career Pathways in Law</h2>
          <ul className="list-disc pl-6 space-y-1 md:space-y-2">
            <li><strong>Judicial Services:</strong> Build a career as a judge in lower courts, requiring deep knowledge of law and society.</li>
            <li><strong>Legal Practice:</strong> Become a practicing lawyer in district courts, High Courts, or the Supreme Court of India, specializing in various legal domains.</li>
            <li><strong>Corporate Sector:</strong> Work as a legal advisor, compliance officer, or in-house counsel for corporations or MNCs.</li>
            <li><strong>Public Sector & Government Roles:</strong> Serve in ministries, tribunals, and public legal services shaping policy and ensuring compliance.</li>
            <li><strong>Higher Education & Research:</strong> Pursue LL.M., Ph.D., or diplomas to enter academia and policy research.</li>
            <li><strong>Legal Journalism & Media:</strong> Become a legal journalist, editor, or analyst covering judgments and legal developments.</li>
            <li><strong>Social Work & Legal Aid:</strong> Work with NGOs, human rights groups, and legal aid cells on social justice causes.</li>
            <li><strong>Arbitration & ADR:</strong> Specialize in arbitration, mediation, and conciliation for dispute resolution.</li>
            <li><strong>Compliance, Risk & Policy Advisory:</strong> Roles in compliance, risk, and policy advisory across industries.</li>
            <li><strong>International Organizations & Diplomacy:</strong> Opportunities at UN, WTO, World Bank, and embassies in global law and policy.</li>
            <li><strong>Entrepreneurship & Legal Tech:</strong> Start your own firm or legal-tech startup leveraging innovation in legal services.</li>
          </ul>

          <div className="mt-6">
            <Link
              to="/Registration"
              className="inline-block px-6 py-3 bg-[#920C24] text-white rounded-lg shadow-md hover:bg-[#7a0a1d] transition-all duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        * { font-family: 'EB Garamond', serif !important; }
        h1, h2, h3, h4, h5, h6, li, p, a { font-family: 'Bookman Old Style', serif !important; }
      `}</style>
    </div>
  );
};

export default Llb;