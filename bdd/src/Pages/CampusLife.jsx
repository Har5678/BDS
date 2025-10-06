import React, { useState } from "react";
import assets from "../assets/Assets";

const CampusLife = () => {
  const [flippedId, setFlippedId] = useState(null);

  const toggleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  const facilities = [
    {
      id: 1,
      title: "Moot Court",
      description:
        "Our state-of-the-art Moot Court Hall replicates a professional courtroom where students participate in mock trials, competitions, and inter-college seminars to hone advocacy skills under expert guidance.",
      image: assets.mootcourt ,
    },
    {
      id: 2,
      title: "Legal Aid Training",
      description:
        "The Legal Aid Clinic trains students in real-world community issues. Under faculty supervision, students conduct client interviews, draft legal notices, and navigate legal systems to promote social justice.",
      image: assets.aidtraining,
    },
    {
      id: 3,
      title: "Library",
      description:
        "Our library is a modern sanctuary for research, with legal texts, journals, digital databases, and comfortable study spaces to support independent learning and scholarship.",
      image: assets.library,
    },
    {
      id: 4,
      title: "Internship & Placement Cell",
      description:
        "The Internship & Placement Cell bridges academic learning and professional success, offering internships, career counseling, workshops, and strong industry connections.",
      image: assets.internship,
    },
    {
      id: 5,
      title: "Smart Classes",
      description:
        "Our smart classrooms feature projectors, interactive whiteboards, and high-speed internet, enabling multimedia presentations, video lectures, and real-time case studies for collaborative learning.",
      image: assets.smartclass,
    },
    {
      id: 6,
      title: "Auditorium",
      description:
        "The auditorium hosts guest lectures, seminars, orientation programs, annual functions, and convocation ceremonies with advanced sound and lighting systems.",
      image: assets.auditorium,
    },
    {
      id: 7,
      title: "Sports Facilities",
      description:
        "Our campus offers basketball, badminton courts, and indoor game areas to promote physical well-being, discipline, teamwork, and leadership.",
      image: assets.sports,
    },
    {
      id: 8,
      title: "Student Common Room",
      description:
        "The common room is a comfortable space for students to relax, socialize, network, and collaborate with peers, supporting a balanced student life.",
      image: assets.studentroom,
    },
  ];

  return (
    <>
      <div className="pb-16">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[50vh] md:h-[60vh] flex items-center justify-center"
        >
          <img
            src={assets.CampusNew}
            alt="Campus Banner"
            className="absolute inset-0 w-full h-full"
            onError={(e) => console.log('Image failed to load:', e)}
            onLoad={() => console.log('Image loaded successfully')}
          />
          <div className="absolute inset-0"></div>
          
        </div>

        {/* Intro */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At BDS School of Law, our campus is meticulously designed to be a vibrant hub
            of learning, professionalism, and community. From dedicated spaces for practical
            training to areas for relaxation and collaboration, our campus provides the ideal
            environment for every student to thrive.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="max-w-8xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {facilities.slice(0, 6).map((facility) => (
              <div
                key={facility.id}
                className="group h-80"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front Side - Title with Background Image */}
                  <div 
                    className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#920C24] text-center">
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Description */}
                  <div 
                    className="absolute w-full h-full rounded-xl shadow-lg bg-white p-6 flex flex-col justify-center items-center text-center"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-[#920C24] mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Last Two Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 max-w-3xl mx-auto">
            {facilities.slice(6).map((facility) => (
              <div
                key={facility.id}
                className="group h-80"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front Side - Title with Background Image */}
                  <div 
                    className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#920C24] text-center">
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Description */}
                  <div 
                    className="absolute w-full h-full rounded-xl shadow-lg bg-white p-6 flex flex-col justify-center items-center text-center"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-[#920C24] mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default CampusLife;