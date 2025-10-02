import React from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/Assets";

const Ballb = () => {
  const location = useLocation();

  const courses = [
    { id: "ballb", label: "B.A. LL.B. (Hons.)", path: "/ballb" },
    { id: "llb", label: "LL.B. (Hons.)", path: "/llb" },
    { id: "llm", label: "LL.M.", path: "/llm" },
    { id: "cyberlaw", label: "Diploma in Cyber Law", path: "/cyberlaw" },
  ];

  const RegisterButton = () => (
    <div className="mt-6">
      <Link to="/Registration"
        className="inline-block bg-[#920C24] hover:bg-[#7a0a1d] text-white font-semibold px-6 py-3 rounded-lg ml-90 shadow-md transition-all duration-300"
      >
        Register Now
      </Link>
    </div>
  );

  return (
    <>
      <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] md:h-[50vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.Ballb})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Bachelor of Arts & Laws (B.A. LL.B.)
        </h1>
      </div>

      {/* Main Section with Sidebar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-12 py-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/5">
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
        <div className="flex-1 md:w-4/5 bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6 text-gray-700 leading-relaxed text-justify">
          <h2 className="text-2xl font-semibold text-[#920C24]">
            About the Program
          </h2>
          <p>
            The B.A. LL.B. is an integrated five-year undergraduate program designed
            for ambitious students eager to explore the dynamic world of law. This
            course uniquely blends Social Sciences, Humanities, and Core Legal Studies,
            giving you a holistic view of society, governance, and the justice system.
          </p>
          <p>
            Over the span of ten semesters, you will gain theoretical knowledge alongside
            practical training through Moot Courts, Legal Aid Clinics, and real-world
            case studies — preparing you not only for the courtroom but also for leadership
            roles in policy, corporate, and international law.
          </p>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Eligibility & Course Duration
          </h2>
          <p><strong>Eligibility:</strong> Completion of 10+2 or equivalent examination from a recognized board with a minimum aggregate of 50% marks.</p>
          <p><strong>Course Duration:</strong> Full-time integrated <strong>5-year program</strong> structured across <strong>10 semesters</strong>.</p>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Why Choose B.A. LL.B. at BDS School of Law?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integrated & multidisciplinary curriculum</li>
            <li>Expert faculty & personalized mentorship</li>
            <li>Practical training via Moot Court & Legal Aid</li>
            <li>International exposure through exchange programs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Life Beyond Classrooms
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Debates & Youth Parliament sessions</li>
            <li>Legal Drafting & Research Workshops</li>
            <li>Crime Scene Investigation competitions</li>
            <li>Community Outreach & Legal Aid Programs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#920C24]">
            Career Pathways
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Judicial Services (judge/magistrate exams)</li>
            <li>Litigation & Advocacy (District to Supreme Court)</li>
            <li>Corporate Counsel in MNCs & law firms</li>
            <li>Government roles in ministries & tribunals</li>
            <li>Academia & Research (LL.M., Ph.D.)</li>
            <li>Entrepreneurship & Legal-Tech startups</li>
          </ul>

          <RegisterButton />
        </div>
      </div>
    </div>
      
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

export default Ballb;
