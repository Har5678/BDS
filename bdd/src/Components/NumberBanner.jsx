import React, { useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    let duration = 2000; // 2s
    let incrementTime = 20; // ms
    let step = (end - start) / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {target.toString().includes(".")
        ? count.toFixed(2)
        : Math.floor(count)}
      {suffix}
    </span>
  );
};

const NumberBanner = () => {
  return (
    <>
      <div className="bg-[#faf6f2] py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-14 text-red-800">
          BDS School of Law Highlights
        </h2>

        {/* Flex with separators */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex-1 px-6 py-4">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-700">
              <Counter target={92} suffix="%" />
            </div>
            <p className="mt-4 text-lg sm:text-xl font-medium text-gray-700">
              Employed 10 months after graduation
            </p>
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px bg-red-300 mx-6"></div>

          {/* Separator */}
          <div className="hidden lg:block w-px bg-red-300 mx-6"></div>

          {/* Card 3 */}
          <div className="flex-1 px-6 py-4">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-700">
              <Counter target={99.9} suffix="%" />
            </div>
            <p className="mt-4 text-lg sm:text-xl font-medium text-gray-700">
              Bar pass rate
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-14 text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
          As a BDS School of Law student, you’ll stand out in the employment
          marketplace and benefit from one of the best career placement
          rates in the country.
        </p>
      </div>

      {/* Inserted styled-jsx block as requested. Note: styled-jsx is Next.js-specific; in Vite/CRA this will render but not provide scoping. */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6, li, p {
          font-family: 'Bookman Old Style', serif !important;
        }
          `}</style>
    </>
  );
};

export default NumberBanner;
