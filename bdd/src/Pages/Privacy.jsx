import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="bg-[#FFFBD6] min-h-screen py-12 px-4 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
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

        {/* Introduction */}
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          BDS School of Law (“we”, “us”, “our”, or “the College”) operates and
          maintains its official website and related online platforms. By using
          our website and providing personal information, you agree to the terms
          of this Privacy Policy, which may be updated from time to time. This
          policy explains how we collect, use, disclose, and protect your
          personal information.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 text-justify">
              When you register, apply, or pay fees, we may collect details such
              as your name, address, phone number, and other relevant personal
              details. When you browse our website, we automatically receive
              certain information about your device, such as your Internet
              Protocol (IP) address, browser type, and operating system, to help
              us improve user experience.
            </p>
          </div>

          {/* 2. Consent */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              2. Consent
            </h2>
            <p className="text-gray-700 text-justify">
              By providing personal information for purposes such as admissions,
              fee payments, or inquiries, you consent to our collection and use
              of the data for that specific purpose only. If you wish to
              withdraw your consent at any time, you may do so by discontinuing
              the use of our services or contacting us at the details provided
              below.
            </p>
          </div>

          {/* 3. Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              3. Data Retention
            </h2>
            <p className="text-gray-700 text-justify">
              Personal information collected will be retained only for as long
              as necessary to fulfill the purposes for which it was collected,
              unless longer retention is required by law. Academic,
              administrative, and legal records may be retained as necessary for
              institutional, research, or regulatory requirements.
            </p>
          </div>

          {/* 4. Disclosure of Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              4. Disclosure of Information
            </h2>
            <p className="text-gray-700 text-justify">
              We may disclose your personal information if required by law,
              regulatory authorities, or for compliance with legal obligations.
            </p>
          </div>

          {/* 5. Payments */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              5. Payments
            </h2>
            <p className="text-gray-700 text-justify">
              For processing payments, we may use third-party service providers
              such as payment gateways. Your card/payment information is
              encrypted and processed securely in accordance with industry
              standards (e.g., PCI-DSS). We and our payment partners do not
              store sensitive payment details beyond what is necessary to
              complete the transaction.
            </p>
          </div>

          {/* 6. Third-Party Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              6. Third-Party Services
            </h2>
            <p className="text-gray-700 text-justify">
              Third-party service providers engaged by us (e.g., payment
              gateways, analytics tools) will only collect, use, and disclose
              your information as needed to perform the services they provide.
              Once you leave our website or are redirected to a third-party
              site, their privacy policies will apply, not ours. We encourage
              you to review the privacy practices of such third-party providers
              before engaging with them.
            </p>
          </div>

          {/* 7. Security */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              7. Security
            </h2>
            <p className="text-gray-700 text-justify">
              We implement reasonable security measures to protect personal
              information in accordance with the Information Technology
              (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011. While we take
              precautions, no method of transmission over the Internet or
              electronic storage is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          {/* 8. Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              8. Cookies
            </h2>
            <p className="text-gray-700 text-justify">
              Our website uses cookies to improve user sessions and navigation.
              Cookies are not used to personally identify you on other websites.
            </p>
          </div>

          {/* 9. Changes to this Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              9. Changes to this Privacy Policy
            </h2>
            <p className="text-gray-700 text-justify">
              We may update this Privacy Policy from time to time. Updates will
              take effect once posted on this page. Significant changes will be
              clearly indicated so that you remain informed about what
              information we collect and how we use it.
            </p>
          </div>

          {/* 10. Queries and Concerns */}
          <div>
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              10. Queries and Concerns
            </h2>
            <p className="text-gray-700 text-justify">
              If you would like to access, correct, update, or request deletion
              of your personal information, or if you have any concerns
              regarding your privacy, you may contact us at:
            </p>
            <div className="mt-3 text-gray-700 text-justify">
              <p>
                <strong>BDS School of Law</strong>
              </p>
              <p>
                Sector 8, Jagriti Vihar (Near Somdutt Vihar & Medical College
                Meerut)
              </p>
              <p>Garh Road, Meerut, Uttar Pradesh – 250004</p>
              <p>Phone: +91 8126274161</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-gray-500 mt-10 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          © {new Date().getFullYear()} BDS School of Law. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Privacy;
