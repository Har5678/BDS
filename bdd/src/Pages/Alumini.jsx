import React from 'react';
import assets from '../assets/Assets';

const Alumni = () => {
    const alumniList = [
        {
            id: 1,
            name: 'Mr. Vaibhav Raj Soni',
            title: 'Legal Advisor – Customs, CGST, Trade Policy, Competition Law, Banking & Regulatory Compliances',
            description:
                'Mr. Vaibhav Raj Soni is an accomplished legal professional specializing in fiscal and regulatory frameworks governing trade, taxation, and corporate governance. With extensive experience in advisory and compliance matters, he has guided numerous organizations on issues relating to customs law, GST, and competition policy. His expertise extends to banking regulations and trade facilitation, making him a valuable resource for bridging legal precision with practical business insights.',
            image: assets.Vaibhav,
        },
        {
            id: 2,
            name: 'Ms. Deepa Gupta',
            title: 'CPA (Australia) | CISA (USA) | FCA, MBA, LLB, DISA (India)',
            subtitle: 'Chairperson, MARG Foundation (Australia) | Social Activist & Community Advocate',
            description:
                'Ms. Deepa Gupta is a globally recognized professional and community leader with distinguished qualifications across finance, law, and technology. As Chairperson of MARG Foundation, Australia, she has dedicated her career to social justice, empowerment, and community development. A multiple award winner, Ms. Gupta serves on several government and community boards in Victoria, including PTWF DHHS, VMC, VCOSS, ECCV, and the Victoria Public Tenants Association, contributing extensively to policy advocacy and social reform initiatives.',
            image: assets.Deepa,
        },
        {
            id: 3,
            name: 'Mr. Dushyant Kumar Tyagi',
            title: 'Ex-CISF Officer | Head of Security, Namo Bharat (DB RRTS)',
            description:
                'With over 30 years of distinguished service, Mr. Dushyant Kumar Tyagi has served in the Central Industrial Security Force (CISF) and major multinational companies like Alstom Transport India Ltd. and Deutsche Bahn. He has contributed significantly to national security and large-scale infrastructure projects such as the Eastern Dedicated Freight Corridor and the Delhi-Ghaziabad-Meerut RRTS. A decorated officer and dynamic professional, he continues to inspire students through his expertise in leadership, motivation, and career development.',
            image: assets.Dushyant,
        },
        {
            id: 4,
            name: 'Mr. Bhupender Kumar',
            title: 'Vigilance Officer, ITI Limited, New Delhi',
            subtitle: "(India's first PSU under the Department of Telecom, Ministry of Communication)",
            description:
                'A dedicated legal professional committed to promoting transparency and ethical governance in public sector enterprises. He earlier served as Legal Officer at ITI Limiteds Rae Bareli manufacturing unit (2019–2023), where he handled legal compliance, advisory matters, and corporate affairs with distinction.',
            image: assets.Bhupender,
        },
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FFFBD6' }}>
            {/* Hero Section */}
            <div
                className="relative h-80 overflow-hidden bg-center"
                style={{
                    backgroundImage: `url(${assets.campus})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center -115px',
                }}
            >
                <div className="absolute inset-0 bg-opacity-50" />

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 z-20 flex items-center justify-center w-full">
                    <button
                        className="bg-red-800 bg-opacity-90 text-white px-5 py-4 text-3xl font-bold rounded-xl shadow-2xl transition-all duration-300 hover:bg-red-900 hover:scale-105 focus:outline-none"
                        style={{ fontFamily: 'Bookman Old Style, Bookman, serif' }}
                        onClick={() => {
                            const content = document.getElementById('alumni-content');
                            if (content) content.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Alumni
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 px-2 py-2">
                <div id="alumni-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 sm:mb-12 text-sm">
                        <div className="flex flex-wrap items-center space-x-2 text-gray-600">
                            <a href="#" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                                HOME
                            </a>
                            <span className="text-gray-400">{'>'}</span>
                            <a href="#" className="text-red-600 hover:text-red-800 font-medium transition-colors">
                                ABOUT
                            </a>
                            <span className="text-gray-400">{'>'}</span>
                            <span className="text-gray-800 font-medium">ALUMNI</span>
                        </div>
                    </nav>

                    {/* Alumni List */}
                    <div className="space-y-10">
                        {alumniList.map(alumni => (
                            <div
                                key={alumni.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                                    {/* Profile Image */}
                                    <div className="flex-shrink-0 w-48 h-56 rounded-2xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={alumni.image}
                                            alt={alumni.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3 sm:space-y-4">
                                        <h2 className="text-xl sm:text-2xl font-semibold text-red-700 leading-tight">
                                            {alumni.name}
                                        </h2>

                                        <h3 className="text-base sm:text-lg font-medium text-gray-700 leading-snug">
                                            {alumni.title}
                                        </h3>

                                        {alumni.subtitle && (
                                            <p className="text-sm sm:text-base text-gray-600 italic">
                                                {alumni.subtitle}
                                            </p>
                                        )}

                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                            {alumni.description}
                                        </p>
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

export default Alumni;
