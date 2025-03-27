import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const ResumeDownload = () => {
  return (
    <section
      id='resume'
      className="py-16 bg-gray-700 text-white"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
        <p className="text-lg mb-8">
          Download my resume to learn more about my skills and experience.
        </p>
        <a
          href="/KrutayUpadhyayResume.pdf"
          download
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors inline-flex items-center"
          aria-label="Download Krutay Upadhyay's Resume"
          title="Download Resume PDF"
        >
          <FaFilePdf className="mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;