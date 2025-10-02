import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="bg-[#FFFBD6] min-h-screen py-12 px-4 md:px-12">
      <motion.div
        className="max-w-10xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#920C24] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Terms & Conditions
        </motion.h1>

        {/* Dummy Sections */}
        {[
          {
            title: "Acceptance of Terms",
            content:
              "By accessing and using this website, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before using our services.",
          },
          {
            title: "Use of Website",
            content:
              "You may use the website for lawful purposes only. You agree not to engage in any activities that may disrupt, damage, or interfere with the functioning of the website.",
          },
          {
            title: "Intellectual Property",
            content:
              "All content on this website, including text, graphics, logos, images, and software, is the property of BDS School of Law and protected by intellectual property laws.",
          },
          {
            title: "User Responsibilities",
            content:
              "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Misuse of the website may result in termination of access.",
          },
          {
            title: "Limitation of Liability",
            content:
              "BDS School of Law shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or inability to access its content.",
          },
          {
            title: "Governing Law",
            content:
              "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the jurisdiction of courts in Delhi-NCR.",
          },
          {
            title: "Changes to Terms",
            content:
              "We reserve the right to modify or update these Terms & Conditions at any time. Users are encouraged to review this page periodically to stay informed of any changes.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 text-justify">{section.content}</p>
          </motion.div>
        ))}

        {/* Bottom Note */}
        <motion.p
          className="text-gray-500 mt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          © {new Date().getFullYear()} BDS School of Law. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Terms;
