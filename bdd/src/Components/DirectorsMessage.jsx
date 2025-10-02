import React from 'react';
import assets from '../assets/Assets';

const DirectorsMessage = () => {
  return (
    <section className="bg-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
        
        {/* Left: Message */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#920C24] mb-4">
            Message from the Principal
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Dr. Manoj Sharma (Principal)
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Welcome to BDS School of Law! Our mission is to nurture ethical and skilled legal 
            professionals through a holistic learning environment that blends rigorous academic 
            training with practical experience. We strive to empower every student to achieve their 
            full potential and contribute meaningfully to society.
          </p>
        </div>

        {/* Right: Full Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={assets.messagefull}
            alt="Dr. Manoj Sharma"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
          />
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
    </section>
  );
};

export default DirectorsMessage;
