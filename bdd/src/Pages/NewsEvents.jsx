import React, { useState, useEffect } from "react";
import assets from "../assets/Assets";

const cardsData = Array.from({ length: 55 }, (_, i) => {
  const index = i + 1;
  if (index === 28) return null;
  const imageKey = `gallery${index}`;
  return assets[imageKey] ? { bg: assets[imageKey], id: index } : null;
}).filter(Boolean);

const NewsAndGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const newsEvents = [
    {
      type: "EVENT",
      image: assets.diwalifest,
      title: "Diwali Fest: Festive Flair",
      date: "14 and 15 October",
    },
    {
      type: "WORKSHOP",
      image: assets.mootcourtworkshop,
      title: "Moot Court Workshop (Hybrid Mode)",
      date: "11 October",
    },
    {
      type: "WORKSHOP",
      image: assets.researchpaper,
      title: "Research Paper Presentation: Under Shodh Sarthi",
      date: "13 October",
    },
    {
      type: "EVENT",
      image: assets.legacyleague,
      title: "Legacy League 2.0",
      date: "28 October",
    },
    {
      type: "EVENT",
      image: assets.madanmohan,
      title: "Madan Mohan Malviya Memorial Moot Court",
      date: "10 November",
    },
    {
      type: "PROGRAM",
      image: assets.legalaid,
      title: "Legal Aid Camp",
      date: "15 November",
    },
  ];

  // Different heights for visual variety
  const getImageHeight = (index) => {
    const heights = ["h-48", "h-56", "h-64", "h-72", "h-80"];
    return heights[index % heights.length];
  };

  const handleImageClick = (i) => {
    if (!isMobile) return;
    setHoveredIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFBD6" }}>
      {/* News Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2
            className="text-center text-4xl md:text-5xl font-bold mb-12"
            style={{ color: "#920C24" }}
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
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span
                      className="text-sm font-semibold tracking-wider"
                      style={{ color: "#920C24" }}
                    >
                      {card.type}
                    </span>
                    <div
                      className="ml-2 w-12 h-0.5"
                      style={{ backgroundColor: "#920C24" }}
                    ></div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 leading-tight"
                    style={{ color: "#920C24" }}
                  >
                    {card.title}
                  </h3>
                  {card.date && (
                    <p className="text-gray-600 text-base mt-2">{card.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2
            className="text-2xl lg:text-4xl font-medium mb-8 text-center"
            style={{ color: "#920C24" }}
          >
            Gallery
          </h2>

          <div className="masonry-grid">
            {cardsData.map((card, i) => (
              <div
                key={i}
                className={`masonry-item ${getImageHeight(
                  i
                )} cursor-pointer transition-all duration-500 ease-out`}
                style={{
                  transform:
                    hoveredIndex === i
                      ? "translateY(-30px) scale(1.8)"
                      : "translateY(0) scale(1)",
                  zIndex: hoveredIndex === i ? 50 : 1,
                  boxShadow:
                    hoveredIndex === i
                      ? "0 40px 80px rgba(146, 12, 36, 0.4)"
                      : "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleImageClick(i)}
              >
                <img
                  src={card.bg}
                  alt={`Gallery image ${card.id}`}
                  className="w-full h-full object-cover transition-all duration-500 rounded-md"
                  style={{
                    filter:
                      hoveredIndex === i
                        ? "brightness(1.1) contrast(1.05) saturate(1.1)"
                        : "brightness(1) contrast(1) saturate(1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');

        body, * {
          font-family: 'EB Garamond', serif !important;
        }

        .masonry-grid {
          column-count: 2;
          column-gap: 1rem;
        }

        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 3;
          }
        }

        @media (min-width: 768px) {
          .masonry-grid {
            column-count: 4;
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 5;
          }
        }

        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 6;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          border-radius: 0.5rem;
          background: white;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .masonry-item:hover {
          overflow: visible; /* Prevent cut when zooming */
        }

        .masonry-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .masonry-item:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default NewsAndGallery;
