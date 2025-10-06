// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
import Alumini from "./Pages/Alumini";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
  });

  // Show popup only once per session
  useEffect(() => {
    const hasShown = sessionStorage.getItem("hasShownPopup");
    if (!hasShown) {
      setIsModalOpen(true);
      sessionStorage.setItem("hasShownPopup", "true");
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(backendUrl + "/api/students/add", formData);

      if (res.data.success) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          fatherName: "",
          email: "",
          phone: "",
          address: "",
        });
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Ballb" element={<Ballb />} />
        <Route path="/Llb" element={<Llb />} />
        <Route path="/Llm" element={<Llm />} />
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
        <Route path="/Alumini" element={<Alumini />} />
      </Routes>

      <Footer />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/918126274161"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Popup Modal with Glass Effect */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
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
                stiffness: 120,
              }}
              className="relative bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 max-w-lg w-full z-10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-[#920C24]">
                Register for Personal Interview
              </h2>
              <p className="text-white/80 mb-6 text-center">
                Fill your details to book your slot for personal interview.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father's Name"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/30 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
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
