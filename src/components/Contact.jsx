import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* LinkedIn */}
          <div className="p-4 bg-gray-700 rounded-lg text-center group hover:bg-gray-600 transition">
            <a
              href="https://linkedin.com/in/krutay"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-4xl mx-auto mb-2 text-orange-500 group-hover:text-orange-400" />
              <span className="text-white group-hover:text-orange-400">LinkedIn</span>
              <p className="text-gray-400 text-sm mt-1">Connect with me</p>
            </a>
          </div>

          {/* GitHub */}
          <div className="p-4 bg-gray-700 rounded-lg text-center group hover:bg-gray-600 transition">
            <a
              href="https://github.com/krutay"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-4xl mx-auto mb-2 text-orange-500 group-hover:text-orange-400" />
              <span className="text-white group-hover:text-orange-400">GitHub</span>
              <p className="text-gray-400 text-sm mt-1">See my projects</p>
            </a>
          </div>

          {/* Email */}
          <div className="p-4 bg-gray-700 rounded-lg text-center group hover:bg-gray-600 transition">
            <a
              href="mailto:krutay@example.com"
              className="block"
              aria-label="Email Krutay"
            >
              <FaEnvelope className="text-4xl mx-auto mb-2 text-orange-500 group-hover:text-orange-400" />
              <span className="text-white group-hover:text-orange-400">krutay@example.com</span>
              <p className="text-gray-400 text-sm mt-1">Send me a message</p>
            </a>
          </div>

          {/* LeetCode */}
          <div className="p-4 bg-gray-700 rounded-lg text-center group hover:bg-gray-600 transition">
            <a
              href="https://leetcode.com/krutay"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="LeetCode Profile"
            >
              <FaCode className="text-4xl mx-auto mb-2 text-orange-500 group-hover:text-orange-400" />
              <span className="text-white group-hover:text-orange-400">LeetCode</span>
              <p className="text-gray-400 text-sm mt-1">View my coding solutions</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;