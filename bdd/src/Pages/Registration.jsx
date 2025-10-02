import React from "react";
import { motion } from "framer-motion";
import AdmissionInterview from "../Components/AdmissionInterview";
import CircleStats from "../Components/CircleStats";
import Approvals from "../Components/Approvals";
import AboutUsBanner from "../Components/AboutUsBanner";
import RgBanner from "../Components/RgBanner";
import Testimonials from "../Components/Testimonials";


const courses = ["BALLB", "LLB", "LLM", "Cyber Law"];

const whyBullets = [
  "5000+ Proud Alumni Network supporting students nationwide and abroad",
  "Expert Faculty & Industry Professionals for practical mentorship",
  "Experiential Learning & Mooting Culture for courtroom skills",
  "Cutting Edge Curriculum including AI, Media Law, Human Rights, Environmental Law",
  "Career Focused Training with personalized mentorship and placement support",
  "Vibrant Campus Culture with cultural fests, societies, and legal clubs",
  "Commitment to Excellence shaping leaders and socially conscious professionals"
];

const RegistrationPage = () => {
  return (
    <div>
      <RgBanner/>

      <CircleStats />

      {/* Why Choose BDS Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Image Placeholder */}
          <motion.div
            className="w-full lg:w-2/5 bg-white bg-opacity-10 rounded-2xl sm:rounded-3xl h-60 sm:h-80 lg:h-[400px] flex items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gray-200 text-sm sm:text-base">Image Placeholder</span>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-left drop-shadow-lg">
              Why Choose BDS School of Law
            </h2>

            <ul className="space-y-3 sm:space-y-4 list-disc list-inside text-base sm:text-lg drop-shadow-md">
              {whyBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <AdmissionInterview />
      <Approvals />
      <AboutUsBanner />
      <Testimonials/>
      
    </div>
  );
};

export default RegistrationPage;
