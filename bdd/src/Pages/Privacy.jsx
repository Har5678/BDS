import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
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
          Privacy Policy
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-gray-700 mb-6 leading-relaxed text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          our website. We value your privacy and strive to protect your data
          while providing a safe browsing experience.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Information Collection */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 text-justify">
              We may collect personal information such as your name, email
              address, phone number, and payment information when you interact
              with our website. We also automatically collect information about
              your device and browsing behavior using cookies and similar
              technologies.
            </p>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 text-justify">
              Your information is used to process orders, improve website
              experience, send promotional offers, and communicate important
              updates. We never sell your personal information to third-party
              marketers.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              3. Sharing of Information
            </h2>
            <p className="text-gray-700 text-justify">
              We may share information with trusted service providers who help
              us operate our website, process payments, or deliver services.
              All third parties are obligated to protect your information and
              use it only for the purpose specified by us.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              4. Security of Data
            </h2>
            <p className="text-gray-700 text-justify">
              We implement industry-standard measures to safeguard your
              personal information. However, no method of transmission over the
              internet is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-2">
              5. Your Rights
            </h2>
            <p className="text-gray-700 text-justify">
              You have the right to access, update, or delete your personal
              information. You can also opt-out of marketing communications at
              any time by following the instructions in our emails or contacting
              us directly.
            </p>
          </div>
        </motion.div>

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

export default Privacy;
