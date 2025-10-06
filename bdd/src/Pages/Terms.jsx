import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      title: "Overview",
      content: `This website is operated by BDS School of Law. Throughout the site, the terms “we”, “us” and “our” refer to BDS School of Law. We provide this website, including all information, tools, and services available here, to you—the user—conditioned upon your acceptance of all terms, conditions, policies, and notices stated below.

By visiting our website and/or availing any service from us, you engage in our “Service” and agree to be bound by these Terms & Conditions (“Terms”), including any additional policies referenced herein or available by hyperlink. These Terms apply to all users of the site, including without limitation browsers, applicants, students, faculty, staff, vendors, and contributors of content.

If you do not agree to these Terms, you should not access or use this website. Your continued use of the site after any updates constitutes acceptance of those changes.`,
    },
    {
      title: "1. General Conditions",
      content: `You agree not to misuse the website or interfere with its proper functioning. Your content (excluding sensitive financial data) may be transmitted over various networks and may undergo changes to meet technical requirements of connecting systems.

Credit card or other sensitive payment information (if collected) will always be encrypted during transfer. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website or its services without express written permission from us.

You must not use the website for unlawful purposes or in a way that could damage, disable, or impair our services or affect others’ use of the website.`,
    },
    {
      title: "2. Accuracy of Information",
      content: `While we strive to provide accurate and updated information, we are not responsible if the material on this site is incomplete, outdated, or inaccurate.

The content is for general informational purposes only and should not be the sole basis for decision-making without consulting official sources or contacting the institution.`,
    },
    {
      title: "3. Modifications to Courses and Fees",
      content: `All courses, programmes, academic details, and fee structures are subject to revision by the College’s governing bodies.

We reserve the right to modify or discontinue any course, programme, or feature without prior notice. We are not liable to you or third parties for any such changes.`,
    },
    {
      title: "4. Third-Party Links",
      content: `Our website may contain links to third-party websites or resources. These are provided for convenience only. We do not control, endorse, or assume responsibility for the content, accuracy, or practices of external sites.

Any engagement with third-party products, services, or websites is solely at your own risk.`,
    },
    {
      title: "5. User Submissions & Feedback",
      content: `By submitting suggestions, proposals, feedback, or other materials (“submissions”), you grant us the right to use, copy, publish, and distribute such content without restriction.

We are under no obligation to (a) keep submissions confidential, (b) pay compensation for them, or (c) respond to them.

You agree that your submissions will not infringe on third-party rights, contain unlawful or offensive content, or introduce malware. You are solely responsible for any content you provide.`,
    },
    {
      title: "6. Personal Information",
      content: `Submission and handling of personal information are governed by our Privacy Policy.`,
    },
    {
      title: "7. Intellectual Property Rights",
      content: `All rights, titles, and interests in this website—including text, design, graphics, images, logos, documents, and software—are the exclusive property of BDS School of Law, unless otherwise stated.

Unauthorized use of our intellectual property is strictly prohibited.`,
    },
    {
      title: "8. Errors, Inaccuracies & Omissions",
      content: `Occasionally, there may be errors or omissions related to programmes, fee details, or other content.

We reserve the right to correct inaccuracies and update information without prior notice.`,
    },
    {
      title: "9. Prohibited Uses",
      content: `You are strictly prohibited from using the website:
- For unlawful or fraudulent purposes.
- To solicit others to participate in unlawful acts.
- To violate intellectual property rights.
- To harass, abuse, insult, defame, or discriminate.
- To spread viruses, malware, or malicious code.
- To collect personal information without consent.
- For spamming or unauthorized scraping.

Violation of these rules may lead to termination of your access.`,
    },
    {
      title: "10. Indemnification",
      content: `You agree to indemnify and hold harmless BDS School of Law, its officers, faculty, staff, agents, and affiliates from any claims, damages, or expenses (including legal fees) arising from your breach of these Terms or violation of any law or third-party rights.`,
    },
    {
      title: "11. Severability",
      content: `If any provision of these Terms is deemed unlawful or unenforceable, the remainder of the Terms shall continue to be valid and enforceable to the fullest extent permitted by law.`,
    },
    {
      title: "12. Entire Agreement",
      content: `These Terms, together with our Privacy Policy and any other posted policies, constitute the complete agreement between you and BDS School of Law regarding your use of this website.`,
    },
    {
      title: "13. Changes to Terms",
      content: `We may update or revise these Terms at any time. It is your responsibility to review this page periodically for updates. Your continued use of the website after changes signifies your acceptance of the revised Terms.`,
    },
    {
      title: "14. Governing Law & Jurisdiction",
      content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Meerut, Uttar Pradesh.`,
    },
    {
      title: "15. Contact Information",
      content: `For questions regarding these Terms & Conditions, please contact us at:

BDS School of Law  
Sector 8, Jagriti Vihar (Near Somdutt Vihar & Medical College Meerut)  
Garh Road, Meerut, Uttar Pradesh – 250004  
Phone: +91 8126274161`,
    },
  ];

  return (
    <div className="bg-[#FFFBD6] min-h-screen py-12 px-4 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#920C24] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Terms & Conditions
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <h2 className="text-2xl font-semibold text-[#920C24] mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 text-justify whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}

        <motion.p
          className="text-gray-500 mt-12 text-center text-sm"
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
