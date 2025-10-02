import React, { useState, useEffect, useRef } from "react";

const cardsData = [
  { title: "Designers", desc: "Tools that work like you do.", bg: "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=600&h=800&fit=crop" },
  { title: "Marketers", desc: "Create faster, explore new possibilities.", bg: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop" },
  { title: "VFX filmmakers", desc: "From concept to cut, faster.", bg: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&h=800&fit=crop" },
  { title: "Content creators", desc: "Make scroll-stopping content, easily.", bg: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=800&fit=crop" },
  { title: "Art directors", desc: "Creative control at every stage.", bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop" },
  { title: "Another", desc: "Some description here.", bg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" },
];

const NewsAndGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const newsEvents = [
    {
      type: "NEWS",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      title: "Meet Our Department of Revenue Chair Professor",
      subtitle: "Dr. Nigam Nuggehalli"
    },
    {
      type: "EVENT",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      title: "Workshop on Generative AI and Consumer Law Project: Enhancing Consumer Grievance Redressal Mechanisms",
      date: "Sep 29, 2025"
    },
    {
      type: "NEWS",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      title: "'Indirect Discrimination After Nitisha: Where Do We Stand'",
      subtitle: "An Interactive Workshop by Jai Brunner"
    },
    {
      type: "EVENT",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
      title: "Legal Research Methodology Workshop",
      date: "Oct 5, 2025"
    },
    {
      type: "NEWS",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      title: "International Moot Court Competition Winners Announced",
      subtitle: "Congratulations to Team BDSSL"
    },
    {
      type: "EVENT",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      title: "Guest Lecture on Constitutional Law Developments",
      date: "Oct 12, 2025"
    }
  ];

  const isMobile = () => window.innerWidth <= 767;

  const centerCard = (i) => {
    if (i === null) return;
    const track = trackRef.current;
    if (!track || !track.children[i]) return;
    const card = track.children[i];
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;

    track.scrollTo({
      [axis]: start - (track[size] / 2 - card[size] / 2),
      behavior: "smooth",
    });
  };

  const activateCard = (i) => {
    setActiveIndex(i);
    centerCard(i);
  };

  const go = (step) => {
    const nextIndex = Math.min(Math.max(activeIndex + step, 0), cardsData.length - 1);
    activateCard(nextIndex);
  };

  useEffect(() => {
    centerCard(0);
  }, []);

  useEffect(() => {
    const handleResize = () => centerCard(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFBD6' }}>
      {/* News and Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 
            className="text-center text-4xl md:text-5xl font-bold mb-12"
            style={{ color: '#920C24' }}
          >
            News and Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span
                      className="text-sm font-semibold tracking-wider"
                      style={{ color: '#920C24' }}
                    >
                      {card.type}
                    </span>
                    <div 
                      className="ml-2 w-12 h-0.5" 
                      style={{ backgroundColor: '#920C24' }}
                    ></div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: '#920C24' }}
                  >
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-gray-700 text-base">
                      {card.subtitle}
                    </p>
                  )}
                  {card.date && (
                    <p className="text-gray-600 text-base mt-2">
                      {card.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl lg:text-4xl font-medium" style={{ color: '#920C24' }}>
              Gallery
            </h2>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 bg-gray-200 rounded-full text-gray-800 text-2xl flex items-center justify-center disabled:opacity-30 hover:bg-[#920C24] hover:text-white transition"
                onClick={() => go(-1)}
                disabled={activeIndex === 0}
              >
                ‹
              </button>
              <button
                className="w-10 h-10 bg-gray-200 rounded-full text-gray-800 text-2xl flex items-center justify-center disabled:opacity-30 hover:bg-[#920C24] hover:text-white transition"
                onClick={() => go(1)}
                disabled={activeIndex === cardsData.length - 1}
              >
                ›
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            {/* Left Arrow Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 rounded-full text-gray-800 text-3xl flex items-center justify-center disabled:opacity-30 hover:bg-[#920C24] hover:text-white transition shadow-lg"
              onClick={() => go(-1)}
              disabled={activeIndex === 0}
            >
              ‹
            </button>

            {/* Right Arrow Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 rounded-full text-gray-800 text-3xl flex items-center justify-center disabled:opacity-30 hover:bg-[#920C24] hover:text-white transition shadow-lg"
              onClick={() => go(1)}
              disabled={activeIndex === cardsData.length - 1}
            >
              ›
            </button>

            <div
              ref={trackRef}
              className="flex gap-5 items-start justify-center transition-[scroll] duration-500"
            >
              {cardsData.map((card, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className={`relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500
                      ${isActive ? "flex-[0_0_25rem] translate-y-[-6px] shadow-md h-[26rem]" : "flex-[0_0_5rem] h-[26rem]"}
                    `}
                    onMouseEnter={() => !isMobile() && activateCard(i)}
                    onMouseLeave={() => !isMobile() && setActiveIndex(activeIndex)}
                    onClick={() => isMobile() && activateCard(i)}
                  >
                    <img
                      src={card.bg}
                      alt={card.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500
                        ${isActive ? "scale-102 brightness-90 saturate-100" : "scale-100 brightness-75 saturate-75"}
                      `}
                    />
                    <div
                      className={`absolute inset-0 flex flex-col justify-center items-center gap-2 p-0 bg-gradient-to-b from-transparent to-black/20 z-10
                        ${isActive ? "p-4" : "flex-col"}
                      `}
                    >
                      <h3
                        className={`text-white font-bold text-center transition-all duration-500 ${
                          isActive 
                            ? "text-lg lg:text-xl" 
                            : "text-sm lg:text-base"
                        }`}
                        style={{
                          writingMode: isActive ? "horizontal-tb" : "vertical-rl",
                          textOrientation: isActive ? "mixed" : "mixed",
                          transform: isActive ? "none" : "rotate(-180deg) : speed(0.2s)",
                        }}
                      >
                        {card.title}
                      </h3>
                      {isActive && (
                        <p className="text-white text-sm lg:text-base text-center mt-2">
                          {card.desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {cardsData.map((_, i) => (
              <button
                key={i}
                onClick={() => activateCard(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-10 h-3 bg-[#920C24]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Font Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        body, * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6, p, div, span, li, a, section {
          font-family: 'Bookman Old Style', serif !important;
        }
      `}</style>
    </div>
  );
};

export default NewsAndGallery;