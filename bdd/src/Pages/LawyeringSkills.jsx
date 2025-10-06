import React, { useState, useEffect, useRef } from 'react';
import assets from '../assets/Assets';

const LawyeringSkills = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const sectionRefs = useRef([]);

  const introSection = {
    id: 'intro',
    content: `At BDS School of Law, we believe that a law degree is not just about mastering legal theory; it is about cultivating the practical skills necessary to be a competent and ethical lawyer. Our curriculum is integrated with a wide range of hands-on opportunities designed to transform students into skilled advocates, critical thinkers, and effective professionals. We ensure every student is prepared for the real challenges of the legal profession from day one.`
  };

  const sections = [
    {
      id: 'moot-court',
      title: 'Moot Court',
      images: [assets.moot1, assets.moot2, assets.moot3, assets.moot4],
      content: `Our state-of-the-art Moot Court Hall is the heart of our practical legal training, meticulously designed to replicate a professional courtroom. In this realistic setting, students bridge the gap between theory and practice by participating in mock court competitions. They hone crucial advocacy skills, including public speaking, persuasive argumentation, and strategic cross-examination, under the expert guidance of our faculty.\n\nThis dynamic space is also where we host inter-college competitions and seminars by distinguished legal professionals. Through these experiences, students receive invaluable feedback that sharpens their skills and transforms them into sharp, confident, and courtroom-ready advocates. Our Moot Court Hall is a true laboratory for legal excellence.`
    },
    {
      id: 'mock-trial',
      title: 'Mock Trial',
      images: [assets.mock1, assets.mock2, assets.mock3, assets.mock4],
      content: `Mock trials are a key component of our practical training, immersing students in a complete courtroom simulation from beginning to end. Students take on the roles of lawyers, witnesses, and other court personnel to present a full case, from opening statements to closing arguments. This exercise provides a deeper understanding of trial procedure and evidence.\n\nIt gives students the confidence to perform under pressure and think on their feet. It is a highly effective way to prepare for the complexities of real-world litigation and helps students develop strategic thinking, critical analysis, and quick decision-making skills in a realistic legal setting.`
    },
    {
      id: 'workshops',
      title: 'Workshops',
      images: [assets.workshop1, assets.workshop2, assets.workshop3, assets.workshop4],
      content: `We provide a series of intensive workshops designed to build a strong foundation in core legal skills. These specialized sessions focus on crucial abilities like legal research, ensuring students can navigate complex databases and find authoritative sources. Our drafting workshops teach the art of crafting legal documents, from petitions to contracts, with precision and clarity.\n\nIn addition to foundational skills, we offer specialized moot court workshops that provide detailed training on courtroom etiquette and advanced oral advocacy. These hands-on sessions are a key part of our curriculum, allowing students to apply what they learn and gain practical expertise for their legal careers.`
    },
    {
      id: 'pro-bono',
      title: 'Pro Bono & Legal Aid Work',
      images: [assets.probono1, assets.probono2, assets.probono3, assets.probono4],
      content: `We inculcate a deep sense of social responsibility through Pro Bono and Legal Aid Work. This essential training allows students to apply their skills to serve the community, providing free legal assistance to underprivileged individuals under the guidance of our faculty. It is through this vital work that our students learn the true meaning of public service.\n\nThis practical work provides an opportunity to contribute to social justice while gaining invaluable experience in client interaction, case management, and legal advocacy. It connects our students' professional aspirations with a commitment to making a tangible, positive impact on society.`
    },
    {
      id: 'seminars',
      title: 'Seminars',
      images: [assets.seminar1, assets.seminar2, assets.seminar3, assets.seminar4],
      content: `Our campus serves as a platform for a variety of academic and professional seminars. We regularly host eminent judges, senior advocates, and legal experts who share their insights and experiences with our students. These events provide a crucial link between academic study and the professional world.\n\nThese seminars offer a platform for students to engage with real-world legal issues, discuss current legal trends, and expand their professional networks. They provide invaluable exposure to the broader legal community and inspire our students by showing them the diverse paths a legal career can take.`
    },
    {
      id: 'internship',
      title: 'Internship',
      images: [assets.intern1, assets.intern2, assets.intern3, assets.intern4],
      content: `Internships at BDSSL are designed to turn theory into practice. Our students gain valuable experience by working with leading law firms and reputed advocates. We offer both physical and virtual internships to ensure continuous learning opportunities. These experiences sharpen drafting, legal research, and client interaction skills. Students observe court proceedings, learn case strategy, and practice professional etiquette.\n\nThey get the chance to work on live matters under expert supervision. Virtual internships connect students with legal professionals across India. Each internship is carefully structured and assessed to maximize skill development. By the end of the course, students are industry-ready and confident professionals. At BDSSL, internships are not just training – they are the foundation of future lawyering excellence.`
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -20% 0px', threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intervals = sections.map((section) =>
      setInterval(() => {
        setCurrentImageIndices((prev) => ({
          ...prev,
          [section.id]: ((prev[section.id] || 0) + 1) % section.images.length
        }));
      }, 2000)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <img
          src={assets.Lawering}
          alt="Lawyering Skills"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Lawyering Skills
        </h1>
      </div>

      <div className="min-h-screen bg-white">
        {/* Intro Section */}
        <section
          id="intro"
          ref={setSectionRef(0)}
          className={`w-full py-16 px-6 mt-12 transition-all duration-1000 transform ${
            visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ backgroundColor: '#FFFBD6' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl lg:text-2xl leading-relaxed italic" style={{ color: '#2D3748' }}>
              "{introSection.content}"
            </blockquote>
          </div>
        </section>

        {/* Main Sections */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              ref={setSectionRef(index + 1)}
              className={`mb-24 transition-all duration-1000 transform ${
                visibleSections.has(section.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 rounded-2xl shadow-lg overflow-hidden`}
                style={{ backgroundColor: '#FFFBD6' }}
              >
                {/* Images Carousel */}
                <div className="w-full lg:w-1/2 p-6">
                  <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-lg">
                    {section.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`${section.title} ${imgIndex + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
                        style={{
                          transform: `translateX(${(imgIndex - (currentImageIndices[section.id] || 0)) * 100}%)`,
                          opacity: imgIndex === (currentImageIndices[section.id] || 0) ? 1 : 0
                        }}
                      />
                    ))}

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {section.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setCurrentImageIndices((prev) => ({ ...prev, [section.id]: imgIndex }))
                          }
                          className="w-2 h-2 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor:
                              imgIndex === (currentImageIndices[section.id] || 0) ? '#920C24' : '#ffffff',
                            opacity: imgIndex === (currentImageIndices[section.id] || 0) ? 1 : 0.5
                          }}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight" style={{ color: '#920C24' }}>
                    {section.title}
                  </h2>
                  <div className="w-24 h-1 mb-6 rounded-full" style={{ backgroundColor: '#920C24' }}></div>
                  <div className="text-base lg:text-lg leading-relaxed space-y-4" style={{ color: '#2D3748' }}>
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`transition-all duration-700 delay-${pIndex * 200} ${
                          visibleSections.has(section.id) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Custom Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
          body, * { font-family: 'EB Garamond', serif !important; }
          h1, h2, h3, h4, h5, h6, p, div, span, li, a, section { font-family: 'Bookman Old Style', serif !important; }
          .delay-200 { transition-delay: 200ms; }
          .delay-400 { transition-delay: 400ms; }
          .delay-600 { transition-delay: 600ms; }
        `}</style>
      </div>
    </div>
  );
};

export default LawyeringSkills;
