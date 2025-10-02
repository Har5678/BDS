import React from 'react';
import defaultImg from '../assets/campus.png';

const AboutUsBanner = () => {
  return (
    <>
      <div className="bg-white py-12 px-6 sm:px-12 flex flex-col md:flex-row items-center gap-8">

        {/* Left Side - Text */}
        <div className="w-full md:w-3/4 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#920C24] mb-6">
            BDS School of Law
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Founded in 2003 in Meerut, BDS School of Law (BDSSL) has evolved into a premier centre for legal education. Affiliated with Chaudhary Charan Singh University and approved by the Bar Council of India, BDSSL nurtures future-ready legal professionals.
          </p>

          <p className="text-[#920C24] font-bold text-base sm:text-lg mb-4">
            Key highlights of BDSSL:
          </p>

          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-2">
            <li>Comprehensive programs: B.A. LL.B. (5 Years), LL.B. (3 Years), LL.M. (2 Years), Diploma in Cyber Law (1 Year)</li>
            <li>Experienced faculty mentoring students through lectures, discussions, and public speaking</li>
            <li>State-of-the-art campus with Moot Court Hall, Legal Aid Clinic, and Library</li>
            <li>Active Internship & Placement Cell collaborating with law firms and corporate houses</li>
            <li>Dynamic co-curricular culture: debates, legal aid camps, competitions, cultural & sports events</li>
            <li>Focus on ethics, discipline, and professional integrity to produce globally competitive lawyers</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <img
            src={defaultImg}
            alt="About BDS School of Law"
            className="w-full max-w-sm h-100 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Global styles: using standard <style> so this works with Vite + React (not Next.js's styled-jsx) */}
      <style>{`
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

export default AboutUsBanner;
