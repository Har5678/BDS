import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import assets from '../assets/Assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#920c24] text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Left: Logo */}
        <div className="flex flex-col items-center px-5 item-size-auto">
          {/* Added BDS School of Law text */}
          <img src={assets.Logo1} alt="BDS School of Law" className="h-35" />
          <h2 className="mt-4 text-2xl font-bold text-center">BDS School of Law</h2>
        </div>

        {/* Policies */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h4 className="font-semibold mb-3 text-lg">Policies</h4>
          <Link to="/privacy-policy" className="hover:underline text-base">
            Privacy Policy
          </Link>
          <Link to="/Terms-conditions" className="hover:underline text-base">
            Terms & Conditions
          </Link>
        </div>

        {/* Navbar Menu divided into two sections with headings */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold mb-3 text-lg">Main Menu</h4>
            <a href="#" className="hover:underline text-base">
              About Us
            </a>
            <a href="#" className="hover:underline text-base">
              Enquire Now
            </a>
            <a href="#" className="hover:underline text-base">
              Contact Us
            </a>
            <a href="#" className="hover:underline text-base">
              Campus
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold mb-3 text-lg">Explore</h4>
            <a href="#" className="hover:underline text-base">
              Learning Skills
            </a>
            <a href="#" className="hover:underline text-base">
              Top Faculty
            </a>
            <a href="#" className="hover:underline text-base">
              News & Events
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-semibold mb-3 text-lg">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-200 transition-colors text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-5 text-center text-base opacity-80">
        © {new Date().getFullYear()} BDS School of Law. All rights reserved. |
        Built by Owl Media House
      </div>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');

          * {
            font-family: 'EB Garamond', serif !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6, li, p, a{
            font-family: 'Bookman Old Style', serif !important;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
