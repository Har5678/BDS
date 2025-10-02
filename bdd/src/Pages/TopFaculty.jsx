import React, { useState } from 'react';
import assets from '../assets/Assets';

const TopFaculty = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Placeholder images - Replace these URLs with your actual faculty images
  const facultyData = [
    {
      id: 'intro',
      title: 'Top Faculty',
      isIntro: true,
      content: `At BDS School of Law, our distinguished faculty stands as the cornerstone of academic excellence and professional mentorship. Our esteemed professors bring together decades of combined experience in legal practice, judicial service, and academic scholarship. Each member of our faculty is carefully selected for their expertise, dedication to teaching, and commitment to shaping the next generation of legal professionals. They serve not just as educators, but as mentors, guides, and inspirations for our students' journey into the legal profession.`
    },
    {
      id: 'faculty-1',
      name: 'Dr. Manoj Sharma',
      position: 'Principal',
      email: 'principal.law@bdssl.edu.in',
      image: assets.ManojSir
    },
    {
      id: 'faculty-2',
      name: 'Vivek Singhal',
      position: 'H.O.D, Asst. Professor',
      email: 'vivek.singhal@bdssl.edu.in',
      image: assets.Vivek
    },
    {
      id: 'faculty-3',
      name: 'Dr. Saurabh Sri Mala',
      position: 'Asst. Professor',
      email: 'Saurabh.mala@bdssl.edu.in',
      image: assets.Saurabh
    },
    {
      id: 'faculty-4',
      name: 'Kshama Sharma',
      position: 'Asst. Professor',
      email: 'Kshama.sharma@bdssl.edu.in',
      image: assets.Kshama
    },
    {
      id: 'faculty-5',
      name: 'Divya Jain',
      position: 'Asst. Professor',
      email: 'divya.jain@bdssl.edu.in',
      image: assets.Divya1
    },
    {
      id: 'faculty-6',
      name: 'Vasvi Bishnoi',
      position: 'Asst. Professor',
      email: 'Vasvi.Bishnoi@bdssl.edu.in',
      image: assets.Vasvi
    },
    {
      id: 'faculty-7',
      name: 'Sakshi Yadav',
      position: 'Asst. Professor',
      email: 'sakshi.yadav@bdssl.edu.in',
      image: assets.Sakahi
    },
    {
      id: 'faculty-8',
      name: 'Prerna Malik',
      position: 'Asst. Professor',
      email: 'prerna.malik@bdssl.edu.in',
      image: assets.Prerna
    }
  ];

  const introData = facultyData[0];
  const facultyMembers = facultyData.slice(1);

  // Create rows: 2 cards, then 3 cards, then 3 cards
  const facultyRows = [
    facultyMembers.slice(0, 2),
    facultyMembers.slice(2, 5),
    facultyMembers.slice(5, 8)
  ];

  return (
      
    <div className="min-h-screen" style={{ backgroundColor: '#FFFBD6' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Introduction Section */}
        <section className="mb-20">
          <div className="text-center">
            <h2 
              className="text-6xl lg:text-7xl mb-8 font-bold leading-tight"
              style={{ 
                fontFamily: 'Bookman Old Style, serif',
                color: '#920C24'
              }}
            >
              {introData.title}
            </h2>

            <div className="w-25 mx-auto h-1 mb-8 rounded-full" style={{ backgroundColor: '#920C24' }}></div>

            <div 
              className="text-lg lg:text-xl leading-relaxed max-w-7xl mx-auto"
              style={{ fontFamily: 'Garamond, serif', color: '#2D3748' }}
            >
              <p>{introData.content}</p>
            </div>
          </div>
        </section>

        {/* Faculty Cards Grid */}
        <section className="bg-white max-w-10xl shadow-lg px-20 py-20">
          <div className="space-y-12">
            {facultyRows.map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className={`flex justify-center gap-8 flex-wrap`}
              >
                {row.map((faculty) => (
                  <div
                    key={faculty.id}
                    className="faculty-card"
                    onMouseEnter={() => setHoveredCard(faculty.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="card-container"
                      style={{
                        width: '300px',
                        height: '420px',
                      }}
                    >
                      {/* Faculty Image */}
                      <div className="image-container">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="faculty-image"
                        />
                        <div className="image-overlay"></div>
                      </div>

                      {/* Faculty Details - Transparent background */}
                      <div className="details-container">
                        <div className="details-content">
                          <h3 className="faculty-name">
                            {faculty.name}
                          </h3>

                          <p className="faculty-position">
                            {faculty.position}
                          </p>

                          <div className="divider"></div>

                          {/* Email - Shows on hover */}
                          <div className="email-container">
                            <p className="faculty-email">
                              {faculty.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Decorative border effect on hover */}
                      <div className={`border-glow ${hoveredCard === faculty.id ? 'active' : ''}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
        
        * {
          font-family: 'EB Garamond', serif !important;
        }
        
        h1, h2, h3, h4, h5, h6, li, p, a, span, div, section {
          font-family: 'Bookman Old Style', serif !important;
        }

        .faculty-card {
          position: relative;
          transition: transform 0.3s ease;
        }

        .faculty-card:hover {
          transform: translateY(-8px);
        }

        .card-container {
          position: relative;
          background: white;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(146, 12, 36, 0.15);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          border: 3px solid #920C24;
          will-change: transform;
        }

        .faculty-card:hover .card-container {
          box-shadow: 0 12px 40px rgba(146, 12, 36, 0.3);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .faculty-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          filter: sepia(5%) contrast(105%) brightness(102%);
          will-change: transform;
        }

        .faculty-card:hover .faculty-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          pointer-events: none;
        }

        .details-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 251, 214, 0.98) 100%);
          padding: 20px;
          transition: height 0.3s ease, background 0.3s ease;
        }

        .faculty-card:hover .details-container {
          height: 180px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 214, 1) 100%);
        }

        .details-content {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .faculty-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #920C24;
          margin-bottom: 8px;
          line-height: 1.3;
          font-family: 'Bookman Old Style', serif !important;
        }

        .faculty-position {
          font-size: 1.05rem;
          font-weight: 600;
          color: #B8860B;
          margin-bottom: 10px;
          font-family: 'Garamond', serif !important;
        }

        .divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #920C24, transparent);
          margin: 8px auto;
        }

        .email-container {
          height: 0;
          opacity: 0;
          overflow: visible;
          transition: height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
          margin-top: 0;
        }

        .faculty-card:hover .email-container {
          height: auto;
          opacity: 1;
          margin-top: 12px;
        }

        .faculty-email {
          font-size: 0.85rem;
          color: #4A5568;
          font-weight: 500;
          padding: 8px 12px;
          background: rgba(146, 12, 36, 0.08);
          border-radius: 8px;
          display: block;
          word-break: break-all;
          font-family: 'Garamond', serif !important;
        }

        .border-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 22px;
          background: linear-gradient(45deg, #920C24, #B8860B, #920C24);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: -1;
        }

        .border-glow.active {
          opacity: 0.2;
        }

        /* Remove scroll animations to improve performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TopFaculty;