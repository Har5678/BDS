import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! We will get back to you soon.");
  };

  const address = "BDS School of Law, Knowledge Park, Delhi-NCR";
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <>
      <div className="bg-[#FFFBD6] py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#920C24] mb-3">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            Have questions? Need assistance? We're here to help. Fill out the
            form or use the contact details below to reach us directly.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Info */}
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#920C24] mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              Reach out to us through phone, email, or visit our campus. Stay
              updated by following us on social media.
            </p>

            <div className="space-y-4 text-base md:text-lg text-gray-800">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#920C24]" />
                <span>info@bdslawschool.edu.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#920C24]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#920C24]" />
                <span>{address}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-base font-semibold text-gray-700 mb-3">
                Connect with us
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/BDS-School-of-Law/61578620593416/"
                  target="_blank"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#920C24] hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
               
                <a
                  href="https://www.instagram.com/bdssl_mrt/?hl=en"
                  target="_blank"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#920C24] hover:text-white transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fshowcase%2F108131302%2Fadmin%2Fdashboard%2F"
                  target="_blank"
                  className="p-3 bg-gray-100 rounded-full hover:bg-[#920C24] hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#920C24] outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#920C24] outline-none"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#920C24] outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#920C24] outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#920C24] outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#920C24] text-white rounded-lg font-medium hover:bg-[#7a0a1e] transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden border border-gray-200 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            title="BDS School of Law Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address
            )}&output=embed`}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
          <div className="text-center p-4 bg-white">
            <a
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#920C24] text-white rounded-lg shadow-md hover:bg-[#7a0a1e] transition"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
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

export default Contact;
