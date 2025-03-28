import React, { useState } from 'react';
import axios from 'axios';
import { FaComment, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const resumeText = `
    Krutay's Resume
    Krutay Upadhyay
     +91 7016303826     krutayupadhyay@gmail.com     
    LinkedIn     
    GitHub     
    Leetcode
    Junior at IIT Dharwad, passionate about AI/ML and competitive programming. Skilled in
    leveraging machine learning for research and real-world applications. Seeking impactful
    opportunities to apply my skills and contribute to innovation.
    EDUCATION
    IIT Dharwad , Computer Science and Engineering
    CPI : 8.94 
    Nov 2022 - Present
    Key coursework completed includes Artificial Intelligence, Probability, Data Analysis,
    Design Algorithm and Analysis, Computer Architecture, Deep Learning, Operating
    Systems, Database and Information Systems and Software Development for
    Scientific Computing.
    RMG Maheshwari English Academy 
    XII : 96%
    J.H Ambani Saraswati Vidyamandir 
    X : 95%
    2020 - 2022
    2010 -2020
    SKILLS
    🔹
    Programming Skills : Python | Java (basic) | C | C++
    🔹
    Machine Learning: NumPy | Pandas | Matplotlib | PyTorch | Deep Learning | Computer Vision
    🔹
    🔹
    Frameworks : YOLO | OpenCV | Mediapipe
    Tools : Github | Google Colab | SQL
    🔹
    Web Development : HTML | CSS | JavaScript | Bootstrap (Basics) | React with Node.js (Basics)
    ACHEIVMENTS
    Joint Entrance Exam, Advanced (JEE-A) : All India Rank 4058
    🔹
    🔹
    Joint Entrance Exam, Mains (JEE-M) : All India Rank 4251
    🔹
    GUJCET : Scored 102 out of 120
    🔹
    AI/ML Certification (Coursera) : Completed the comprehensive AI/ML Certification by Andrew
    Ng, mastering fundamental and advanced machine learning concepts including supervised and
    unsupervised learning, deep learning, and practical model evaluation techniques.
    🔹
    AI/ML Workshop (IISc Bangalore) : Participated in an intensive AI/ML Workshop at IISc
    Bangalore, developing advanced skills in neural networks and data-driven decision-making
    through hands-on projects and real-world applications.
    🔹
    Vocational Training Certificate(Reliance Industries lmt.) : Obtained hands-on expertise in
    networking, web development, and database monitoring. Developed practical skills through real
    world projects, enhancing technical proficiency and problem-solving abilities.
    PROJECTS & RESEARCH
    🔹
    Pose Estimation & Injury Risk Prediction (Research, IIT Dharwad)
    Developing a computer vision system to evaluate poses against expert
    benchmarks, predicting injury risks based on age, flexibility, balance, and speed
    using mediapipe.
    Transfer Learning for Biological Networks (Research, IIT Dharwad)
    🔹
    Researched machine learning applications in network biology to predict biological
    behaviors using transfer learning using Bert Tokenizer model.
    🔹
    Human Detection & Tracking using YOLOv8 & DeepSORT
    Built a real-time object tracking system for human detection with YOLOv8 and
    DeepSORT, achieving high accuracy in motion tracking.
    🔹
    Mastermind Game using Genetic Algorithms
    Developed an AI-powered solver for the Mastermind game using evolutionary
    algorithms.
    EXTRACURRICULARS & LEADERSHIP
    🔹
    GradStories Project – Career Development Cell (CDC), IIT Dharwad:
    Conducted comprehensive interviews with alumni to gather and share career guidance and
    success strategies, contributing to the CDC's mission of fostering professional development among
    students.
    Inter IIT Football Team, IIT Dharwad:
    🔹
    Represented the institute in the 56th Inter IIT Sports Meet, showcasing teamwork, discipline,
    and competitive spirit.
    Organizing Team Member, IIT Dharwad Events:
    🔹
    Assisted in the successful execution of major events including Parsec (Annual Tech Fest) and
    Freshers’ Events, demonstrating strong organizational and coordination skills.
    General Secretary (Ground Floor), IIT Dharwad:
    🔹
    Led hostel operations by coordinating communications, organizing community events, and
    managing daily tasks—demonstrating strong leadership, initiative, and effective problem-solving
    skills.
    Languages:
    🔹
    Proficient in Sanskrit, English, Hindi, and Gujarati
  `;

  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `You are a chatbot that can answer questions about Krutay's resume. Here is the resume: ${resumeText}`,
    },
    {
      role: 'assistant',
      content: 'Hello! I can answer questions about Krutay’s resume. Try asking something like "What are my skills?" or "What projects have I worked on?"',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);

    try {
      console.log('Groq API Key:', import.meta.env.VITE_GROQ_API_KEY);
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const newResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: newResponse }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'An error occurred while fetching the response.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-w-[90%] bg-gray-800 rounded-lg shadow-lg z-50">
          <div className="p-4 h-64 overflow-y-auto">
            {messages
              .filter((msg) => msg.role !== 'system')
              .map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg break-words ${
                      msg.role === 'user' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-white'
                    }`}
                  >
                    <strong className="text-gray-400">
                      {msg.role === 'user' ? 'You' : 'Bot'}:
                    </strong>{' '}
                    {msg.content}
                  </span>
                </div>
              ))}
            {loading && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-gray-600 text-white">
                  Typing...
                </span>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="p-2 border-t border-gray-700 flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about my resume..."
              className="w-[80%] p-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              className="w-[20%] bg-orange-500 p-2 rounded-r-md text-white hover:bg-orange-600"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-orange-600"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? <FaTimes className="w-6 h-6" /> : <FaComment className="w-6 h-6" />}
      </button>
    </>
  );
};

export default Chatbot;