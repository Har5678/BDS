import React, { useState, useEffect, useRef } from 'react';
import { Scale, BookOpen, Users, Award, Gavel, Building, FileText } from 'lucide-react';
import assets from '../assets/Assets';

const LawyeringSkills = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const introSection = {
    id: 'intro',
    content: `At BDS School of Law, we believe that a law degree is not just about mastering legal theory; it is about cultivating the practical skills necessary to be a competent and ethical lawyer. Our curriculum is integrated with a wide range of hands-on opportunities designed to transform students into skilled advocates, critical thinkers, and effective professionals. We ensure every student is prepared for the real challenges of the legal profession from day one.`
  };

  const sections = [
    {
      id: 'moot-court',
      title: 'Moot Court',
      image: assets.MootCourt || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      content: `Our state-of-the-art Moot Court Hall is the heart of our practical legal training, meticulously designed to replicate a professional courtroom. In this realistic setting, students bridge the gap between theory and practice by participating in mock court competitions. They hone crucial advocacy skills, including public speaking, persuasive argumentation, and strategic cross-examination, under the expert guidance of our faculty.

This dynamic space is also where we host inter-college competitions and seminars by distinguished legal professionals. Through these experiences, students receive invaluable feedback that sharpens their skills and transforms them into sharp, confident, and courtroom-ready advocates. Our Moot Court Hall is a true laboratory for legal excellence.`
    },
    {
      id: 'mock-trial',
      title: 'Mock Trial',
      image: assets.MockTrial || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800',
      content: `Mock trials are a key component of our practical training, immersing students in a complete courtroom simulation from beginning to end. Students take on the roles of lawyers, witnesses, and other court personnel to present a full case, from opening statements to closing arguments. This exercise provides a deeper understanding of trial procedure and evidence.

It gives students the confidence to perform under pressure and think on their feet. It is a highly effective way to prepare for the complexities of real-world litigation and helps students develop strategic thinking, critical analysis, and quick decision-making skills in a realistic legal setting.`
    },
    {
      id: 'workshops',
      title: 'Workshops',
      image: assets.Workshops || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      content: `We provide a series of intensive workshops designed to build a strong foundation in core legal skills. These specialized sessions focus on crucial abilities like legal research, ensuring students can navigate complex databases and find authoritative sources. Our drafting workshops teach the art of crafting legal documents, from petitions to contracts, with precision and clarity.

In addition to foundational skills, we offer specialized moot court workshops that provide detailed training on courtroom etiquette and advanced oral advocacy. These hands-on sessions are a key part of our curriculum, allowing students to apply what they learn and gain practical expertise for their legal careers.`
    },
    {
      id: 'pro-bono',
      title: 'Pro Bono & Legal Aid Work',
      image: assets.ProBono || 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      content: `We inculcate a deep sense of social responsibility through Pro Bono and Legal Aid Work. This essential training allows students to apply their skills to serve the community, providing free legal assistance to underprivileged individuals under the guidance of our faculty. It is through this vital work that our students learn the true meaning of public service.

This practical work provides an opportunity to contribute to social justice while gaining invaluable experience in client interaction, case management, and legal advocacy. It connects our students' professional aspirations with a commitment to making a tangible, positive impact on society.`
    },
    {
      id: 'seminars',
      title: 'Seminars',
      image: assets.Seminars || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      content: `Our campus serves as a platform for a variety of academic and professional seminars. We regularly host eminent judges, senior advocates, and legal experts who share their insights and experiences with our students. These events provide a crucial link between academic study and the professional world.

These seminars offer a platform for students to engage with real-world legal issues, discuss current legal trends, and expand their professional networks. They provide invaluable exposure to the broader legal community and inspire our students by showing them the diverse paths a legal career can take.`
    },
    {
      id: 'internship',
      title: 'Internship',
      image: assets.Internship || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
      content: `Internships at BDSSL are designed to turn theory into practice. Our students gain valuable experience by working with leading law firms and reputed advocates. We offer both physical and virtual internships to ensure continuous learning opportunities. These experiences sharpen drafting, legal research, and client interaction skills. Students observe court proceedings, learn case strategy, and practice professional etiquette.

They get the chance to work on live matters under expert supervision. Virtual internships connect students with legal professionals across India. Each internship is carefully structured and assessed to maximize skill development. By the end of the course, students are industry-ready and confident professionals. At BDSSL, internships are not just training – they are the foundation of future lawyering excellence.`
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.LawyeringSkills})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center">
          Lawyering Skills
        </h1>
      </div>

      <div className="min-h-screen bg-white">
        {/* Introduction Section */}
        <section
          id="intro"
          ref={setSectionRef(0)}
          className={`w-full py-16 px-6 mt-12 transition-all duration-1000 transform ${
            visibleSections.has('intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ backgroundColor: '#FFFBD6' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <blockquote 
              className="text-xl lg:text-2xl leading-relaxed italic"
              style={{ color: '#2D3748' }}
            >
              "{introSection.content}"
            </blockquote>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              ref={setSectionRef(index + 1)}
              className={`mb-24 transition-all duration-1000 transform ${
                visibleSections.has(section.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 lg:gap-12 rounded-2xl shadow-lg overflow-hidden`}
                style={{ backgroundColor: '#FFFBD6' }}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-6">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <h2 
                    className="text-3xl lg:text-4xl font-bold mb-2 leading-tight"
                    style={{ color: '#920C24' }}
                  >
                    {section.title}
                  </h2>
                  
                  {/* Underline */}
                  <div 
                    className="w-24 h-1 mb-6 rounded-full"
                    style={{ backgroundColor: '#920C24' }}
                  ></div>

                  <div 
                    className="text-base lg:text-lg leading-relaxed space-y-4"
                    style={{ color: '#2D3748' }}
                  >
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p 
                        key={pIndex}
                        className={`transition-all duration-700 delay-${pIndex * 200} ${
                          visibleSections.has(section.id) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-4'
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

        {/* Custom Styles for Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
          
          body, * {
            font-family: 'EB Garamond', serif !important;
          }
          
          h1, h2, h3, h4, h5, h6, p, div, span, li, a, section {
            font-family: 'Bookman Old Style', serif !important;
          }
          
          .delay-200 { transition-delay: 200ms; }
          .delay-400 { transition-delay: 400ms; }
          .delay-600 { transition-delay: 600ms; }
        `}</style>
      </div>
    </div>
  );
};

export default LawyeringSkills;