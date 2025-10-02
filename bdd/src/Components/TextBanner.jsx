import React, { useState, useEffect } from "react";

const quotes = [
  "Education is the most powerful weapon which you can use to change the world.",
  "The beautiful thing about learning is that nobody can take it away from you.",
  "Knowledge is power. Information is liberating. Education is the premise of progress."
];

const TextBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#920C24] text-white flex justify-center items-center 
                      h-[40vh] sm:h-[50vh] md:h-[70vh] px-4 text-center">
        <h2 className="quote-text text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold italic max-w-4xl leading-snug sm:leading-relaxed md:leading-snug">
          {quotes[current]}
        </h2>
      </div>

      {/* Inserted styled-jsx block as requested. Note: styled-jsx is Next.js-specific; in Vite/CRA this will render but not provide scoping. */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bookman Old Style', serif !important;
        }

        /* Style the quote text explicitly */
        .quote-text {
          font-family: 'Bookman Old Style', serif !important;
          position: relative;
          display: inline-block;
        }

        .quote-text::before {
          content: '“';
          margin-right: 0.25rem;
          font-size: 1.1em;
          vertical-align: baseline;
        }

        .quote-text::after {
          content: '”';
          margin-left: 0.25rem;
          font-size: 1.1em;
          vertical-align: baseline;
        }
          `}</style>
    </>
  );
};

export default TextBanner;
