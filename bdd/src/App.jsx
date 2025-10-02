// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Ballb from "./Pages/Ballb";
import Llb from "./Pages/Llb";
import Llm from "./Pages/Llm";
import CyberLaw from "./Pages/CyberLaw";
import CampusLife from "./Pages/CampusLife";
import Publication from "./Pages/Publication";
import LawyeringSkills from "./Pages/LawyeringSkills";
import TopFaculty from "./Pages/TopFaculty";
import Contact from "./Pages/ContactUs";
import NewsEvents from "./Pages/NewsEvents";
import Registration from "./Pages/Registration";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("hasShownPopup");
    if (!hasShown) {
      setIsModalOpen(true);
      sessionStorage.setItem("hasShownPopup", "true");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Ballb" element={<Ballb />} />
        <Route path="/Llb" element={<Llb />} />
        <Route path="/Llm" element={<Llm/>} />
        <Route path="/CyberLaw" element={<CyberLaw />} />
        <Route path="/CampusLife" element={<CampusLife />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/LawyeringSkills" element={<LawyeringSkills />} />
        <Route path="/TopFaculty" element={<TopFaculty />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/Terms-conditions" element={<Terms />} />
      </Routes>
      <Footer />

      {/* Popup Modal with Glass Effect */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 backdrop-blur-md bg-black/30"
              onClick={() => setIsModalOpen(false)}
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 120
              }}
              className="relative bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 max-w-lg w-full z-10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#920C24]">
                Register for Personal Interview
              </h2>
              <p className="text-white/80 mb-6 text-center">
                Fill your details to book your slot for personal interview.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Father's Name"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <textarea
                  placeholder="Address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-[#920C24] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Submit
                </button>
              </form>

              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-white hover:text-yellow-300 text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
