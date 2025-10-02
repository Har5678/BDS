import React, { useState } from "react";

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
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    },
    {
      id: 2,
      title: "Legal Aid Training",
      description:
        "The Legal Aid Clinic trains students in real-world community issues. Under faculty supervision, students conduct client interviews, draft legal notices, and navigate legal systems to promote social justice.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    },
    {
      id: 3,
      title: "Library",
      description:
        "Our library is a modern sanctuary for research, with legal texts, journals, digital databases, and comfortable study spaces to support independent learning and scholarship.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
    },
    {
      id: 4,
      title: "Internship & Placement Cell",
      description:
        "The Internship & Placement Cell bridges academic learning and professional success, offering internships, career counseling, workshops, and strong industry connections.",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800",
    },
    {
      id: 5,
      title: "Smart Classes",
      description:
        "Our smart classrooms feature projectors, interactive whiteboards, and high-speed internet, enabling multimedia presentations, video lectures, and real-time case studies for collaborative learning.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    },
    {
      id: 6,
      title: "Auditorium",
      description:
        "The auditorium hosts guest lectures, seminars, orientation programs, annual functions, and convocation ceremonies with advanced sound and lighting systems.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    },
    {
      id: 7,
      title: "Sports Facilities",
      description:
        "Our campus offers basketball, badminton courts, and indoor game areas to promote physical well-being, discipline, teamwork, and leadership.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    },
    {
      id: 8,
      title: "Student Common Room",
      description:
        "The common room is a comfortable space for students to relax, socialize, network, and collaborate with peers, supporting a balanced student life.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
  ];

  return (
    <>
      <div className="pb-16">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[50vh] md:h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1562774053-701939374585?w=1200)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            Campus Life at BDS School of Law
          </h1>
        </div>

        {/* Intro */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12 text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            At BDS School of Law, our campus is meticulously designed to be a vibrant hub
            of learning, professionalism, and community. From dedicated spaces for practical
            training to areas for relaxation and collaboration, our campus provides the ideal
            environment for every student to thrive.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="max-w-8xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="h-80"
              style={{ perspective: "1000px" }}
            >
              <div
                onClick={() => toggleFlip(facility.id)}
                className={`relative w-full h-full transition-transform duration-700 ${flippedId === facility.id ? "rotate-y-180" : ""} lg:hover:rotate-y-180`}
                style={{
                  transformStyle: "preserve-3d",
                  cursor: "pointer",
                }}
              >
                {/* Front Side */}
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
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-[#920C24] text-center">
                        {facility.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg bg-white p-4 sm:p-6 flex flex-col justify-center items-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#920C24] mb-2 sm:mb-3 md:mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-700 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};

export default CampusLife;
