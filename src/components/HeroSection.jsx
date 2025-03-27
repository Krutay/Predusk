// src/components/HeroSection.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      id='home'
      className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between relative overflow-hidden"
    >
      {/* Navigation Bar */}
      <nav className="flex justify-center items-center px-6 md:px-12 py-6 md:text-lg">
        <ul className="flex space-x-6 md:space-x-8">
          <li>
            <a
              href="#home"
              className="text-orange-500 hover:text-orange-400 transition-colors"
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="About"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Works"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex mt-20 justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            I'm Krutay Upadhyay.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Web Developer, Data Analyst, and DevOps enthusiast creating awesome and effective solutions for companies of all sizes around the globe. Let's start scrolling and learn more about me.
          </p>
        </div>
      </div>

      {/* Ground Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
};

export default HeroSection;