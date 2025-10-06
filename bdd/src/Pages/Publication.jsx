import React from 'react';
import { Download } from 'lucide-react';
import assets from '../assets/Assets';

const Publication = () => {
    const publications = [
        {
            id: 1,
            title:
                "MAINSTREAMING ENVIRONMENTAL CRIMES: THE ROLE OF THE BNS AND BNSS IN INDIA'S GREEN JUSTICE",
            description:
                "This publication explores how India's new criminal laws—the Bharatiya Nyaya Sanhita (BNS)and the Bharatiya Nagarik Suraksha Sanhita (BNSS)—address environmental crimes. It highlights the role of these reforms in strengthening accountability, promoting green justice, and ensuring that environmental protection becomes a mainstream part of the justice system.",
            Byline: 'Dr. Sourabh Sri Mala Asst. Prof., BDS School of Law, Meerut',
            image: assets.saurabhshrimala,
        },
        {
            id: 2,
            title: 'E-CONTRACTS IN THE DIGITAL AGE: LEGAL IMPLICATION',
            description:
                'This publication delves into the world of electronic contracts in the digital age, exploring how technology is reshaping the way agreements are formed and enforced. It outlines the legal implications of e-contracts, the challenges of authenticity and security, and the evolving role of law in safeguarding transparency and trust in online transactions. Readers will gain insights into the future of contracting in a fast-changing digital landscape.',
            Byline: 'Mr. Vivek Kumar Ass. Professor, BDS School of Law, Meerut',
            image: assets.viveksir,
        },
        {
            id: 3,
            title:
                'POSITION OF ENGLISH AS A PROFESSIONAL LINK LANGUAGE IN INDIA: A CRITICAL ANALYSIS',
            description:
                "This publication critically examines the role of English as a professional link language in India. It explores how English functions as a bridge across diverse linguistic communities, its impact on education, employment, and governance, and the challenges it poses to regional languages. The analysis highlights both the opportunities and inequalities created by English in shaping India's professional and social landscape.",
            Byline: 'Ms. Divya Jain Assistant Prof. (English Department)',
            image: assets.divyamam,
        },
        {
            id: 4,
            title: 'Expanding Horizon of Article 21 Vis-a-Vis Judicial Activism',
            description:
                'This publication provides a critical analysis of the evolving interpretation of Article 21 of the Indian Constitution in the context of judicial activism. It examines how the judiciary has progressively expanded the ambit of the "right to life and personal liberty" to encompass diverse dimensions such as human dignity, privacy, health, and environmental protection. The study underscores the transformative role of judicial interpretation in redefining constitutional guarantees and advancing the cause of justice in India.',
            Byline:
                'Ms. Kshama Sharma, Assistant Professor, BDS School of Law, Jagriti Vihar Meerut',
            image: assets.kshamamam,
        },
        {
            id: 5,
            title:
                'Disconnecting Rights in the Offline Nations: Internet Shutdowns as Human Rights Violations under International and Indian Law',
            description:
                'This publication analyzes internet shutdowns as human rights violations under international and Indian law. It highlights the conflict between state security measures and fundamental rightssuch as free expression, access to information, and livelihood in a digital society.',
            Byline: 'Ms. Vasvi Bishnoi, Assistant Professor, BDS School of Law',
            image: assets.vasvimam,
        },
    ];

    const handleDownload = (publicationId, title) => {
        const pdfUrl = assets.pdfs && assets.pdfs[publicationId];

        if (!pdfUrl) {
            alert('PDF not found for this publication.');
            return;
        }

        const link = document.createElement('a');
        link.href = pdfUrl;

        const safeTitle = title.replace(/[^a-z0-9\-_. ]/gi, '').replace(/\s+/g, '_');
        link.download = `${safeTitle}.pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FFFBD6' }}>
            {/* Hero Section */}
            <div
                className="relative h-56 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden"
                style={{
                    backgroundImage: `url(${assets.campus})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute inset-0 bg-opacity-50" />

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 z-20 flex items-center justify-center w-full">
                    <button
                        className="bg-red-800 bg-opacity-90 text-white px-5 py-4 text-3xl font-bold rounded-xl shadow-2xl transition-all duration-300 hover:bg-red-900 hover:scale-105 focus:outline-none"
                        style={{ fontFamily: 'Bookman Old Style, Bookman, serif' }}
                        onClick={() => {
                            const content = document.getElementById('publications-content');
                            if (content) content.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Publications
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 px-2 py-2">
                <div id="publications-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 sm:mb-12 text-sm">
                        <div className="flex flex-wrap items-center space-x-2 text-gray-600">
                            <a href="#" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                                HOME
                            </a>
                            <span className="text-gray-400">{'>'}</span>
                            <a href="#" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                                RESEARCH
                            </a>
                            <span className="text-gray-400">{'>'}</span>
                            <span className="text-gray-800 font-medium">PUBLICATIONS</span>
                        </div>
                    </nav>

                    {/* Publications List */}
                    <div className="space-y-8">
                        {publications.map(publication => (
                            <div
                                key={publication.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                                    {/* Image / Thumbnail */}
                                    <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-md order-1 md:order-1">
                                        <img
                                            src={publication.image}
                                            alt={publication.title}
                                            className="w-full h-full object-cover bg-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3 sm:space-y-4 order-2 md:order-2">
                                        <h2 className="text-xl sm:text-2xl font-semibold text-red-700 leading-tight">
                                            {publication.title}
                                        </h2>

                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{publication.description}</p>
                                        <p className="text-gray-500 italic text-sm sm:text-base">- {publication.Byline}</p>

                                        <div className="flex justify-start md:justify-end">
                                            <button
                                                onClick={() => handleDownload(publication.id, publication.title)}
                                                className="bg-transparent border border-red-700 text-red-700 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-3xl transition-all duration-200 hover:bg-red-700 hover:text-white hover:shadow-lg flex items-center space-x-2 group text-sm sm:text-base"
                                            >
                                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                                <span>Download</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');

        * {
          font-family: 'EB Garamond', serif !important;
        }

        h1, h2, h3, h4, h5, h6, li, p, a {
          font-family: 'Bookman Old Style', serif !important;
        }
          `}
            </style>
        </div>
    );
};

export default Publication;