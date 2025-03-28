import React from 'react';
import { FaRobot, FaChartBar, FaCogs, FaCloud } from 'react-icons/fa';

const skillsData = [
  { category: 'AI/ML', icon: FaRobot, skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'open-cv', 'Hugging Face'] },
  { 
    category: 'Data Analysis',
    icon: FaChartBar,
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Matplotlib',
      'Seaborn',
      'Statistics'
    ]
  },
  { 
    category: 'DevOps',
    icon: FaCogs,
    skills: [
      'Git & GitHub',
      'Docker',
      'Linux',
      'CI/CD Pipelines',
    ]
  },
  {
    category: 'Cloud',
    icon: FaCloud,
    skills: [
      'AWS',
      'Azure',
    ]
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-orange-50 text-white"
      style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className=" mx-6 px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((item) => (
            <div key={item.category} className="p-6 bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <item.icon className="text-3xl text-orange-500 mr-2" />
                <h3 className="text-2xl font-semibold text-orange-500">{item.category}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-600 hover:bg-orange-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
