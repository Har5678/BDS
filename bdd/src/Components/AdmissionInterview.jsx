// components/AdmissionInterview.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

void motion;

const admissionProcess = [
  {
    title: "BALLB",
    content:
      "To be eligible for this distinguished program, you must have successfully completed your 10+2 or an equivalent qualification from a recognized board."
  },
  {
    title: "LLB",
    content:
      "To be eligible for this program, you must hold a Bachelor’s degree in any discipline from a recognized university."
  },
  {
    title: "LLM",
    content:
      "Through entrance to be conducted by CCS University. To be eligible for this program, you must have an LL.B. degree from a recognized university."
  },
  {
    title: "Diploma in Cyber Law",
    content:
      "You must have successfully completed your Graduation in any stream from a recognized University."
  }
];

const personalInterview = {
  intro: `Personal Interviews will primarily be conducted in person at BDS School of Law. In exceptional cases, online interviews may be arranged through Zoom or Google Meet. The interview schedule is designed to be flexible and applicant-friendly, allowing candidates to book slots as per their convenience. Prior to the interview, applicants' documents will be thoroughly checked and verified in accordance with the norms of BDS School of Law. These documents will also form an integral part of the evaluation and grading process during the interview.`,
  parameters: [
    "General Demeanor - Personality, Body Language Etc.",
    "Articulation and Communication",
    "Co-curricular, Extra-curricular accomplishments",
    "Curricular / General / Common Legal Understanding"
  ]
};

const AdmissionInterview = () => {
  const [activeTab, setActiveTab] = useState("admission");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#920C24] py-10 md:py-16 px-4 md:px-6 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 justify-start">
            <button
              onClick={() => setActiveTab("admission")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "admission"
                  ? "bg-white text-[#920C24]"
                  : "bg-[#6e0a19] hover:bg-[#a8122e]"
              }`}
            >
              Admission Process
            </button>
            <button
              onClick={() => setActiveTab("interview")}
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeTab === "interview"
                  ? "bg-white text-[#920C24]"
                  : "bg-[#6e0a19] hover:bg-[#a8122e]"
              }`}
            >
              Personal Interview
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "admission" ? (
              <motion.div
                key="admission"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-left"
              >
                {admissionProcess.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base">{item.content}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="interview"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-left"
              >
                <p className="text-sm md:text-base">{personalInterview.intro}</p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-yellow-400 text-[#920C24] px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition"
                >
                  Book Your Slot
                </button>

                <h3 className="text-lg md:text-xl font-semibold">
                  Personal Interview Marking Parameters:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  {personalInterview.parameters.map((param, idx) => (
                    <li key={idx}>{param}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-lg p-8 relative border border-white/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-2xl font-bold text-white hover:text-yellow-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Register for Personal Interview
                </h2>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Father's Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <textarea
                    placeholder="Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    rows={3}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-[#920C24] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default AdmissionInterview;
